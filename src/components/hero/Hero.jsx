import React from "react";
import "./Hero.css";
import { MoveRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="hero-main-container ">
        <div className="btn-container">
          <button className="btn">New feature</button>
          <div className="span-container">
            <span>
              Check out the team dashboard{" "}
              <span>
                <MoveRight size={"1rem"} />
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-second-container">
        <div className="textcontainer">
          <h1>Beautiful analytics to grow smarter</h1>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="hero-btn-container">
          <div className="ply-btn">
            <button className="btn1">
              <span>
                <Play size={".8rem"} />
              </span>
              Demo
            </button>
          </div>
          <button className="btn2">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
