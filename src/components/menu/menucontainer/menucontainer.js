import React from 'react';
import { bool } from 'prop-types';
/**
 * Styled Component import
 */
import { StyledMenu } from '../../../styledcomponents/menu-styled';

import {
  Link
} from "react-router-dom";

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
              <Link to="/"><span role="img" aria-label="home">&#x1F30F;</span>
          Home</Link>
              <Link to="/users"><span role="img" aria-label="users">&#x1F46A;</span>
          Users</Link>
              <Link to="/contact"><span role="img" aria-label="contact">&#x1f4e9;</span>
          Contact</Link>
      </StyledMenu>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;