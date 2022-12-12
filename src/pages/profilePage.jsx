import React from 'react'

function ProfilePage() {
  return (
    <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
			<div className="profile-wrapper">
				<div className="profile-img">
					<div className="img"></div>
					<div>
						<h3>Vitto Scalleta</h3>
						<button className="button">Ubah Foto</button>
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProfilePage