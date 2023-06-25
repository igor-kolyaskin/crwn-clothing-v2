import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name' onClick={() => removeItemFromCart(cartItem)}>{name}</span><br />
            <span className='quantity' >{quantity}</span><br />
            <span className='price' onClick={() => addItemToCart(cartItem)}>{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>

    );
};

export default CheckoutItem;