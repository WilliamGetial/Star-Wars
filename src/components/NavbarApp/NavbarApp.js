import React from 'react'
import './NavbarApp.css';
import images from '../images/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export const NavbarApp = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={images.img1}
                width="80"
                height="30"
                className="logo"
              />{' '}
            </Navbar.Brand>
          </Container>
          <Nav className='items'>
            <Nav.Link><Link className='navlink' to='/personajes'>Personajes</Link></Nav.Link>
            <Nav.Link><Link className='navlink' to='/planetas'>Planetas</Link></Nav.Link>
          </Nav>
        </Navbar>
    </div>
  )
}
