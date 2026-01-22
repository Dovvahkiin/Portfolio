import React from "react";
import { Link } from "react-router-dom";
import "../styles/pageStyles/Contact.css";
import {
  linkedInIcon,
  instagramIcon,
  discordIcon,
  githubIcon,
} from "../utils/icons";

const Contact = () => {
  return (
    <>
      <div className="contactBox">
        <div className="main">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        </div>
        <div className="icons">
          <Link to={"https://www.linkedin.com/in/bozidartovarnicki/"}>
            <img src={linkedInIcon} alt="linkedin" />
          </Link>
          <Link to={"https://www.instagram.com/tovarnickii.b/"}>
            <img src={instagramIcon} alt="instagram" />
          </Link>
          <Link to={"https://github.com/Dovvahkiin"}>
            <img src={githubIcon} alt="github" />
          </Link>
          <Link to={"https://discord.com/users/401693178144751616"}>
            <img src={discordIcon} alt="discord" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
