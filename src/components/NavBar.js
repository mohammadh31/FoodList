import React, { useState } from "react";
import { Row, Navbar, Container, Nav, Form } from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchValue);
    setSearchValue("");
  };

  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type="text"
                placeholder="ابحث.."
                className="mx-2"
              />
              <button onClick={onSearch} className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
export default NavBar;
