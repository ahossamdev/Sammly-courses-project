import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoList from "../../components/videoList/videoList";
import "./videoComp.css";
import Loader from "../../components/loader/Loader";
import AddComment from "../../components/comments/add-comment.component";
import ListComments from "../../components/comments/list-comments.component";
import { courseApi } from "../../service/axiosConfig";

export default function VideoComp() {
  const [courseDetails, setCourseDetails] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [indexVideo, setIndexVideo] = useState(0);
  // const [trainerData, setTrainerDate] = useState({});
  const getToken = () => {
    return { token: localStorage.getItem("token") };
  };
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    courseApi
      .get(`/${params.id}`, { headers: getToken() })
      .then((data) => {
        // console.log(data.data.videosList);
        setCourseDetails(data.data);
        setVideoList(data.data.videosList);
        // setTrainerDate(data.data.trainer);
        console.log(videoList);
        // setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, []);

  const handleIndexVid = (event) => {
    setIndexVideo(event.target.id);
  };

  return (
    <>
      <section className="videoList bg-light">
        <div className="container">
          <div className="video-comp d-flex gap-3 mt-2 mb-4">
            <div className="video-screen p-1 w-75 shadow border-1rem">
              <iframe
                className="p-2 m-auto"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoList[indexVideo]}`} // {}
                title="Introduction to photoshop"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="play-list w-35 shadow p-2 px-3 border-1rem">
              <div>
                <ul>
                  {videoList.map((video, index) => {
                    return (
                      <li
                        style={{ cursor: "pointer", listStyle: "none" }}
                        onClick={(event) => handleIndexVid(event)}
                        key={index}
                        id={index}
                      >
                        {courseDetails.name} <br /> part: {index + 1}
                        <br />
                        <iframe
                          width="90%"
                          title="Introduction to photoshop"
                          src={`https://www.youtube.com/embed/${video}`}
                        ></iframe>
                        {/* <link to={}>{courseDetails.name}</link> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="dataV p-1 shadow ">
            <h2 className="mt-2 mb-2 ">{courseDetails.name} :</h2>
            <p >{courseDetails.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
