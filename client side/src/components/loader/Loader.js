import React from "react";

export default function Loader() {
  return (
    <div className={"container"}>
      <span>Loading...</span>
      <div
        style={{ textAlign: "center", justifySelf: "center" }}
        className="spinner-border"
        role="status"
      ></div>
    </div>
  );
}
