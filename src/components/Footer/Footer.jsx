import React from 'react'
import logo from '../../assets/diett 2logo.png'

function Footer() {
  return (
    <footer className="footer container">
      {/* <div className="footer-image">
				<img src={logo} alt="logo" />
			</div> */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <img src="src/assets/copyright.png" alt="copyright" width='20px' height='20px'/>
        <p style={{marginLeft: '10px'}}>Diet Planner by Kelompok 6</p>
      </div>
    </footer>
  )
}

export default Footer