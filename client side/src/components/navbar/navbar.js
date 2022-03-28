import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../navbar/navbar.css";
import { Container, Nav, DropdownButton } from "react-bootstrap";

function NavBar(props) {
  let history = useHistory();
  const [loggedEmail, setLoggedEmail] = useState({});
  const [loggedId, setLoggedId] = useState({});

  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register"
  ) {
    return false;
  }

  const decode = () => {
    const Token = localStorage.getItem("token");
    if (!Token) {
      setLoggedEmail(null);
    }
    if (Token) {
      const base64Url = Token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      const payLoad = JSON.parse(jsonPayload);
      console.log(payLoad);
      console.log(payLoad.email);
      setLoggedEmail(payLoad.email);
      setLoggedId(payLoad._id);
    }
  };

  const logOut = () => {
    localStorage.clear();
    setLoggedEmail(null);
    history.push("/home");
  };

  return (
    <>
      <Nav bg="dark" variant="light" style={{ background: "#ecc9f7" }}>
        <Container className="d-flex">
          <Nav.Link className="sammly" to="/home">
            Sammly
          </Nav.Link>
          <container
            style={{ marginLeft: "280px" }}
            className="d-flex pt-2 align-baseline"
          >
            <Nav.Link as={Link} to="/home" style={{ fontSize: "20px" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" style={{ fontSize: "20px" }}>
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/trainers" style={{ fontSize: "20px" }}>
              Trainers
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutUs" style={{ fontSize: "20px" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ fontSize: "20px" }}>
              Contact
            </Nav.Link>

            {/* !localStorage.getItem("token") ? } */}

            <DropdownButton
              onClick={decode}
              title={!localStorage.getItem("token") ? "Sign" : "Sammly"}
              id="dropdown-basic-button"
              style={{ fontSize: "20px", paddingTop: "7px" }}
            >
              {localStorage.getItem("token") && (
                <Dropdown.Item disabled as={Link} to="/profile">
                  {loggedEmail}
                </Dropdown.Item>
              )}

              {!localStorage.getItem("token") ? (
                <Dropdown.Item as={Link} to="/login">
                  Sign in
                </Dropdown.Item>
              ) : (
                <Dropdown.Item as={Link} to={`/profile/${loggedId}`}>
                  Profile
                </Dropdown.Item>
              )}

              {localStorage.getItem("token") && (
                <Dropdown.Item as={Link} to="/mylearning">
                  My Learning
                </Dropdown.Item>
              )}

              {!localStorage.getItem("token") ? (
                <Dropdown.Item as={Link} to="/register">
                  Sign Up
                </Dropdown.Item>
              ) : (
                <Dropdown.Item onClick={logOut} as={Link}>
                  Log out
                </Dropdown.Item>
              )}
              {!localStorage.getItem("token") && (
                <Dropdown.Item as={Link} to="/formtrainer">
                  join us as trainer
                </Dropdown.Item>
              )}
            </DropdownButton>
          </container>
        </Container>
      </Nav>
    </>
  );
}
export default withRouter(NavBar);
