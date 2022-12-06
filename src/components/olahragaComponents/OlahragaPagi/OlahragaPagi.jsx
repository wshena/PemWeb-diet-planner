
import React, { useState, Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ORI1 from '../../../assets/OR1.png'

import {olahraga} from '../../../data/data'

function OlahragaPagi() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initModal = () => {
    return invokeModal(!false)
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
              <button type="submit">Mulai</button>
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