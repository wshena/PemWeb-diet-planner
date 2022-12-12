import React from 'react'
import {ResepMakanan} from '../../../data/data'


function ResepMaknanan7() {
	let langkah = ResepMakanan[7].langkah;
	// let bahanSaus = ResepMakanan[7].bahanSaos;

  return (
    <div className="container">
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
				<h1 style={{fontSize: '30px'}}>Resep Makanan</h1>
				<a href="/resep" style={{color: 'black', textDecoration: 'none', fontSize: '18px'}}>Kembali</a>
			</div>
			<div className="resepWrapper" style={{height: '600px'}}>
			<div className="resepImg" style={{backgroundImage: `url(${ResepMakanan[7].bgBesar})`}}></div>
			<div className="resepDeskription">
				<div className="resepName">
					<div className="name">
						<h3 style={{color: 'orange'}}>{ResepMakanan[7].nama}</h3>
						<p style={{color: 'orange'}}>{ResepMakanan[7].porsi}</p>
					</div>
					<p style={{color: 'orange'}}>{ResepMakanan[7].durasi}</p>
				</div>
				<div className="resepBahan">
					<p style={{margin: '20px 0', color: 'orange'}}>Bahan-Bahan</p>
					<div className="ingredients">
						<div className="ingredient">
							<img src={ResepMakanan[7].gambarBahan[0]} alt="bahan" />
							<p>{ResepMakanan[7].bahan[0]}</p>
							<p>{ResepMakanan[7].jumlahBahan[0]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[7].gambarBahan[1]} alt="bahan" />
                            <p>{ResepMakanan[7].bahan[1]}</p>
							<p>{ResepMakanan[7].jumlahBahan[1]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[7].gambarBahan[2]} alt="bahan" />
                            <p>{ResepMakanan[7].bahan[2]}</p>
							<p>{ResepMakanan[7].jumlahBahan[2]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[7].gambarBahan[3]} alt="bahan" />
                            <p>{ResepMakanan[7].bahan[3]}</p>
							<p>{ResepMakanan[7].jumlahBahan[3]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[7].gambarBahan[4]} alt="bahan" />
                            <p>{ResepMakanan[7].bahan[4]}</p>
							<p>{ResepMakanan[7].jumlahBahan[4]}</p>
						</div>
					</div>
				</div>

				<div className="resepLangkah">
					<p style={{color: 'orange'}}>Langkah-Langkah :</p>
					{langkah}
				</div>
			</div>
		</div>
		</div>
  )

}
export default ResepMaknanan7