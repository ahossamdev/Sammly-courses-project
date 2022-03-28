import React from "react";
import './CourseVideo.css'

export default function CourseVideo() {
  return (
    <>
      <section className="courseVideo">
        <div className="container">
          <div className="video m-auto P-1 shadow">
            <iframe
            className="p-2 m-auto"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IyR_uYsRdPs" // get this video from database
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
