import React, { useState } from "react";
import {
  validEmail,
  validPassword,
} from "../../components/regex/RegularExpresion";
import * as Icon from "react-bootstrap-icons";
import "./Registration.css";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";
import { userApi } from "../../service/axiosConfig";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function NewRegister() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  let history = useHistory();
  const [successMessage, setSuccessMessage] = useState({});
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    FirstNameErr: null,
    LastNameErr: null,
    EmailErr: null,
    UserNameErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          EmailErr:
            event.target.value.length === 0
              ? "This field is required"
              : validEmail.test(event.target.value) === false
              ? " email must be as xxx@xxx.xxx"
              : null,
        });
        break;
      case "username":
        setFormValues({
          ...formValues,
          username: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          UserNameErr:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;
      case "firstName":
        setFormValues({
          ...formValues,
          firstName: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          FirstNameErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 3
              ? "First name must be at least 3 characters"
              : null,
        });
        break;
      case "lastName":
        setFormValues({
          ...formValues,
          lastName: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          LastNameErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 3
              ? "Last name must be at least 3 characters"
              : null,
        });
        break;

      case "password":
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passwordErr:
            event.target.value.length === 0
              ? "This field is required"
              : validPassword.test(event.target.value) === false
              ? "Password must be as P@ssword123"
              : null,
        });
        break;
      case "confirmPassword":
        setFormValues({
          ...formValues,
          confirmPassword: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          confirmPasswordErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value !== formValues.password
              ? "It must match passsword"
              : null,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(formValues);
    if (!formValuesErrors.EmailErr && !formValuesErrors.passwordErr) {
      await userApi
        .post("register", {
          email: formValues.email,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          password: formValues.password,
          username: formValues.username,
        })
        .then((res) => {
          console.log(res.data);
          setSuccessMessage(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleFailure = (result) => {};
  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  if (successMessage.message === "registered successfully !") {
    console.log("okayuu=yyyyyy");
    history.push("/login");
  }
  return (
    <div className="outer">
      <section className="vh-500">
        <div className="container h-500">
          <div className="row d-flex justify-content-center align-items-center h-500">
            <div className="col-lg-12 col-xl-11">
              <div className="card-body p-md-5">
                <div id="main-card" className="row justify-content-center">
                  <div
                    id="form-style"
                    className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                  >
                    <p
                      id="join-us"
                      className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                    >
                      Join Us
                    </p>
                    <form
                      onSubmit={(e) => handleSubmitForm(e)}
                      className="mx-1 mx-md-4"
                    >
                      <div className="d-flex flex align-items-center mb-4">
                        <div className="my-icon">
                          {" "}
                          <Icon.PersonFill
                            size={35}
                            color="#7DCEA0 "
                            position=""
                          />
                        </div>

                        <div className="form-outline flex-fill mb-0">
                          <input
                            placeholder="First Name"
                            type="text"
                            id="firstNameInput"
                            className="form-control "
                            value={formValues.firstName}
                            onChange={(e) => handleFormChange(e)}
                            name="firstName"
                          />
                          {formValuesErrors.FirstNameErr && (
                            <div
                              id="FirstNameHelp"
                              className="form-text text-danger border-danger"
                            >
                              {formValuesErrors.FirstNameErr}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <Icon.Person size={35} color="#7DCEA0  " />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            placeholder="Last Name"
                            type="text"
                            id="lastNameInput"
                            className="form-control "
                            value={formValues.lastName}
                            onChange={(e) => handleFormChange(e)}
                            name="lastName"
                          />
                          {formValuesErrors.LastNameErr && (
                            <div
                              id="LastNameHelp"
                              className="form-text text-danger"
                            >
                              {formValuesErrors.LastNameErr}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <Icon.PersonFill size={35} color="#7DCEA0  " />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            placeholder="User Name"
                            className="form-control "
                            id="UserNameInput"
                            aria-describedby="UserNameHelp"
                            value={formValues.username}
                            onChange={(e) => handleFormChange(e)}
                            name="username"
                          />
                          {formValuesErrors.UserNameErr && (
                            <div
                              id="UserNameHelp"
                              className="form-text text-danger "
                            >
                              {formValuesErrors.UserNameErr}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <Icon.EnvelopeFill
                          size={30}
                          color="#7DCEA0 "
                          position="absolute"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            placeholder="email"
                            className="form-control "
                            id="EmailInput"
                            aria-describedby="EmailHelp"
                            value={formValues.email}
                            onChange={(e) => handleFormChange(e)}
                            name="email"
                          />
                          {formValuesErrors.EmailErr && (
                            <div
                              id="EmailHelp"
                              className="form-text text-danger"
                            >
                              {formValuesErrors.EmailErr}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <Icon.LockFill size={35} color="#7DCEA0  " />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control "
                            id="passwordInput"
                            aria-describedby="passwordHelp"
                            value={formValues.password}
                            onChange={(e) => handleFormChange(e)}
                            name="password"
                          />
                          {formValuesErrors.passwordErr && (
                            <div
                              id="passwordHelp"
                              className="form-text text-danger"
                            >
                              {formValuesErrors.passwordErr}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <Icon.KeyFill size={35} color="#7DCEA0 " />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            placeholder="Repeat Password"
                            className="form-control "
                            id="confirmPasswordInput"
                            aria-describedby="confirmPasswordHelp"
                            value={formValues.confirmPassword}
                            onChange={(e) => handleFormChange(e)}
                            name="confirmPassword"
                          />
                          {formValuesErrors.confirmPasswordErr && (
                            <div
                              id="confirmPasswordHelp"
                              className="form-text text-danger"
                            >
                              {formValuesErrors.confirmPasswordErr}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4">
                        {successMessage.message && (
                          <div style={{ color: "red", alignSelf: "center" }}>
                            {successMessage.message}
                          </div>
                        )}
                        <button
                          style={{
                            marginTop: "30px",
                            backgroundColor: "#7DCEA0 ",
                            borderColor: "#7DCEA0 ",
                          }}
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={
                            formValuesErrors.EmailErr ||
                            formValuesErrors.passwordErr
                          }
                        >
                          Register
                        </button>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"/login"}
                          >
                            <p className="mt-2">
                              Already have account? login now
                            </p>
                          </Link>
                        </div>
                      </div>
                      {/* {loginData ? (
                        <div>
                          <h3>You logged in as {loginData.email}</h3>
                          <button onClick={handleLogout}>Logout</button>
                        </div>
                      ) : (
                        <GoogleLogin
                          clientId="678175724274-mfoptnppuqqf84525pqv0gk173jdl4e8.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <GoogleButton
                              style={{
                                width: "100%",
                                backgroundColor: "white",
                                boxShadow: "0 0 0 0.5",
                                marginBottom: "70px",
                                color: "#A04000 ",
                                borderColor: "#A04000 ",
                              }}
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                            >
                              Sign in with Google
                            </GoogleButton>
                          )}
                          className="btn btn-lg btn-primary"
                          id="btn"
                          onSuccess={handleLogin}
                          onFailure={handleFailure}
                          cookiePolicy={"single_host_origin"}
                        ></GoogleLogin>
                      )} */}
                    </form>
                  </div>
                  <div
                    className="col-md-10 col-lg-6 col-xl-7 align-items-center order-1 order-lg-2"
                    style={{ backgroundColor: "white ", borderRadius: "20px" }}
                  >
                    <img
                      src="https://www.nicepng.com/png/full/4-47345_picture-royalty-free-stock-painting-feather-phoenix-colorful.png"
                      style={{ width: "100%", height: "100%" }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewRegister;
