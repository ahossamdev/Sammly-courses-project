import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardsCourses.css";

export default function CardsCourses(props) {
  return (
    <>
      <div className="card cardcoursrs shadow m-0 w-100 rounded">
        <div className="imgWidth">
          <img
            src={props.imagesSrc}
            className="card-img-top w-100 h-100"
            alt="course cover"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.courseName}</h5>
          <p className="card-text lead my-1  Size1rem">{props.shortCourse}</p>
          <p className="lead mb-1 Size1rem"> Rate: {props.courseRate}</p>
          <p className="lead mb-3 Size1rem">Created by : {props.createdBy}</p>
          <Link to={`/details/${props.name}`} className="btn bg-white">
            
            See More <img src="https://img.icons8.com/color/50/000000/eyes-cartoon.png" alt=""/>
          </Link>
        </div>
      </div>
    </>
  );
}
