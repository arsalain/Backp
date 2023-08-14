import React, { useContext } from "react";
import "./Intro.css";
import th from "../../../Images/th.png"
import boy from "../../../Images/boy.jpg"
const Intro = () => {
  // Transition

  return (
  
    <div className="Intro" >
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>BEST DESTINATION AROUND THE WORLD</span>
          </div>
          <div className="i-title1">
          Our Stories Have <br />Adventures</div>
          <div className="i-discrip1">
          We are experienced in bringing Adventures<br /> to stay their journey, with all outdoor <br />
          destinations in the world as our specialties. <br /> Start your adenture now! Nature has already 
          <br />already called you!
          </div>
        <div className="i-bot"> <button className="i-button">Explore</button>
        </div>
        <div>
        </div>
        {/* social icons */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy}  layout="responsive" />
    </div>
    </div>

  );
};

export default Intro;
