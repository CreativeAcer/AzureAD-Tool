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
import { GridCentered } from '../../styledcomponents/gridCentered-styled';

/**
 * Styled Component import
 */


const AllUsers = (props) => {
    // const { instance, accounts, inProgress } = useMsal();
    // const account = useAccount(accounts[0] || {});
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

    const _columns = [
      { key: 'c1', name: 'Name', fieldName: 'displayName', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'c2', name: 'E-mail', fieldName: 'userPrincipalName', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    return (
        <GridCentered>
          <p>search</p>
            {/* {employees.map((data, key) => { */}
              {/* return ( */}
                <DetailsList 
                  items={employees} 
                  columns={_columns}/>
              {/* ); */}
            {/* })} */}
        </GridCentered>
    )    
}

export default AllUsers;