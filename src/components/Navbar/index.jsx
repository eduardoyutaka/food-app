import * as React from 'react';
import { Nav, SearchButton, MenuButton, NavbarTitle } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <MenuButton>
        Menu
      </MenuButton>
      <NavbarTitle>
        New York
      </NavbarTitle>
      <SearchButton>
        Search
      </SearchButton>
    </Nav>
  );
};

export default Navbar;
