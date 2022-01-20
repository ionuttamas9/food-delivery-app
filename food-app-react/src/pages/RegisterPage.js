import { useState } from "react";
import axios from "axios";
import { store } from "react-notifications-component";
import img from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const USER_REGISTER_URL = 'http://localhost:8080/user/register';

export default function RegisterComp(props){

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const goToLogin = () => {
        navigate('/');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(USER_REGISTER_URL,
            {username: username, 
            password: password,
            email: email,
            name: name
        })
        .then(() => {
            store.addNotification({
                title: 'New user registered.',
                message: 'User successfully registered.',
                type: 'info',
                container: 'top-center',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000
                }
                });
            goToLogin();
        })
        .catch((error) => {
            console.log();
            store.addNotification({
                message: error.response.data,
                type: 'danger',
                container: 'top-center',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000
                }
                });
        });;
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
        <div className="registerComponent">
            <form className="container" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input 
                    className = 'inputComponent'
                    name = 'Name'
                    type = { 'text' }
                    placeholder = { 'Name' }
                    value = { name }
                    onChange = { event => setName(event.target.value) }
                />
                <input 
                    className = 'inputComponent'
                    name = 'email'
                    type = { 'email' }
                    placeholder = { 'Email' }
                    value = { email }
                    onChange = { event => setEmail(event.target.value) }
                />
                <input 
                    className = 'inputComponent'
                    name = 'username'
                    type = { 'text' }
                    placeholder = { 'Username' }
                    value = { username }
                    onChange = { event => setUsername(event.target.value) }
                />
                <input 
                    className = 'inputComponent'
                    name = 'password'
                    type = { 'password' }
                    placeholder = { 'Password' }
                    value = { password }
                    onChange = { event => setPassword(event.target.value) }
                />
                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
        </>
    );
}