import React from 'react'
import {ResepMakanan} from '../../../data/data'


function ResepMaknanan5() {
	let langkah = ResepMakanan[5].langkah;
	// let bahanSaus = ResepMakanan[5].bahanSaos;

  return (
    <div className="container">
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
				<h1 style={{fontSize: '30px'}}>Resep Makanan</h1>
				<a href="/resep" style={{color: 'black', textDecoration: 'none', fontSize: '18px'}}>Kembali</a>
			</div>
			<div className="resepWrapper" style={{height: '600px'}}>
			<div className="resepImg" style={{backgroundImage: `url(${ResepMakanan[5].bgBesar})`}}></div>
			<div className="resepDeskription">
				<div className="resepName">
					<div className="name">
						<h3 style={{color: 'orange'}}>{ResepMakanan[5].nama}</h3>
						<p style={{color: 'orange'}}>{ResepMakanan[5].porsi}</p>
					</div>
					<p style={{color: 'orange'}}>{ResepMakanan[5].durasi}</p>
				</div>
				<div className="resepBahan">
					<p style={{margin: '20px 0', color: 'orange'}}>Bahan-Bahan</p>
					<div className="ingredients">
						<div className="ingredient">
							<img src={ResepMakanan[5].gambarBahan[0]} alt="bahan" />
							<p>{ResepMakanan[5].bahan[0]}</p>
							<p>{ResepMakanan[5].jumlahBahan[0]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[5].gambarBahan[1]} alt="bahan" />
                            <p>{ResepMakanan[5].bahan[1]}</p>
							<p>{ResepMakanan[5].jumlahBahan[1]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[5].gambarBahan[2]} alt="bahan" />
                            <p>{ResepMakanan[5].bahan[2]}</p>
							<p>{ResepMakanan[5].jumlahBahan[2]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[5].gambarBahan[3]} alt="bahan" />
                            <p>{ResepMakanan[5].bahan[3]}</p>
							<p>{ResepMakanan[5].jumlahBahan[3]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[5].gambarBahan[4]} alt="bahan" />
                            <p>{ResepMakanan[5].bahan[4]}</p>
							<p>{ResepMakanan[5].jumlahBahan[4]}</p>
						</div>
						<div className="ingredient">
							<img src={ResepMakanan[5].gambarBahan[5]} alt="bahan" />
                            <p>{ResepMakanan[5].bahan[5]}</p>
							<p>{ResepMakanan[5].jumlahBahan[5]}</p>
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
export default ResepMaknanan5