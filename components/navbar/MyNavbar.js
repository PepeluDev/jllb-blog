import { Heading, Text } from '@chakra-ui/react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const navLinks = [{ title: `Posts`, path: `/#latestposts` }];

function MyNavbar({ languajes, changeLanguaje }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed='top'
        sticky='top'
        expand='lg'
        bg='dark'
        variant='dark'
      >
        <Container style={{ fontFamily: 'Oswald' }}>
          <Link href='/' passHref>
            <Navbar.Brand href='#home'>
              <Heading size='md'>JLLB.io</Heading>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {navLinks.map(({ title, path }) => {
                return (
                  <Link key={path} href={path} passHref>
                    <Nav.Link>{title}</Nav.Link>
                  </Link>
                );
              })}
            </Nav>
            <Nav>
              <NavDropdown title='languaje' id='basic-nav-dropdown'>
                {languajes.map((languaje) => {
                  return (
                    <NavDropdown.Item
                      key={languaje}
                      onClick={() => changeLanguaje(languaje)}
                    >
                      {languaje}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
