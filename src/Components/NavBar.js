import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import { Container  } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCountAll } from "../redux/slices/cartSlice";
const NavigationBar = () => {
  const CartNumber = useSelector(selectCountAll);
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MovieBD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/movies" style={({isActive})=> ({textDecoration: isActive ? "underline": "none"})} >Movies</Nav.Link>
              <Nav.Link as={NavLink} to="/wishlist" style={({isActive})=> ({textDecoration: isActive ? "underline": "none"})} >WishList ({CartNumber}) </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )


}
export default NavigationBar;