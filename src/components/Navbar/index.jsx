import * as React from 'react';
import { Container, Nav, IconButton, NavbarTitle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <IconButton>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>

        <NavbarTitle>New York</NavbarTitle>

        <IconButton>
          <FontAwesomeIcon icon={faSearch} />
        </IconButton>
      </Nav>
    </Container>
  );
};

export default Navbar;
