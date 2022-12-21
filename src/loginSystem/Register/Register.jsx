// import React from 'react'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext';

const Register = () => {
    const {registerUser, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
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
            setSuccessMsg(false);
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await registerUser(formData);
        if(data.success){
            e.target.reset();
            setSuccessMsg('You have successfully registered.');
            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }

    return (
    <>
    <div className="register">
        <div className="bgImg">
            <img src="src/assets/ketogenic-low-carbs-diet2 1.png" alt="bg image" />
        </div>
        <div className="register-content">
            <div className="register-card">
                <h1 style={{textAlign: 'center', marginBottom:'20px'}}>SIGN IN</h1>
                <form className="register-form" onSubmit={submitForm}>
                    <input type="text" name="name" id="name" placeholder='User name' style={{width: '100%'}} onChange={onChangeInput} value={formData.name} required/>
                    <input type="email" name="email" id="email" placeholder='Email address'style={{width: '100%'}} onChange={onChangeInput} value={formData.email} required/>
                    <input type="password" name="password" id="password" placeholder='Password'style={{width: '100%'}} onChange={onChangeInput} value={formData.password}/>

                    {successMsg && <div className="success-msg">{successMsg}</div>}
                    {errMsg && <div className="err-msg">{errMsg}</div>}
                    <a href="/profile">
                        <button type="submit" disabled={wait} className='btn-blue'>Sign Up</button>
                    </a>
                </form>
                <p style={{
                    textAlign: 'center',
                    fontSize: '12px'
                }}>Already have an account? Login <a href="/login">here</a></p>
                
            </div>
        </div>
    </div>
    </>
    
    )
}

export default Register