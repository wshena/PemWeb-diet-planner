import React from 'react'
import {ResepMakanan} from '../../../data/data'

function ResepPageLanjutan() {
  return (
    <div className="container">
			<h1 style={{fontSize: '30px', marginBottom: '50px'}}>Resep Makanan</h1>
			{ResepMakananLanjutan}
		</div>
  )
}

const ResepMakananLanjutan = [];
{ResepMakanan.forEach((element) => {
	let langkah = element.langkah;

	ResepMakananLanjutan.push(
		<div className="resepWrapper">
			<div className="resepImg" style={{backgroundImage: `url(${element.bgBesar})`}}></div>
			<div className="resepDeskription">
				<div className="resepName">
					<div className="name">
						<h3 style={{color: 'orange'}}>{element.nama}</h3>
						<p style={{color: 'orange'}}>{element.porsi}</p>
					</div>
					<p style={{color: 'orange'}}>{element.durasi}</p>
				</div>
				<div className="resepBahan">
					<p style={{margin: '20px 0', color: 'orange'}}>Bahan-Bahan</p>
					<div className="ingredients">
						<div className="ingredient">
							<img src={element.gambarBahan[0]} alt="bahan" />
							<p>{element.jumlahBahan[0]}</p>
						</div>
						<div className="ingredient">
							<img src={element.gambarBahan[1]} alt="bahan" />
							<p>{element.jumlahBahan[1]}</p>
						</div>
						<div className="ingredient">
							<img src={element.gambarBahan[2]} alt="bahan" />
							<p>{element.jumlahBahan[2]}</p>
						</div>
						<div className="ingredient">
							<img src={element.gambarBahan[3]} alt="bahan" />
							<p>{element.jumlahBahan[3]}</p>
						</div>
						<div className="ingredient">
							<img src={element.gambarBahan[4]} alt="bahan" />
							<p>{element.jumlahBahan[4]}</p>
						</div>
						<div className="ingredient">
							<img src={element.gambarBahan[5]} alt="bahan" />
							<p>{element.jumlahBahan[5]}</p>
						</div>
					</div>
				</div>

				<div className="resepLangkah">
					<p style={{color: 'orange'}}>Langkah-Langkah :</p>
					{langkah}
				</div>
			</div>
		</div>
	)
})}

export default ResepPageLanjutan