import React, {useEffect, useState} from 'react';
/**
 * MSAL
 */
import { useMsal } from "@azure/msal-react";

/**
 * Styled Component import
 */
import { StyledHeader } from '../../styledcomponents/header-styled';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';
import { SignInSignOut } from '../../components';

const Header = (props) => {
    const { accounts } = useMsal();
    const [name, setName] = useState(null);

    useEffect(() => {
        if (accounts.length > 0) {
            setName(accounts[0].name.split(" ")[0]);
        }
    }, [accounts]);

    if (name) {
        return (
            <JsxWrapper>
                <StyledHeader>
                    <p>Welcome, {name}</p>
                    <SignInSignOut></SignInSignOut>
                </StyledHeader>
            </JsxWrapper>
        )
    } else {
        return (
            <JsxWrapper>
                <StyledHeader>
                    <p>React Dashboard</p>
                    <SignInSignOut></SignInSignOut>
                </StyledHeader>
            </JsxWrapper>
        )
    }

    
}

export default Header;