import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../../features/crudSlice";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const Header = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(search));
  }, [search]);

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand>Redux-ToolKit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", display: "flex", gap: "20px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  textDecoration: "none",
                };
              }}
            >
              Counter
            </NavLink>

            <NavLink
              to="/post-crud"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  textDecoration: "none",
                };
              }}
            >
              Post-CRUD
            </NavLink>

            <NavLink
              to="/api-calling"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  textDecoration: "none",
                };
              }}
            >
              Api-Calling
            </NavLink>

            <NavLink
              to="/axios-api-calling"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  textDecoration: "none",
                };
              }}
            >
              Axios-Api-Calling
            </NavLink>

            <NavLink
              to="/crud-home"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  textDecoration: "none",
                };
              }}
            >
              Full-CRUD
            </NavLink>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
