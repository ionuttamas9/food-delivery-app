import axios from 'axios';
import { useState } from 'react';
import { store } from 'react-notifications-component';
import img from "../images/logo.png";
import { Link } from "react-router-dom";

const USER_LOGIN_URL = 'http://localhost:8080/user/login';

export default function LoginComp(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(USER_LOGIN_URL,
            {username: username, 
            password: password})
        .then((res) => {
            if(res.data){
                props.action(username);
            }
        }).catch(() => {
            store.addNotification({
                message: 'The user or the password is not correct.',
                type: 'danger',
                container: 'top-center',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000
                }
                });
        });
    };

    return (
        <>
        <div className="nav">
            <div className="logo">
                <Link to="/">
                    <img className="logoImg" src={img} alt="logo img" />
                </Link>
            </div>
            <div className='navbar'>
                <Link to="/">
                    <button className="navBtn">login</button>
                </Link>
                <Link to="/register">
                    <button className="navBtn">register</button>
                </Link>
            </div>   
        </div>
        <div className="loginComponent">
            <form className="container" onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <input
                    className='inputComponent'
                    name='username'
                    type={'text'}
                    placeholder={'Username'}
                    value={username}
                    onChange={event => setUsername(event.target.value)} />
                <input
                    className='inputComponent'
                    name='password'
                    type={'password'}
                    placeholder={'Password'}
                    value={password}
                    onChange={event => setPassword(event.target.value)} />
                <button className="btn" type="submit">
                    Login
                </button>
            </form>
        </div>
        </>
    );
}