import React from 'react'
import bg from '../../../assets/pexels-frank-cone-2291874.jpg'
function Jumbotron() {
  return (
    <div className="jumbotron container js-end" style={{
        backgroundImage: `url(${bg})`,
    }}>
      <div className="jumbotron-content text-end">
        <h1 className='text-white'>Mulai petualangan anda dengan memilih program olahraga!</h1>
        <p className='text-white'>Kami menyediakan pilihan program olahraga agar anda dapat menyesuaikan dengan kebutuhan dan kemauan anda</p>
			</div>
    </div>
  )
}

export default Jumbotron