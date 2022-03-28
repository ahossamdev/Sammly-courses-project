import React from "react";
import thum from "../../images/thumt.png";

export default function videoList(props) {
  console.log(props);

  return (
    <>
      <div className="video-card my-2">
        <div
          onClick={() => {
            props.setIndexVideo(3);
          }}
          className="d-flex shadow p-1 border-1rem"
        >
          <div className="w-custom">
            <iframe
              className="p-2 m-auto"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${props.videoLink}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              thumbnail={`${thum}`}
              allowfullscreen
            ></iframe>
          </div>
          <div className="infoV">
            <h4>{props.CourseName}</h4>
            {/* <p>{props.CourseTrainer}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
