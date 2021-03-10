import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">GraveKeeper</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cemetery">Cemetery</Nav.Link>
          <NavDropdown title="Burials" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/graves">Burials list</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/graves/add-grave">
              Add new Burial
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
