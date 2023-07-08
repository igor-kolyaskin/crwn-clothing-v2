// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const labels = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                {labels.map((label, index) =>
                    <div className="header-block" key={index}>
                        <span>{label}</span>
                    </div>)}
            </div>
            {cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
};

export default Checkout;