import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";

import OR1 from '../../../assets/OR1.png'
import OR2 from '../../../assets/OR2.png'
import OR3 from '../../../assets/OR3.png'

import kuadrisepKanan from '../../../assets/KS.png'
import kuadrisepKiri from '../../../assets/KSK.png'
import plank from '../../../assets/plank.png'
import birdDog from '../../../assets/birdDog.png'
import cobra from '../../../assets/cobra.png'
import sikapAnak from '../../../assets/sikapAnak.png'

function OlahragaProgram() {
	return (
		<div className="olahragaProgram container">
        <div className="programs">
					{programArray}
				</div>
    </div>
  )
}

export default OlahragaProgram

const programArray = [
	<div className="program">
		<div className="program-image"> <img src={OR1} alt="olahraga1" width='100%' height='100%' /> </div>
		<div className="program-title">
			<h3>Pemanasan pagi</h3>
			<p>4-5 menit</p>
		</div>
		<div className="program-detail">
			<div className="instruction">
				<h3>Instruksi</h3>
				<p>9 Latihan</p>
			</div>
			<h3 style={{marginBottom: '20px'}}>Bangun dengan energi, agar tubuh anda  siap untuk hari ini.</h3>
			<div className="program-detail-list">
				<div className="list">
					<img src={kuadrisepKiri} alt="kuadrisep"/>
					<div className="list-text">
						<p className="name">Kuadrisep Kiri</p>
						<p className="duration">30 Detik</p>
					</div>
				</div>

				<div className="list" style={{marginTop: '20px'}}>
					<img src={kuadrisepKanan} alt="kuadrisep"/>
					<div className="list-text">
						<p className="name">Kuadrisep Kanan</p>
						<p className="duration">30 Detik</p>
					</div>
				</div>

				<div className="button-wraper" style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '20px'
				}}>
					<button style={{
						padding: '10px 25px',
						border: 'none',
						backgroundColor: '#FEB662'
					}}  >Mulai</button>
				</div>
			</div>
		</div>
	</div>,

	<div className="program">
		<div className="program-image"> <img src={OR2} alt="olahraga2" width='100%' height='100%' /> </div>
		<div className="program-title">
			<h3>Peregangan sebelum tidur</h3>
			<p>6-7 menit</p>
		</div>
		<div className="program-detail">
			<div className="instruction">
				<h3>Instruksi</h3>
				<p>8 Latihan</p>
			</div>
			<h3 style={{marginBottom: '20px'}}>Tenangkan diri anda dan dapatkan tidur berkualitas.</h3>
			<div className="program-detail-list">
				<div className="list">
					<img src={plank} alt="kuadrisep"/>
					<div className="list-text">
						<p className="name">Plank</p>
						<p className="duration">30 Detik</p>
					</div>
				</div>

				<div className="list" style={{marginTop: '20px'}}>
					<img src={birdDog} alt="kuadrisep"/>
					<div className="list-text">
						<p className="name">Bird Dog</p>
						<p className="duration">30 Detik</p>
					</div>
				</div>

				<div className="button-wraper" style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '20px'
				}}>
					<button style={{
						padding: '10px 25px',
						border: 'none',
						backgroundColor: '#FEB662'
					}} onClick={() => {
						console.log('click')
					}}>Mulai</button>
				</div>
			</div>
		</div>
	</div>,

	<div className="program">
		<div className="program-image"> <img src={OR3} alt="olahraga2" width='100%' height='100%' /> </div>
		<div className="program-title">
			<h3>HIIT Pembakar Lemak Perut</h3>
			<p>15 menit</p>
		</div>
		<div className="program-detail">
			<div className="instruction">
				<h3>Instruksi</h3>
				<p>24 Latihan</p>
			</div>
			<h3 style={{marginBottom: '20px'}}>Latihan ini berintensitas tinggi dengan efek pembakaran lanjut.</h3>
			<div className="program-detail-list">
				<div className="list">
					<img src={cobra} alt="kuadrisep"/>
					<div className="list-text">
						<p className="name">Peragangan Cobra</p>
						<p className="duration">30 Detik</p>
					</div>
				</div>

				<div className="list" style={{marginTop: '20px'}}>
					<img src={sikapAnak} alt="kuadrisep"/>
					<div className="list-text">
						<p className="name">Sikap Anak</p>
						<p className="duration">30 Detik</p>
					</div>
				</div>

				<div className="button-wraper" style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '20px'
				}}>
					<button style={{
						padding: '10px 25px',
						border: 'none',
						backgroundColor: '#FEB662'
					}} onClick={() => {
						console.log('click')
					}}>Mulai</button>
				</div>
			</div>
		</div>
	</div>

]