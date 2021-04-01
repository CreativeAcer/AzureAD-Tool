import React, {useEffect, useState} from 'react';
/**
 * MSAL
 */
import { useMsal, useAccount } from "@azure/msal-react";
import { callMsGraph } from "../../Services/graph-service";
import { msalInstance } from '../../index';

/**
 * Styled Component import
 */


const AllUsers = (props) => {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        callMsGraph().then(response => {
          // const employees = JSON.parse(response)
          setEmployees(response)
        })
      }, [])
    // useEffect(() => {
    //     if (account) {
    //         instance.acquireTokenSilent({
    //             scopes: ["User.Read"],
    //             account: account
    //         }).then((response) => {
    //             if(response) {
    //                 callMsGraph(response.accessToken).then((result) => setEmployees(result));
    //             }
    //         });
    //     }
    // }, [account, instance]);

    return (
        <div>
            {employees.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data}</td> // column data received
                </tr>
              );
            })}
        </div>
    )    
}

export default AllUsers;