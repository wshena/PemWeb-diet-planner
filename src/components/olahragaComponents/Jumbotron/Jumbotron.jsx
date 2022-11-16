import React from 'react'
import bg from '../../../assets/pexels-frank-cone-2291874.jpg'
function Jumbotron() {
  return (
    <div className="jumbotron container js-end" style={{
        backgroundImage: `url(${bg})`,
    }}>
      <div className="jumbotron-content text-end">
				<h1 className='text-white'>Begin your journey by choosing our exercise program!</h1>
				<p className='text-white'>We provide exercise programs according to the conditions and desires chosen by you</p>
			</div>
    </div>
  )
}

export default Jumbotron