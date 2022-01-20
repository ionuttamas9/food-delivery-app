import NavDash from "../components/NavDash";

export default function CartComp(props){

    const {username, onAdd, onRemove, cartItems, goToLogin, checkOut} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice > 150 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;

    return(
        <>
        <NavDash username={username} action={goToLogin} empty={cartItems} />
        <div className="cartPage">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                    <button className="navBtn" onClick={() => onRemove(item)}>
                        -
                    </button>{' '}
                    <button className="navBtn" onClick={() => onAdd(item)}>
                        +
                    </button>
                    </div>

                    <div className="col-2 text-right">
                    {item.qty} x {item.price.toFixed(2)} lei
                    </div>
                </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)} lei</div>
                </div>
                <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">
                        {shippingPrice.toFixed(2)} lei
                    </div>
                </div>

                <div className="row">
                    <div className="col-2">
                        <strong>Total Price</strong>
                    </div>
                    <div className="col-1 text-right">
                        <strong>{totalPrice.toFixed(2)} lei</strong>
                    </div>
                </div>
                <hr />
                <div className="row">
                <button className="checkout" onClick={checkOut}>
                    Checkout
                </button>
                </div>
            </>)}
        </div>
        {console.clear()}
        </>
    );
}