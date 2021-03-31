import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
/**
 * MSAL
 */
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
/**
 * Styled Component import
 */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Main, Header } from './components';
import { Wrap } from './styledcomponents/wrap';
import { GridCentered } from './styledcomponents/gridCentered-styled';
import { TextReveal } from './styledcomponents/textreveal-styled';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrap>
        <Header></Header>
        <AuthenticatedTemplate>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
              <Main></Main>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <GridCentered>
            <TextReveal class="home-title">
                <span>To use the application,</span>
                <span>please login.</span>
            </TextReveal>
          </GridCentered>
        </UnauthenticatedTemplate>
        </Wrap>
        </ThemeProvider>
      </React.Fragment> 
  );
}

export default App;
