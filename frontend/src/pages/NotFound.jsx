import React from "react";
import { Link } from "react-router-dom";
import "../styles/pageStyles/NotFound.css";
import warning from "../assets/images/icons/warning.png";
// fix this

const NotFound = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="notFoundImageBox">
          <img src={warning} alt="" srcset="" />
        </div>
        <div className="notFoundText">
          <p style={{ fontWeight: "bold" }}>
            - 404 - NOT FOUND! <br />
            <span style={{ fontWeight: "normal" }}>
              Unfortunately, this page does not exists.
            </span>
          </p>
          <p style={{ fontSize: "30px" }}></p>
        </div>
      </div>

      <Link to={"/"} className="returnButton">
        <div className="buttonBox">Return to Homepage</div>
      </Link>
    </>
  );
};

export default NotFound;
