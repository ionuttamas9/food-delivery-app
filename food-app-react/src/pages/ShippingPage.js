import axios from "axios";
import { useEffect, useState } from "react";
import NavDash from "../components/NavDash";

const USER_REGISTER_URL = 'http://localhost:8080/shipping';

export default function ShippingPage(props){

    const [country, setCountry] = useState('');
    const [county, setCounty] = useState('');
    const [locality, setLocality] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [order, setOrder] = useState('');
    const itemsPrice = props.cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice > 150 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;

    useEffect(() => {
        props.cartItems.map((item) => {
            setOrder(prevState => item.name + ', ' + prevState);
            return <></>;
        })
    }, [props]);

    const onSubmit = () => {
        axios.post(USER_REGISTER_URL,
            {
             username: props.username,
             country: country,
             county: county,
             locality: locality,
             address: address,
             number: number,  
             theOrder: order,
             price: totalPrice
        });
        props.checkOut();
    }

    return(
        <>
        <NavDash username={props.username} action={props.goToLogin} empty={props.cartItems}/>
        <div className="shipping">
            <form className="container" onSubmit={onSubmit}>
                <h1>Checkout</h1>
                <input
                    className='inputComponent'
                    name='Country'
                    type={'text'}
                    placeholder={'Country'}
                    value={country}
                    onChange={event => setCountry(event.target.value)} />
                <input
                    className='inputComponent'
                    name='County'
                    type={'text'}
                    placeholder={'County'}
                    value={county}
                    onChange={event => setCounty(event.target.value)} />
                <input
                    className='inputComponent'
                    name='Locality'
                    type={'text'}
                    placeholder={'Locality'}
                    value={locality}
                    onChange={event => setLocality(event.target.value)} />
                <input
                    className='inputComponent'
                    name='Address'
                    type={'text'}
                    placeholder={'Address'}
                    value={address}
                    onChange={event => setAddress(event.target.value)} />
                <input
                    className='inputComponent'
                    name='number'
                    type={'text'}
                    placeholder={'Number'}
                    value={number}
                    onChange={event => setNumber(event.target.value)} />
                <button className="btn" type="submit">
                    Place order
                </button>
            </form>
        </div>
        {console.clear()}
        </>
    );
}