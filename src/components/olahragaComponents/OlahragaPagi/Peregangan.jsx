import React from 'react'
import ORI1 from '../../../assets/OR1.png'

import {olahraga} from '../../../data/data'

function Peregangan() {
  return (
    <div className="container">
      <div className="olahraga-wrapper">
        <div className="row">
          <img src={ORI1} alt="olahraga pagi" width='40%' />
          <div className="row-text container ">
            <div className="nama">
              <h3>{olahraga[1].nama}</h3>
              <p>{olahraga[1].durasi}</p>
            </div>
            <div className="button">
              <p>{olahraga[1].deskripsi}</p>
                <button type="submit">Mulai</button>
            </div>
          </div>
        </div>

        <div className="instruction">
          <div className="instruction-title">
            <h3>Instruksi</h3>
            <p>{olahraga[1].jumlahLatihan}</p>
          </div>
          <div className="instructions">
              {instructionItems}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Peregangan

const instructionItems = [];
{olahraga[1].instruksi.forEach((item) => {
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