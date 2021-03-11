import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function Navmenu(props) {
  const authContext = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand href="/">GraveKeeper</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {authContext.loggedInUser.user._id ? (
          <Nav className="mr-auto">
            <Nav.Link href="/cemetery">Cemitério</Nav.Link>
          </Nav>
        ) : (
          ""
        )}
        {authContext.loggedInUser.user._id ? (
          <Nav>
            <Nav.Link href="/auth/logout">Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/auth/signup">Signup</Nav.Link>
            <Nav.Link eventKey={2} href="/auth/login">
              Login
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
