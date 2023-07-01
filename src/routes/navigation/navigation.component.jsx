/* eslint-disable no-unused-vars */
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

import {
    LogoComponent,
    NavLink,
    NavLinks,
    NavigationContainer
} from './navigation.styles';

const Navigation = () => {
    // eslint-disable-next-line no-unused-vars
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoComponent to="/"><CrwnLogo className="logo" /></LogoComponent>
                <NavLinks>
                    <NavLink to="shop">SHOP</NavLink>
                    {currentUser
                        ? <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
                        : <NavLink to="auth">SIGN IN</NavLink>}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
