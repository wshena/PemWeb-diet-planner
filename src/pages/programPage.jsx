import React from 'react'
import bg from '../assets/programJumboBg.png'

import avocado from '../assets/alpukat.png'
import piring from '../assets/piring.png' 

const programDiet = [
	{
		nama: "Diet Paleo",
		deskripsi: "Diet yang mengadaptasi kebiasaanmakan nenek moyang pada zaman dulu. Dengan tujuan diet ini yakni mengembalikan kebiasaan makan manusia seperti manusia pada zaman dulu.",
		manfaat: "Mengkomsumsi makanan yang didapat dari proses pengolahanlama dianggap beresiko mengalami obesitas, diabetes serta penyakit kronis lainya. Mengkosusi makanan seperti nenek moyang di zaman prasejarah dipercaya dapat mengurangi risiko penyakit tersebut.",
		ketentuan: "Karena pada awalnya diet ini berat anda diberi kesempatan untuk makan apa saja bebas dalam 3 seminggu Anda harus mengkonsumsi yang alami bukan buatan"
	},
	{
		nama: "Diet Mediterania",
		deskripsi: "Diet yang mengadaptasi kebiasaanmakan nenek moyang pada zaman dulu. Dengan tujuan diet ini yakni mengembalikan kebiasaan makan manusia seperti manusia pada zaman dulu.",
		manfaat: "Mengkomsumsi makanan yang didapat dari proses pengolahanlama dianggap beresiko mengalami obesitas, diabetes serta penyakit kronis lainya. Mengkosusi makanan seperti nenek moyang di zaman prasejarah dipercaya dapat mengurangi risiko penyakit tersebut.",
		ketentuan: "Karena pada awalnya diet ini berat anda diberi kesempatan untuk makan apa saja bebas dalam 3 seminggu Anda harus mengkonsumsi yang alami bukan buatan"
	},
	{
		nama: "Diet DEBM",
		deskripsi: "Diet yang mengadaptasi kebiasaanmakan nenek moyang pada zaman dulu. Dengan tujuan diet ini yakni mengembalikan kebiasaan makan manusia seperti manusia pada zaman dulu.",
		manfaat: "Mengkomsumsi makanan yang didapat dari proses pengolahanlama dianggap beresiko mengalami obesitas, diabetes serta penyakit kronis lainya. Mengkosusi makanan seperti nenek moyang di zaman prasejarah dipercaya dapat mengurangi risiko penyakit tersebut.",
		ketentuan: "Karena pada awalnya diet ini berat anda diberi kesempatan untuk makan apa saja bebas dalam 3 seminggu Anda harus mengkonsumsi yang alami bukan buatan"
	},
]

function ProgramPage() {
  return (
  <>
	<div className="jumbotron container programJumbotron" style={{backgroundImage: `url(${bg})`}}>
		<div className="jumbotron-content">
			<h1 className='text-white'>Sesuaikan Program Dietmu</h1>
			<h3 className='text-white'>Kami menyediakan 3 program diet yang dapat anda ambil sesuai dengan kebutuhan anda</h3>
		</div>
	</div>

	<div className="programContent">
		<div className="diet">
			<img src={piring} alt="piring" style={{left: '0'}} />
			<div className="container" style={{position: 'relative'}}>
				<div className="diet-container">
					<div className="nama" style={{
						position: 'absolute', top: '-30px', right: '-20px',
						padding: '10px',
						display: 'flex',
						alignItems: 'center',
						backgroundColor: '#AED8FF'
					}}>
						<img src={avocado} alt="avocado" width='50px' height='50px' style={{position: 'relative'}}/>
						<h1 style={{fontSize: '18px', marginLeft: '20px'}}>{programDiet[0].nama}</h1>
					</div>
					<div className="section" style={{width: '40%', marginRight: '20px'}}>
						<h3>{programDiet[0].nama}</h3>
						<p>{programDiet[0].deskripsi}</p>
					</div>
					<div className="section" style={{width: '40%', marginRight: '20px'}}>
						<h3>Manfaat</h3>
						<p>{programDiet[0].manfaat}</p>
					</div>
					<div className="section" style={{width: '40%'}}>
						<h3>Ketentuan</h3>
						<p>{programDiet[0].ketentuan}</p>
					</div>
				</div>
			</div>
		</div>

		<div className="diet">
			<img src={piring} alt="piring" style={{left: '0'}} />
			<div className="container" style={{position: 'relative'}}>
				<div className="diet-container">
					<div className="nama" style={{
						position: 'absolute', top: '-30px', right: '-20px',
						padding: '10px',
						display: 'flex',
						alignItems: 'center',
						backgroundColor: '#AED8FF'
					}}>
						<img src={avocado} alt="avocado" width='50px' height='50px' style={{position: 'relative'}}/>
						<h1 style={{fontSize: '18px', marginLeft: '20px'}}>{programDiet[1].nama}</h1>
					</div>
					<div className="section" style={{width: '40%', marginRight: '20px'}}>
						<h3>{programDiet[1].nama}</h3>
						<p>{programDiet[1].deskripsi}</p>
					</div>
					<div className="section" style={{width: '40%', marginRight: '20px'}}>
						<h3>Manfaat</h3>
						<p>{programDiet[1].manfaat}</p>
					</div>
					<div className="section" style={{width: '40%'}}>
						<h3>Ketentuan</h3>
						<p>{programDiet[1].ketentuan}</p>
					</div>
				</div>
			</div>
		</div>

		<div className="diet">
			<img src={piring} alt="piring" style={{left: '0'}} />
			<div className="container" style={{position: 'relative'}}>
				<div className="diet-container">
					<div className="nama" style={{
						position: 'absolute', top: '-30px', right: '-20px',
						padding: '10px',
						display: 'flex',
						alignItems: 'center',
						backgroundColor: '#AED8FF'
					}}>
						<img src={avocado} alt="avocado" width='50px' height='50px' style={{position: 'relative'}}/>
						<h1 style={{fontSize: '18px', marginLeft: '20px'}}>{programDiet[2].nama}</h1>
					</div>
					<div className="section" style={{width: '40%', marginRight: '20px'}}>
						<h3>{programDiet[2].nama}</h3>
						<p>{programDiet[2].deskripsi}</p>
					</div>
					<div className="section" style={{width: '40%', marginRight: '20px'}}>
						<h3>Manfaat</h3>
						<p>{programDiet[2].manfaat}</p>
					</div>
					<div className="section" style={{width: '40%'}}>
						<h3>Ketentuan</h3>
						<p>{programDiet[2].ketentuan}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	</>
  )
}

export default ProgramPage