import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <header>


      <Navbar className="custom-navbar">
        <Container>
          <Link to="/" className="navbar-brand">
          <h1> Don Gato </h1>
          </Link>

          <Nav className="nav-links">
            <NavLink to="/categoria/1" className="nav-link" href=""> Alimentos </NavLink>
            <NavLink to="/categoria/2" className="nav-link" href=""> Recipientes </NavLink>
            <NavLink to="/categoria/3" className="nav-link" href=""> Juguetes </NavLink>
            <NavLink to="/categoria/4" className="nav-link" href=""> Camitas </NavLink>
          </Nav>

          <CartWidget />
        </Container>
      </Navbar>

    </header>
  )
}

export default NavBar