import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            // eslint-disable-next-line no-unused-vars
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }

    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
            <SignUpForm></SignUpForm>
        </div>
    );
};

export default SignIn;