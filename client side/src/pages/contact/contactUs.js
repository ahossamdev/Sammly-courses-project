import axios from "axios";
import { React, useState } from "react";
import "react-bootstrap-icons";
import { validEmail } from "./regx";
import { contactApi } from "../../service/axiosConfig";
import "./contact.css";
import * as Icon from "react-bootstrap-icons";

export default function ContactUs() {
  const [sucessMsg, setSucessMsg] = useState();
  const [failMsg, setFailMsg] = useState();
  const getToken = () => {
    return { token: localStorage.getItem("token") };
  };
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [formValuesErrors, setFormValuesErrors] = useState({
    firstNameErr: null,
    lastNameErr: null,
    emailErr: null,
    messageErr: null,
  });
  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "FirstName":
        setFormValues({
          ...formValues,
          firstName: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          firstNameErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 3
              ? "First name must be at least 3 characters"
              : null,
        });
        break;
      case "LastName":
        setFormValues({
          ...formValues,
          lastName: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          lastNameErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 3
              ? "Last name must be at least 3 characters"
              : null,
        });
        break;
      case "Email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          emailErr:
            event.target.value.length === 0
              ? "This field is required"
              : validEmail.test(event.target.value) === false
              ? " Email must be as xxx@xxx.xxx"
              : null,
        });
        break;
      case "Message":
        setFormValues({
          ...formValues,
          message: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          messageErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length >= 100
              ? " Maximum lenght of characters is 100 characters"
              : null,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmitForm = (e) => {
    if (localStorage.getItem("token")) {
      const Token = localStorage.getItem("token");
      console.log(Token);
    }
    console.log(formValues);
    e.preventDefault();
    contactApi
      .post(
        "/",
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          message: formValues.message,
        },
        { headers: getToken() }
      )
      .then((res) => {
        console.log(res);
        setFailMsg(null);
        setSucessMsg(res.data);
      })
      .catch((err) => {
        console.log(err);
        setSucessMsg(null);
        setFailMsg("Access denied , please login first!");
      });
  };
  return (
    <>
      <section id="contact">
        <div className="container p-1 psm-3">
          <div className="row">
            <div className="col-12 text-primary">
              <h2 className="contact-text">Contact Us </h2>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={(e) => handleSubmitForm(e)} className="form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        placeholder="First Name"
                        type="text"
                        id="firstNameInput"
                        className="form-control form-control-lg"
                        value={formValues.firstName}
                        onChange={(e) => handleFormChange(e)}
                        name="FirstName"
                      />
                      {formValuesErrors.firstNameErr && (
                        <div
                          id="FirstNameHelp"
                          className="form-text text-danger border-danger"
                        >
                          {formValuesErrors.firstNameErr}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        placeholder="Last Name"
                        type="text"
                        id="lastNameInput"
                        className="form-control form-control-lg"
                        value={formValues.lastName}
                        onChange={(e) => handleFormChange(e)}
                        name="LastName"
                      />
                      {formValuesErrors.lastNameErr && (
                        <div
                          id="LastNameHelp"
                          className="form-text text-danger"
                        >
                          {formValuesErrors.lastNameErr}
                        </div>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control form-control-lg"
                        id="EmailInput"
                        aria-describedby="EmailHelp"
                        value={formValues.email}
                        onChange={(e) => handleFormChange(e)}
                        name="Email"
                      />

                      {formValuesErrors.emailErr && (
                        <div id="EmailHelp" className="form-text text-danger">
                          {formValuesErrors.emailErr}
                        </div>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <textarea
                        type="text"
                        id="MessageInput"
                        aria-describedby="MessageHelp"
                        value={formValues.message}
                        onChange={(e) => handleFormChange(e)}
                        className="form-control form-control-lg"
                        rows="4"
                        placeholder="Message"
                        required
                        name="Message"
                      />
                      {formValuesErrors.messageErr && (
                        <div id="MessageHelp" className="form-text text-danger">
                          {formValuesErrors.messageErr}
                        </div>
                      )}
                    </div>
                  </div>
                  {sucessMsg && (
                    <div style={{ color: "rgb(8, 215, 115)" }}>{sucessMsg}</div>
                  )}
                  {failMsg && <div style={{ color: "red" }}>{failMsg}</div>}
                  <div className="form-group col-md-12 text-center">
                    <br></br>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={
                        formValuesErrors.emailErr ||
                        formValuesErrors.lastNameErr ||
                        formValuesErrors.firstNameErr ||
                        formValuesErrors.message ||
                        sucessMsg ||
                        failMsg
                      }
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="icofont-google-map">
                      <Icon.HouseFill size={30} position="absolute" />
                    </i>
                    <h4>Address:</h4>
                    <p> Minya</p>
                  </div>

                  <div className="email">
                    <i className="icofont-phone">
                      <Icon.EnvelopeFill size={30} position="absolute" />
                    </i>
                    <h4>Email:</h4>
                    <p>xxx@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="icofont-phone">
                      <Icon.PhoneFill size={30} position="absolute" />
                    </i>
                    <h4>Phone:</h4>
                    <p>+20 95589 55488</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
