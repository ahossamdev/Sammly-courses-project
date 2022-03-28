import "./CourseCards.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Pagination from "../../components/pagination/pagination";
import Loader from "../../components/loader/Loader";
import { courseApi } from "../../service/axiosConfig";
import classes from "./courses.module.css";
import Swal from "sweetalert2";
import { Alert } from "@mui/material";

export default function CourseCards(props) {
  const [loader, setLoader] = useState(true);
  const [coursesList, setCoursesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  let history = useHistory();
  const getToken = () => {
    return { token: localStorage.getItem("token") };
  };
  useEffect(() => {
    courseApi
      .get("/", { headers: getToken() })
      .then((res) => {
        console.log(res.data);
        setCoursesList(res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDetails = (course) => {
    const id = course._id;
    // const name = course.name;
    history.push(`/coursedetails/${id}`);
  };

  // const indexOfLastCourse = currentPage * postsPerPage;
  // const indexOfFirstCourse = indexOfLastCourse - postsPerPage;
  // const currentCourses = coursesList.slice(
  //   indexOfFirstCourse,
  //   indexOfLastCourse
  // );

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={classes.body}>
        <div className={"container mt-3 pb-5"}>
          <div className="row gy-3 gx-0 ">
            <h2 className={classes.title}>Courses</h2>
            <div>
              {!localStorage.getItem("token") && (
                <Alert
                  style={{
                    justifyContent: "center",
                    fontSize: "16px",
                    width: "500px",
                    marginLeft: "28%",
                    fontWeight: "bold",
                  }}
                  severity="warning"
                >
                  You should login first !
                </Alert>
              )}
            </div>
            {localStorage.getItem("token") && (
              <>
                {coursesList.map((course, index) => {
                  return (
                    <Card
                      id={classes.card}
                      className={"col-sm-12 col-md-3 p-4 "}
                      style={{
                        padding: "20px",
                        backgroundColor: "#c5b0a3",
                        width: "18rem",
                        border: "dark",
                        marginRight: "40px",
                        marginLeft: "40px",
                        textAlign: "center",
                        marginTop: "40px",
                        marginBottom: "80px",
                        boxShadow: "0 0 24px 0 #000000",
                        overflow: "hidden",
                        borderRadius: "0.2rem",
                        display: "flex",
                        flexdirection: "column",
                        justifycontent: "space-between",
                        cursor: "pointer",
                        transition: "transform 200ms ease-in",
                      }}
                    >
                      <Card.Img
                        className={classes.imgSize}
                        variant="top"
                        src={
                          `http://localhost:8080/${course.courseImage}` ||
                          "https://knoow.net/wp-content/uploads/2016/04/presentation.design.jpg"
                        }
                      />
                      <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text className={classes.text}>
                          instructor: {course.created_by}
                        </Card.Text>
                        <Card.Text className={classes.text}>
                          Rate: {course.rate}
                        </Card.Text>
                      </Card.Body>
                      <button
                        className={classes.cardbtn}
                        onClick={() => handleDetails(course)}
                        key={index}
                      >
                        View details
                      </button>
                    </Card>
                  );
                })}
              </>
            )}

            {/* <Pagination
            totalCourses={coursesList.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
          </div>
        </div>
      </div>
    </>
  );
}
