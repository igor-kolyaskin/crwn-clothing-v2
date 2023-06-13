import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import './authentication.styles.scss'

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            // eslint-disable-next-line no-unused-vars
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }

    }, []);

    // eslint-disable-next-line no-unused-vars
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className='authentication-container'>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    );
};

export default Authentication;