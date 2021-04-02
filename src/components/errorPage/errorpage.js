import React, {useEffect, useState} from 'react';
/**
 * MSAL
 */
import { useMsal, useAccount } from "@azure/msal-react";
import { msalInstance } from '../../index';

/**
 * Styled Component import
 */


const ErrorPage = (props) => {
    const { instance, accounts, inProgress } = useMsal();
    

    return (
        <div>
            error
        </div>
    )    
}

export default ErrorPage;