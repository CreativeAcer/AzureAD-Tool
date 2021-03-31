import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';
import { useMsal } from "@azure/msal-react";

/**
 * Styled Component import
 */
 import { Button } from '../../styledcomponents/button-styled';

const Logout = (props) => {
    const { instance, inProgress } = useMsal();

    if (inProgress === "logout") {
        return <span>Logout is currently in progress!</span>
    } else {
        return (
            <JsxWrapper>
                    <Button onClick={() => instance.logoutPopup()}>Logout</Button>
            </JsxWrapper>
            
        );
    }
    
}

export default Logout;