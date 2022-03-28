import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import "./editProfile.css";
import { userApi } from "../../service/axiosConfig";

function EditUserProfile() {
  const params = useParams();
  console.log(params);
  const imgTypes = ["image/png", "image/jpeg"];
  const [previewImg, setPreviewImg] = useState(null);
  const [previewImgErr, setPreviewImgErr] = useState("");
  const [successMsg, setSuccessMsg] = useState({});

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    about: "",
    userImage: "",
  });
  const [formValuesErrors, setFormValuesErrors] = useState({
    firstNameErr: null,
    lastNameErr: null,
    phoneNumberErr: null,
    ageErr: null,
    aboutErr: null,
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "age":
        setFormValues({
          ...formValues,
          age: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          ageErr:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;
      case "phoneNumber":
        setFormValues({
          ...formValues,
          phoneNumber: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          phoneNumberErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 10
              ? "This field should be 10 numbers"
              : event.target.value.length > 10
              ? "This field should be 10 numbers"
              : null,
        });
        break;
      case "firstName":
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
      case "lastName":
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
      case "userImage":
        setFormValues({
          ...formValues,
          userImage: event.target.value,
        });
        break;
      case "about":
        setFormValues({
          ...formValues,
          about: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          aboutErr:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;
      default:
        break;
    }
  };
  const handleImageChange = (e) => {
    let selectedFile = e.target.files[0];
    setFormValues({ ...formValues, userImage: selectedFile });
    console.log(formValues);
    if (selectedFile) {
      if (selectedFile && imgTypes.includes(selectedFile.type)) {
        setPreviewImg(URL.createObjectURL(selectedFile));
        setPreviewImgErr("");
      } else {
        setPreviewImg(null);
        setPreviewImgErr("please select valid image type !");
      }
    } else {
      console.log("select your file ");
    }
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(formValues);
    if (
      !formValuesErrors.firstNameErr &&
      !formValuesErrors.lastNameErr &&
      !formValuesErrors.emailErr &&
      !formValuesErrors.phoneNumberErr &&
      !formValuesErrors.aboutErr
    ) {
      const form = new FormData();
      form.append("firstName", formValues.firstName);
      form.append("lastName", formValues.lastName);
      form.append("age", formValues.age);
      form.append("phoneNumber", formValues.phoneNumber);
      form.append("about", formValues.about);
      form.append("userImage", formValues.userImage);
      console.log(form);
      console.log(previewImg);
      userApi
        .patch(`/${params.id}`, form)
        .then((res) => {
          setSuccessMsg(res.data);
        })
        .catch((err) => console.log(err.response));
    }
  };

  return (
    <div className="body pt-5 pb-5" onLoad={window.scrollTo(0, 0)}>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                alt="..."
                className="rounded-circle mt-5"
                src={
                  previewImg ||
                  "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                }
                width="90"
              />
              {previewImgErr && (
                <div style={{ color: "red", fontSize: "12px" }}>
                  {previewImgErr}
                </div>
              )}
              <input
                type="file"
                name="imageTrainer"
                className="form-control"
                placeholder="upload image"
                onChange={(e) => handleImageChange(e)}
              />
              <span className="font-weight-bold">
                {formValues.firstName} {}
                {formValues.lastName}
              </span>
              <span className="text-black-50"></span>
            </div>
          </div>

          <form onSubmit={(e) => handleSubmitForm(e)} className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3 ">
                <Link
                  to={"/profile"}
                  style={{ textDecoration: "none", color: "#7DCEA0" }}
                >
                  <div className="d-flex flex-row align-items-center back">
                    <div className="my-icon">
                      <Icon.ArrowLeft
                        size={15}
                        color="#7DCEA0 "
                        position=""
                        style={{ textAlign: "left" }}
                      />
                    </div>
                    <Link to={`/profile/${params.id}`}>
                      <h6 className={"my-0"}>Back to profile page</h6>
                    </Link>
                  </div>
                </Link>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First name"
                    onChange={(e) => handleFormChange(e)}
                    value={formValues.firstName}
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
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last name"
                    onChange={(e) => handleFormChange(e)}
                    value={formValues.lastName}
                  />
                  {formValuesErrors.lastNameErr && (
                    <div
                      id="FirstNameHelp"
                      className="form-text text-danger border-danger"
                    >
                      {formValuesErrors.lastNameErr}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Age"
                    onChange={(e) => handleFormChange(e)}
                    value={formValues.age}
                  />
                  {formValuesErrors.ageErr && (
                    <div
                      id="FirstNameHelp"
                      className="form-text text-danger border-danger"
                    >
                      {formValuesErrors.ageErr}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="phone number ex: 10 1234 1234"
                    onChange={(e) => handleFormChange(e)}
                    value={formValues.phoneNumber}
                  />
                  {formValuesErrors.phoneNumberErr && (
                    <div
                      id="FirstNameHelp"
                      className="form-text text-danger border-danger"
                    >
                      {formValuesErrors.phoneNumberErr}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <textarea
                    type="text"
                    name="about"
                    className="form-control"
                    placeholder="About"
                    onChange={(e) => handleFormChange(e)}
                    value={formValues.about}
                  />
                  {formValuesErrors.aboutErr && (
                    <div
                      id="FirstNameHelp"
                      className="form-text text-danger border-danger"
                    >
                      {formValuesErrors.aboutErr}
                    </div>
                  )}
                </div>
              </div>
              {successMsg.message && (
                <div style={{ color: "red" }}>{successMsg.message}</div>
              )}

              <div className="mt-5 text-right">
                <button
                  className="btn btn-danger profile-button"
                  type="submit"
                  disabled={
                    formValuesErrors.firstNameErr ||
                    formValuesErrors.lastNameErr ||
                    formValuesErrors.phoneNumberErr ||
                    formValuesErrors.aboutErr ||
                    formValuesErrors.ageErr
                  }
                >
                  Save Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUserProfile;
