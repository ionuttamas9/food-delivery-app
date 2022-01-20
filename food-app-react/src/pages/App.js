import '../css/App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { store } from 'react-notifications-component';
import LoginComp from './LoginPage';
import DashboardComp from './DashboardPage';
import RestaurantPage from './RestaurantPage';
import ShippingPage from './ShippingPage';
import RegisterComp from './RegisterPage';
import CartComp from './CartPage';

export default function App() {

  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const goToDashboard = (username) => {
    navigate('/dashboard');
    setUsername(username);
  };

  const goToLogin = () => {
    navigate('/');
    setCartItems([]);
    setUsername('');
  }

  const checkOut = () => {
    setCartItems([]);
    store.addNotification({
      title: 'Order placed',
      message: 'Your order was placed successfully.',
      type: 'info',
      container: 'top-center',
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
          duration: 3000
      }
      });
    navigate('/dashboard');
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }; 

  const goToCheckout = () =>{
    navigate('/checkout');
  }

  return (
    <div className="App">
      <Routes>
        {console.clear}
        {username === '' ? 
        <>
        <Route path="/" element = {<LoginComp action={goToDashboard}/>} />
        <Route path="/register"  element = {<RegisterComp/>} />  
        </> :
        <>
        <Route path="/" element = {<LoginComp action={goToDashboard}/>} />
        <Route path="/register"  element = {<RegisterComp/>} /> 
        <Route path="/dashboard" element = {<DashboardComp username={username} goToLogin={goToLogin} cartItems={cartItems}/>} />
        <Route path="/cart" element = {<CartComp username={username} onAdd={onAdd} onRemove = {onRemove} cartItems={cartItems} goToLogin={goToLogin} checkOut={goToCheckout}/>} />
        <Route path="/restaurant/KFC" element = {<RestaurantPage username={username} onAdd={onAdd} goToLogin={goToLogin} restaurant={'KFC'} cartItems={cartItems}/>} />
        <Route path="/restaurant/McDonald's" element = {<RestaurantPage username={username} onAdd={onAdd} goToLogin={goToLogin} restaurant={'McDonald\'s'} cartItems={cartItems}/>} />
        <Route path="/restaurant/Mama%20Manu" element = {<RestaurantPage username={username} onAdd={onAdd} goToLogin={goToLogin} restaurant={'Mama Manu'} cartItems={cartItems}/>} />
        <Route path="/restaurant/Spartan" element = {<RestaurantPage username={username} onAdd={onAdd} goToLogin={goToLogin} restaurant={'Spartan'} cartItems={cartItems}/>} />
        <Route path="/checkout" element = {<ShippingPage username={username} checkOut={checkOut} goToLogin={goToLogin} cartItems={cartItems}/>} />
        </>}
      </Routes>
    </div>
  );
}
