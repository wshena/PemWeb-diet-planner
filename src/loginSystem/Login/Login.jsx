import React from 'react'
import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import { useNavigate } from "react-router-dom";

function Login() {
	const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

	const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

	const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
            setRedirect('Redirecting...');
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }

    return (
        <>
        <div className="register">
            <div className="bgImg">
                <img src="src/assets/ketogenic-low-carbs-diet2 1.png" alt="bg image" />
            </div>
            <div className="register-content">
                <div className="register-card">
                    <h1 style={{textAlign: 'center', marginBottom:'20px'}}>LOG IN</h1>
                    <form action="" className="register-form" method='POST' onSubmit={submitForm}>
                        <input type="email" name="email" id="email" placeholder='Email address'style={{width: '100%'}} onChange={onChangeInput} value={formData.email}/>
                        <input type="password" name="password" id="password" placeholder='Password'style={{width: '100%'}} onChange={onChangeInput} value={formData.password}/>

                        {errMsg && <div className="err-msg">{errMsg}</div>}
                		{redirect ? redirect : <Link to={'/profile'}> <button type="submit" disabled={wait} className='btn-blue'>Login</button> </Link> }

						<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
							<a href="/register" style={{
								fontSize:'12px'
							}}>Sign in</a>
						</div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login