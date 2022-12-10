import React from 'react'
import {ResepMakanan} from '../../../data/data'


function ResepMakanan0() {
	let langkah = ResepMakanan[0].langkah;
	// let bahanSaus = ResepMakanan[0].bahanSaos;

  return (
    <div className="container">
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
				<h1 style={{fontSize: '30px'}}>Resep Makanan</h1>
				<a href="/resep" style={{color: 'black', textDecoration: 'none', fontSize: '18px'}}>Kembali</a>
			</div>
			<div className="resepWrapper" style={{height: '600px'}}>
			<div className="resepImg" style={{backgroundImage: `url(${ResepMakanan[0].bgBesar})`}}></div>
			<div className="resepDeskription">
				<div className="resepName">
					<div className="name">
						<h3 style={{color: 'orange'}}>{ResepMakanan[0].nama}</h3>
						<p style={{color: 'orange'}}>{ResepMakanan[0].porsi}</p>
					</div>
					<p style={{color: 'orange'}}>{ResepMakanan[0].durasi}</p>
				</div>
				<div className="resepBahan">
					<p style={{margin: '20px 0', color: 'orange'}}>Bahan-Bahan</p>
					<div className="ingredients">
						<div className="ingredient">
							<img src={ResepMakanan[0].gambarBahan[0]} alt="bahan" />
							<p>{ResepMakanan[0].bahan[0]}</p>
							<p>{ResepMakanan[0].jumlahBahan[0]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[0].gambarBahan[1]} alt="bahan" />
							<p>{ResepMakanan[0].bahan[1]}</p>
							<p>{ResepMakanan[0].jumlahBahan[1]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[0].gambarBahan[2]} alt="bahan" />
							<p>{ResepMakanan[0].bahan[2]}</p>
							<p>{ResepMakanan[0].jumlahBahan[2]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[0].gambarBahan[3]} alt="bahan" />
							<p>{ResepMakanan[0].bahan[3]}</p>
							<p>{ResepMakanan[0].jumlahBahan[3]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[0].gambarBahan[4]} alt="bahan" />
							<p>{ResepMakanan[0].bahan[4]}</p>
							<p>{ResepMakanan[0].jumlahBahan[4]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[0].gambarBahan[5]} alt="bahan" />
							<p>{ResepMakanan[0].bahan[5]}</p>
							<p>{ResepMakanan[0].jumlahBahan[5]}</p>
						</div>
					</div>
				</div>

				<div className="resepLangkah">
					<p style={{color: 'orange'}}>Langkah-Langkah :</p>
					{langkah}
				</div>
				<div className="resepLangkah">
					<p style={{color: 'orange'}}>Bahan Saus :</p>
					<ul style={{fontSize:'15px'}}>
						{bahanSaus}
					</ul>
				</div>
			</div>
		</div>
		</div>
  )

}
const bahanSaus = []
{ResepMakanan[0].bahanSaos.forEach((item) => {
	bahanSaus.push(
		<li>{item}</li>
	)
})}

export default ResepMakanan0