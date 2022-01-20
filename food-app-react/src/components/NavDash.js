import { Link } from "react-router-dom";
import cart from "../images/cart.png";
import cartAdded from "../images/cartAdded.png";
import img from "../images/logo.png";

export default function NavDash(props){
    
    return(
        <div className="nav">
            <div className="logo">
                <Link to="/dashboard">
                    <img className="logoImg" src={img} alt="logo img" />
                </Link>
            </div>
            <div className="displayText">
                <h2>
                    Hello, {props.username}
                </h2>
            </div>
            <div className="navbar">
                <Link to="/cart">
                    {
                        props.empty.length === 0 ? <img className="cart" src={cart} alt="cart icon"/> : <img className="cart" src={cartAdded} alt="cart icon"/>
                    }
                </Link>
                <button className="navBtn" onClick={props.action}>log out</button>
            </div>
        </div>
    );
}