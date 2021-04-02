import React, {useEffect, useState} from 'react';
import {
  DetailsList
} from '@fluentui/react';
/**
 * MSAL
 */
import { useMsal, useAccount } from "@azure/msal-react";
import { getADUsers } from "../../Services/graph-service";
import { msalInstance } from '../../index';

/**
 * Styled Component import
 */


const AllUsers = (props) => {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getADUsers().then(response => {
          debugger;
          // const employees = JSON.parse(response.value);
          setEmployees(response.value)
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
                <DetailsList items={data} />
                // <tr key={key}>
                //   <td>{data.displayName}</td> // column data received
                // </tr>
              );
            })}
        </div>
    )    
}

export default AllUsers;