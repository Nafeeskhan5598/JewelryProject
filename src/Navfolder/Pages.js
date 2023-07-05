import React from "react";
import '../Style/Pages.css';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { BiSearch } from 'react-icons/bi';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from "react-router-dom";



function Pages() {


    return (

        <>

            <div>

                <Navbar bg="light" expand="lg">
                    <Container>


                        <Navbar.Collapse id="basic-navbar-nav pages">
                            <Nav className="me-auto page">
                                <Link  className="home" to="/home">Home</Link>
                                <Link className="home" to="/about">About</Link>
                                <Link className="home" to="/contact">Contact</Link>

                                <Nav.Link id="search" href="#home">
                                    <BiSearch />
                                </Nav.Link>
                                <Nav.Link id="shopping" href="#home">
                                    <FaShoppingBasket />
                                </Nav.Link>


                            </Nav>
                        </Navbar.Collapse>


                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Pages;