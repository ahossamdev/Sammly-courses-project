import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCards from "../courseCards/CourseCards";
import "./Course.css";
import { useParams } from "react-router-dom";
export default function Course() {
  const [coursesList, setCoursesList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchValue , setSearchValue] = useState(null)
  const params = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/courses/${searchValue}`)
  //     .then((req, res) => {
  //       // console.log(req.data)
  //       setCoursesList(req.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // axios
  // .get(`http://localhost:4000/courses/${params.id}`)
  // .then((req,res) => {

  //   setFilterCourses(req.data)

  // })
  // .catch((err) => console.log(err));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.value) {

      setSearchValue(e.target.value) 
      return 0;
    }

    setSearchValue(e.target.value) 
  };

  return (
    <>
      <section className="course bg-light">
        <div className="container h-100">
          <div className="searchBar d-flex justify-content-center align-items-center w-100 h-100">
            <form method="post"
              className="d-flex w-75 justify-content-center"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                type="search"
                className="w-50 px-2 py-2 mx-2"
                name="search"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <button
                className="btn btn-light px-3 py-2 bg-dark text-white"
                onClick={() => {
                  setClicked(true);
                }}
                disabled={ searchValue ? false : true}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <CourseCards
       
      />
    </>
  );
}
