import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./CourseDetails.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { courseApi } from "../../service/axiosConfig";

export default function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState({});
  const [loader, setLoader] = useState(true);
  const [checkLogin, setCheckLogin] = useState(false);
  const history = useHistory();
  const params = useParams();
  const getToken = () => {
    return { token: localStorage.getItem("token") };
  };
  useEffect(() => {
    courseApi
      .get(`/${params.id}`, { headers: getToken() })
      .then((req, res) => {
        console.log(req.data);
        setCourseDetails(req.data);

        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const startingToString = () => {
    const dt = new Date(courseDetails.starting_date).toLocaleDateString();

    return dt;
  };

  const finishingToString = () => {
    const dt = new Date(courseDetails.finishing_date).toLocaleDateString();

    return dt;
  };

  const handleEnroll = () => {
    if (localStorage.getItem("token")) {
      history.push(`/course/${params.id}/video/`);
      return 0;
    } else {
      setCheckLogin(true);
      setTimeout(() => {
        return history.push("/login");
      }, 3000);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <section className="courseDetails pt-5 mb-4 " >
            <div className="container" >
              <div className=" shadow p-1 d-flex justify-content-center m-auto gap-4">
                <div className="imgCard w-50 ">
                  <img
                    src={
                      `http://localhost:8080/${courseDetails.courseImage}` ||
                      "https://knoow.net/wp-content/uploads/2016/04/presentation.design.jpg"
                    }
                    alt="JS"
                    className="w-100 h-100"
                  />
                </div>

                <div className="courseInfo w-50 p-2 ">
                  <h2 className="mt-3">{courseDetails.name}</h2>
                  <p className="lead mt-3 mb-2">{courseDetails.short}</p>
                  <span className=" my-1 Size1rem">
                    Start Date : {startingToString()} <br />
                  </span>

                  <span className=" my-1 Size1rem">
                    Finishing Date : {finishingToString()}
                  </span>

                  <p className=" mt-2 mb-1 Size1rem">
                    Rate : {courseDetails.rate}
                  </p>
                  <p className=" mb-3  Size1rem">
                    created by : {courseDetails.created_by}
                  </p>

                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleEnroll()}
                  >
                    Enroll
                  </button>
                  {checkLogin && (
                    <Alert
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "40%",
                      }}
                      variant={"danger"}
                    >
                      You should login first before enroll a course
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </section>

          <sections className="detailsCourse">
            <div className="container">
              <div className="d-flex gap-3 mb-4 ">
                <div className="desc shadow p-3 px-4 w-50">
                  <div className="req">
                    <h2 className="mb-3 ms-3"> Requirement :-</h2>
                    <p className=" Size2rem mx-3">
                      {courseDetails.requirement.map((requir, index) => {
                        return (
                          <>
                            <span key={index}>{requir}</span> <br />
                          </>
                        );
                      })}
                    </p>
                  </div>
                  <div className="des">
                    <h2 className="mb-3 ms-3">Description :-</h2>
                    <p className=" Size2rem mx-3">
                      - {courseDetails.description}
                    </p>
                  </div>
                </div>

                <div className="learning shadow p-3 px-4 w-50">
                  <div className="d-flex  flex-column">
                    <h2 className="mb-3">What You'll Learn :-</h2>
                    {courseDetails.learning.map((learn, index) => {
                      return (
                        <>
                          <div className="d-flex">
                            <i class="bi bi-brush  d-inline-block"></i>{" "}
                            <p key={index} className="d-inline-block mx-3">
                              {learn}
                            </p>
                          </div>{" "}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </sections>

          {/* <section className="trainerData pb-3">
            <div className="container">
              <div className="infoT shadow p-3">
                <h2 className="my-2 mb-3 ms-3">Trainer :</h2>

                <Link
                  to={`/trainer/${params.trainername}`}
                  className="h4 text-primary ms-4"
                >
                  Daniel Walter Scott
                </Link>
                <p className="lead ms-4">
                  Adobe Certified Instructor &amp; Adobe Certified Expert
                </p>
                <div className="p-2 d-flex">
                  <div className="trainerImg rounded-circle shadow border border-primary">
                    <img
                      className="w-100 rounded-circle p-1"
                      src="https://img-b.udemycdn.com/user/200_H/11614232_b0fc.jpg?secure=n7H8sDFXIhz5pGjkSQjU-w%3D%3D%2C1646961699"
                      alt=""
                    />
                  </div>
                  <div className="ms-5 mt-2 fs-5 lead w-75">
                    - Sharing is who I am, and teaching is where I am at my
                    best, because I've been on both sides of that equation, and
                    getting to deliver useful training is my meaningful way to
                    be a part of the creative community. I've spent a long time
                    watching others learn, and teach, to refine how I work with
                    you to be efficient, useful and, most importantly,
                    memorable. I want you to carry what I've shown you into a
                    bright future.
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="userComments mb-3">
            <div className="container">
              <div className="p-3 shadow">
                <h2 className="ms-2 mb-3">Comments :</h2>
                <div className="d-flex gap-3"> */}
          {/* <div className="w-50  shadow border-primary p-3">
                    <p className="lead">
                      I really enjoyed this course. Daniel has a great way of
                      explaining things which makes it easy to follow. It never
                      got boring because it is fun to listen to him. I highly
                      recommend this course!
                    </p>
                    <h4>Anica K.</h4>
                  </div> */}
          {/* <div className="w-50  shadow border-primary p-3">
                    <p className="lead">
                      Amazing course, detailed, useful and soooo motivating!
                      Skill booster. I would really recommend it to everyone who
                      wants to gain some concrete abilities.
                    </p>
                    <h4>Ahmed.H</h4>
                  </div> */}
          {/* {
                    userComment.map((comment, index)=>{
                      return(
                        <div>
                        
                            <p>{comment.comment}</p>
                            <h3 className="my-2"> {comment.author.username}</h3>
                        </div>
                      )
                    })
                  } */}
          {/* </div>
              </div>
            </div>
          </section> */}
        </>
      )}
    </>
  );
}
