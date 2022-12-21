import React from 'react'
import bg from '../../..//assets/food1.png'

function JoinUs() {
  return (
    <div className="joinUs container">
			<div className="joinUs-text">
				<h3>Tertarik untuk bergabung?</h3>
				<h1>Dapatkan program diet anda dan mulailah berpetualang!</h1>
				<a href="/register"> <button className='btn btn-register'>Daftar</button> </a>
			</div>
			<div className="joinUs-image" style={{
				backgroundImage : `url(${bg})`,
			}}></div>
		</div>
  )
}

export default JoinUs