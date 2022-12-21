import React from 'react'
import cardBg1 from '../../../assets/Rectangle36.png'
import cardBg2 from '../../../assets/Rectangle38Diet.png'
import cardBg3 from '../../../assets/Rectangle40Diet.png'

function WhyUs() {
  return (
    <div className="whyUs container">
        <h1 className='title'>Mengapa memilih kami</h1>
        <p className="titleDescription">
		Kami menyediakan latihan terbaik dan resep diet sehat dari berbagai negara untuk memastikan anda mendapatkan program diet yang dipersonalisasi khusus untuk anda.
        </p>

				<div className="cards">
					{cardsComponnetArray}
				</div>
    </div>
  )
}

export default WhyUs

const cardsComponnetArray = [
	<div className="card" style={{
		backgroundImage : `url(${cardBg1})`
	}}>
		<div className="card-content">
			<div className="card-logo">1</div>
			<div className="card-text">
				<h1>Nutrition Strategies</h1>
				<p>Menemukan resep untuk diet anda semudah mengeklik tombol. Menyediakan resep yang sesuai dengan selera anda, dan memotivasi anda untuk segera pergi ke dapur!</p>
			</div>
		</div>
	</div>,

	<div className="card" style={{
		backgroundImage : `url(${cardBg2})`
	}}>
		<div className="card-content">
			<div className="card-logo">2</div>
			<div className="card-text">
				<h1>Workout Strategies</h1>
				<p>Menemukan program olahraga dengan mudah. Menyediakan program sesuai dengan kemampuan dan kemauan anda. Memotivasi anda untuk segera pergi ke gym dan berolahraga</p>
			</div>
		</div>
	</div>,

	<div className="card" style={{
		backgroundImage : `url(${cardBg3})`
	}}>
		<div className="card-content">
			<div className="card-logo">3</div>
			<div className="card-text">
				<h1>Diet Strategies</h1>
				<p>Dengan kombinasi resep sehat dan program olahraga yang kami rekomendasikan ke anda, anda dapat memperoleh program diet yang sesuai dengan kebutuhan dan selera anda. Sehingga anda dapat melakukannya dengan riang dan gembira</p>
			</div>
		</div>
	</div>,
]