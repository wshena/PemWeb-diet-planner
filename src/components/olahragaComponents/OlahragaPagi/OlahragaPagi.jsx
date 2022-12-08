import React, { useState, useRef, useEffect } from 'react'
import Popup from 'reactjs-popup';

import ORI1 from '../../../assets/OR1.png'
import {olahraga} from '../../../data/data'

function OlahragaPagi() {
  const Ref = useRef(null)
  const [timer, setTimer] = useState('00:00');
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
        total, minutes, seconds
    };
  }
  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
        setTimer(
            (minutes > 9 ? minutes : '0' + minutes) + ':'
            + (seconds > 9 ? seconds : '0' + seconds)
        )
    }
  }
  const clearTimer = (e) => {
    setTimer('00:30');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 0);
    return deadline;
  }
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime());
  }

  let index = 0;
  const addIndex = (index) => {
    index += 1;
    console.log(index)
  } 

  return (
    <>
    <div className="container">
      <div className="olahraga-wrapper">
        <div className="row">
          <img src={ORI1} alt="olahraga pagi" width='40%' />
          <div className="row-text container ">
            <div className="nama">
              <h3>{olahraga[0].nama}</h3>
              <p>{olahraga[0].durasi}</p>
            </div>
            <div className="button">
              <p>{olahraga[0].deskripsi}</p>
              <Popup trigger={<button className="button"> Mulai </button>} modal nested>
                {close => (
                  <>
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> {olahraga[0].nama} </div>
                      <div className="content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        {olahragaCards[index]}
                        <p>{timer}</p>
                        <button onClick={onClickReset} style={{padding: '5px', marginTop: '10px'}}>Reset</button>
                        <button onClick={addIndex(index)} style={{padding: '5px', marginTop: '10px'}}>Next</button>
                      </div>
                    </div>
                    </>
                )}
              </Popup>
            </div>
          </div>
        </div>

        <div className="instruction">
          <div className="instruction-title">
            <h3>Instruksi</h3>
            <p>{olahraga[0].jumlahLatihan}</p>
          </div>
          <div className="instructions">
              {instructionItems}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default OlahragaPagi

// const olahragaCard = (index, timer, onClickReset) => {    
//   return (
//     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
//       <h3>{olahraga[0].instruksi[index].nama}</h3>
//       <img src={olahraga[0].instruksi[index].gambar} alt={olahraga[0].instruksi[index].nama} />
//       <p>{timer}</p>
//       <button onClick={onClickReset} style={{padding: '5px', marginTop: '10px'}}>Reset</button>
//     </div>
//   )
// }

const olahragaCards =[];
{olahraga[0].instruksi.forEach((item) => {
  olahragaCards.push(
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h3>{item.nama}</h3>
      <img src={item.gambar} alt={item.nama} />      
    </div>
  )
})}

const instructionItems = [];
{olahraga[0].instruksi.forEach((item) => {
  instructionItems.push(
    <div className="instuction-item">
      <div className="id" style={{borderRadius: '50%', border: '1px solid black', padding: '3px', marginRight: '10px', width: '30px', height: '30px',display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <p>{item.id}</p>
      </div>
      <img src={item.gambar} alt={item.nama} />
      <div className="item-name">
        <p>{item.nama}</p>
        <p>{item.durasi}</p>
      </div>
    </div>
  )
})}