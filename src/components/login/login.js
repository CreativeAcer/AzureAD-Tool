import React, {useState} from 'react';
import { useMsal } from "@azure/msal-react";

import { msalInstance } from '../../index';

/**
 * Styled Component import
 */
 import { Button } from '../../styledcomponents/button-styled';

const Login = (props) => {
    const { instance, inProgress } = useMsal();

    if (inProgress === "login") {
        return <span>Login is currently in progress!</span>
    } else {
        return (
            <Button onClick={() => instance.loginPopup({}).then((result) => { 
                if(result.account)
                    msalInstance.setActiveAccount(result.account)
            })}>Login</Button>
        );
    }
    
}

export default Login;