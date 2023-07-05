import React from "react";
import '../Style/Items.css';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Items() {

    return (
        <>
      



    <Navbar bg="light" expand="lg">
      <Container>   
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items">
          <div className="me item">
            <Link to ="/rings">Rings</Link>
            <Link to ="/bracelets">Bracelets</Link>
            <Link to ="/earrings">Earrings</Link>
            <Link to ="/necklaces">Necklaces</Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

  
                    {/* </div>

                </div> */}
         
        </>
    )
}
export default Items;

