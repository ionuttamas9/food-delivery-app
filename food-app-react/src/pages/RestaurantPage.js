import axios from "axios";
import { useEffect, useState } from "react";
import NavDash from "../components/NavDash";

const GET_MENU = 'http://localhost:8080/menu/';

export default function RestaurantPage(props){

    const {username, onAdd, goToLogin} = props;
    
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get(GET_MENU + props.restaurant).then((res) => {
            setMenu(res.data);
        })
    }, [props]);
    
    return(
        <>
        <NavDash username={username} action={goToLogin} empty={props.cartItems}/>
        <div className="menu">
            {menu.map((menuElement) => 
            <div className="restaurantItems">
                <p>{menuElement.name} </p>
                <p> {menuElement.price} lei {menuElement.calories} kcal</p>
                <button className="navBtn" onClick={() => onAdd(menuElement)}>adauga</button>
            </div>
            )}
        </div>
        {console.clear()}
        </>
    );
}