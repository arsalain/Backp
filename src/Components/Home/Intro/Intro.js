import React, { useContext } from "react";
import "./Intro.css";
import th from "../../../Images/th.png"
import boy from "../../../Images/boy.jpg"
import homea from "../../../Images/homeimg.jpg"
const Intro = () => {
  // Transition

  return (
  
    <div className="Intro" >
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          Best Destinations Around The World
          </div>
          <div className="i-title">
          Our Stories Have </div>
          <div className="i-title1">
          Adventures</div>
          <div className="i-discrip1">
          We are experienced in bringing Adventures to stay their journey, with all outdoor 
          destinations in the world as our specialties. Start your adenture now! Nature has already 
          already called you!
          </div>
        <div className="i-bot"> <button className="i-button">Explore</button>
        </div>
        <div>
        </div>
        {/* social icons */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={homea} className="i-right-img"  />
    </div>
    </div>

  );
};

export default Intro;
