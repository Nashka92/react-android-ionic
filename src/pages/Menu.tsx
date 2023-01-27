import { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Search from "../components/Search";



const Menu = () => {
    const [recherche, setRecherche] = useState("");
    return (
      <>
        <Navbar bg="info" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">TP React API DB Movie</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/page1">Page 1 |</Nav.Link>
                <Nav.Link href="/page2">Page 2 |</Nav.Link>
                <Nav.Link href="/page3">Page 3 |</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  className="me-2"
                  aria-label="Search"
                  onChange={e => setRecherche (e.target.value)}
                />
                <Button variant="primary" onClick={()=>{Search(recherche)}}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
  };
  
  export default Menu;