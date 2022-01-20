import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavDash from "../components/NavDash";

const ALL_RESTAURANTS_URL = 'http://localhost:8080/restaurant/all_restaurants';

export default function DashboardComp(props){

    const {username, goToLogin} = props;

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get(ALL_RESTAURANTS_URL).then((res) => {
            setRestaurants(res.data);
        });
    }, [props]);

    return(
        <>
        <NavDash username={username} action={goToLogin} empty={props.cartItems}/>
        <div className="dashboard">
            {restaurants.map(restaurant => 
                <Link to={"/restaurant/" + restaurant.name}>
                    <article id={restaurant.id} className="restaurantArticle">
                        <h1>
                            {restaurant.name}
                        </h1>
                        <img className="restaurantLogo" src={process.env.PUBLIC_URL + restaurant.image} alt={restaurant.name} />
                        <p>{restaurant.description}</p>
                    </article>
                </Link>
            )}
        </div>
        {console.clear()}
        </>
    );
}