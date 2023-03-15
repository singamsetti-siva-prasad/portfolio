import React from "react";
import "./card.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Card = () => {
  return (
    <div className="card">
      <div className="card__info">
        <div className="title">Hello</div>
        <div className="title">I'm siva prasad</div>

        <div className="card__type">Full Stack Web Developer</div>
        <div className="socials">
          <a href="https://github.com/singamsetti-siva-prasad" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/siva-prasad-singamsetti/ "
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/sivatweetsit" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="card__texture"></div>
    </div>
  );
};

export default Card;
