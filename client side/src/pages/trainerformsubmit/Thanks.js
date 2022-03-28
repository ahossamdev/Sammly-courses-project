import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./thanks.css";

const Thanks = () => {
  let history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/home");
    }, 5000);
  }, []);
  return (
    <div style={{ height: "500px", backgroundColor: "#f6ddcc" }}>
      <h3
        style={{
          position: "absolute",
          color: "green",
          width: "70%",
        }}
      >
        Thank you for your Information. We will contact you through your email
        after checking your information.
        <br />
        <br />
        <span className="text-danger">redirect home after 5 sec</span>
      </h3>
    </div>
  );
};

export default Thanks;
