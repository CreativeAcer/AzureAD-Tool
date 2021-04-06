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
import { ListContainer } from '../../styledcomponents/listContainer-styled';

/**
 * Styled Component import
 */


const AllUsers = (props) => {
    // const { instance, accounts, inProgress } = useMsal();
    // const account = useAccount(accounts[0] || {});

    // const [employees, setEmployees] = useState([])

    // useEffect(() => {
    //     getADUsers().then(response => {
    //       debugger;
    //       // const employees = JSON.parse(response.value);
    //       setEmployees(response.value)
    //     })
    //   }, [])

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
          {/* <input type="text"></input>
                <DetailsList 
                  items={employees} 
                  columns={_columns}/> */}
          <ListContainer>
            <h1>All Users</h1>
            <div className="list">
              <img src="https://i.postimg.cc/mrPFzMXk/photo-1448131063153-f1e240f98a72.jpg" alt=""/>
              <div className="wrapper">
                <h3>Sprinkles Cupcakes </h3>
                <p>Nutrition Facts</p>
                <p>495 Cal</p>
              </div>
              <i></i>
            </div>
          </ListContainer>
        </GridCentered>
    )    
}

export default AllUsers;