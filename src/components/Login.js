import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import './Login.css'
import NavBar from './NavBar';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }))
    }
    return (
        <div className="login">
            <NavBar />
            <form action="" className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here</h1>
                <input 
                type="name"  
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>

                <input 
                type="Email"  
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

                <input 
                type="password"  
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="submit__btn">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login
