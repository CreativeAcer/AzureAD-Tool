import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';
import {
    Switch,
    Route
  } from "react-router-dom";

/**
 * Styled Component import
 */
import { Softcard } from '../../styledcomponents/card-styled';
import { GridWrap } from '../../styledcomponents/gridWrap-styled';
import { GridCentered } from '../../styledcomponents/gridCentered-styled';
import { NotFound } from '..';

const Main = (props) => {
    return (
        <Switch>
          <Route path="/contact">
            {/* <About /> */}
            <GridWrap columns={"1fr 1fr 1fr 1fr"}>
            <JsxWrapper>
             <Softcard>CONTACT</Softcard>
             <Softcard>Softcard</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
            </JsxWrapper>
            </GridWrap>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
            <GridWrap columns={"1fr 1fr 1fr 1fr"}>
            <JsxWrapper>
             <Softcard>USERS</Softcard>
             <Softcard>Softcard</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
            </JsxWrapper>
            </GridWrap>
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
            <GridWrap columns={"1fr 1fr 1fr 1fr"}>
            <JsxWrapper>
             <Softcard>HOME</Softcard>
             <Softcard>Softcard</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
            </JsxWrapper>
            </GridWrap>
          </Route>
          <Route>
            <GridCentered>
                <NotFound></NotFound>
            </GridCentered>
          </Route>
        </Switch>
    )
}

export default Main;