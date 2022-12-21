import React, { useEffect, useState } from "react"
import {useContext} from 'react'
import {UserContext} from '../loginSystem/context/UserContext'

function ProfilePage() {
	const {user, logout} = useContext(UserContext);

	return (
    <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
			<div className="profile-wrapper">
				<div className="profile-img">
					<div className="img">
						<img src="src/assets/Circled User Male Skin Type 7.png" alt="profile" />
					</div>
					<div>
						{/* <h3>Name</h3>
						<h3>Email</h3> */}
						<h3>{user.name}</h3>
						<h3>{user.email}</h3>
						{/* {display(user.name, user.email)} */}
						<button onClick={logout} className="button">Log Out</button>
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProfilePage

const display = (name, email) => {
	if (name != null && email != null) {
		return (
			<>
			<h3>{user.name}</h3>
			<h3>{user.email}</h3>
			</>
		)
	}
	return (
		<>
			<h3>Nama</h3>
			<h3>Email</h3>
		</>
	)
}