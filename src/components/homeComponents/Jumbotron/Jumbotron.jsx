import React from 'react'
import jumbotronBg from '../../../assets/jumbotronBg.jpg'

function Jumbotron() {
  return (
    <div className="jumbotron container js-start" style={{
			backgroundImage : `url(${jumbotronBg})`,
		}}>
			<div className="jumbotron-content text-start">
				<h1>Raih Berat Badan Idealmu</h1>
				<p>Jalani diet dengan mudah bersama kami. Dan kami akan membantu anda untuk melakukan diet dengan memberikan rekomendasi makanan dari program diet yang kami tawarkan selama proses diet berlangsung.</p>
				<p>~ Enjoy Your Diet </p>

				<a href="/register" className='button-link'>
					<button className="btn btn-primary">Gabung Gratis</button>
				</a>
			</div>
		</div>
  )
}

export default Jumbotron