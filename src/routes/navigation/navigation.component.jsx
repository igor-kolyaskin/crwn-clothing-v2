/* eslint-disable no-unused-vars */
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
    LogoComponent,
    NavLink,
    NavLinks,
    NavigationContainer
} from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutHandler = async () => {
        await signOutUser();
    };

    return (
        <>
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
        </>
    );
};

export default Navigation;
