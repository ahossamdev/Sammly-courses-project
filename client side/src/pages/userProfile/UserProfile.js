import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./userProfile.css";
import * as Icon from "react-bootstrap-icons";
import { userApi } from "../../service/axiosConfig";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    userApi
      .get(`/${params.id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ pointerEvents: "none" }} className="back">
      <Container className="all-style">
        <Row>
          <Col className="img-style">
            <img
              src={`http://localhost:8080/${user.userImage}`}
              alt="profils pic"
              style={{
                marginTop: "50px",
                width: "60%",
              }}
            />
          </Col>
          <Col>
            <div className="">
              <div>
                <h1 className="profile-style">My Profile</h1>
              </div>

              <Row className="d-flex flex">
                <div className="d-flex flex-row align-items-center mb-4 space-style">
                  <Icon.PersonFill
                    size={30}
                    color={"#58D68D"}
                    className="person-style"
                  />
                  <h5>
                    {" "}
                    {user.firstName} {user.lastName}
                  </h5>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 space-style">
                  <Icon.EnvelopeFill
                    size={30}
                    color={"#58D68D"}
                    className="person-style"
                  />
                  <h5> {user.email}</h5>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 space-style">
                  <Icon.HourglassSplit
                    size={30}
                    color={"#58D68D"}
                    className="person-style"
                  />
                  <h5> {user.age} years </h5>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 space-style">
                  <Icon.TelephoneFill
                    size={30}
                    color={"#58D68D"}
                    className="person-style"
                  />
                  <h5>(+20){user.phoneNumber}</h5>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 space-style">
                  <Icon.BookmarksFill
                    size={30}
                    color={"#58D68D"}
                    className="person-style"
                  />
                  <h5>{user.about}</h5>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <Button
          style={{ pointerEvents: "stroke" }}
          variant="success"
          className="edit-style"
        >
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to={`/editprofile/${params.id}`}
          >
            Edit Profile
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default UserProfile;
