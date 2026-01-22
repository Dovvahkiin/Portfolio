import React from "react";
import { Link } from "react-router-dom";
import "../styles/pageStyles/NotFound.css";
import { warningIcon } from "../utils/icons";
// fix this

const NotFound = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="notFoundImageBox">
          <img className="warningIcon" src={warningIcon} alt="" srcset="" />
        </div>
        <div className="notFoundText">
          <p style={{ fontWeight: "bold" }}>- 404 - NOT FOUND! </p>
          <p style={{ fontSize: "30px" }}>
            Unfortunately, this page does not exists.
          </p>
        </div>
      </div>

      <Link to={"/"} className="returnButton">
        <div className="buttonBox">Return to Homepage</div>
      </Link>
    </>
  );
};

export default NotFound;
