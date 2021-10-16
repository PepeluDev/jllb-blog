import { Navbar, Nav, Container } from "react-bootstrap";
import Link from 'next/link' 

const navLinks = [
  { title: `first`, path: `firstPost` },
  { title: `second`, path: `secondPost` },
  { title: `third`, path: `thirdPost` }
];

function MyNavbar() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" sticky="top" expand="lg" bg="dark" variant="dark">
        <Container>
        <Link href="/" passHref>
            <Navbar.Brand href="#home">
                JLLB Blog
                </Navbar.Brand>
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map(({ title, path }) => {
              return <Link key={path} href={`/${path}`} passHref><Nav.Link >{title}</Nav.Link></Link>;
            })}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
