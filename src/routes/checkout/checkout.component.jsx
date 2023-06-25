import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cartItems.map(cartItem => {
                const { id, name, quantity } = cartItem;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span onClick={() => removeItemFromCart(cartItem)}>decrement</span><br />
                        <span>{quantity}</span><br />
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                    </div>);
            })}
        </div>
    );
};

export default Checkout;