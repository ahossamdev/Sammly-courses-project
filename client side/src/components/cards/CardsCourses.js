import { Link } from "react-router-dom";
import "./CardsCourses.css";

export default function CardsCourses(props) {
  return (
    <>
      <div className="card shadow m-0 w-100">
        <div className="imgWidth">
          <img
            src={props.imagesSrc}
            className="card-img-top w-100 h-100"
            alt="course cover"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.courseTitle}</h5>
          <p className="card-text">{props.detailsCourse}</p>
          <Link to={`/details/2`} className="btn btn-primary">
            {/* to={`/details/${props.courseName}`} */}
            See More
          </Link>
        </div>
      </div>
    </>
  );
}
