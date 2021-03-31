import React, {useState} from 'react';
import { useIsAuthenticated } from "@azure/msal-react";
import { Login, Logout } from '../../components';


const SignInSignOut = () => {
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) {
        return <Logout />;
    } else {
        return <Login />;
    }
}

export default SignInSignOut;