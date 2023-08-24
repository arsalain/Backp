import React from "react";
import "./Footer.css"
import {ImFacebook2} from "react-icons/im"
import {AiOutlineTwitter,AiFillInstagram} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {Link} from "react-router-dom";
import bplog from "../../../Images/bplogo.jpg"
const Footer = () => {
return (
    <div className="f-body">

        <div className="f-head">
          <div className="f-bottom">
            <div className="f-logo">
        <img className="f-img" src={bplog}></img>
        <div className="f-left">
      <div className="f-logo-name-main">
        <div className="f-name">BACKPACKERS</div>
        <div className="f-name1">UNITED</div>
        </div>
        <div className="f-name2" >Book your trip in minute, get full
            <br />
            Control for much longer</div>
      </div>
      </div>
      <div className="f-footer">
                <div className="f-dot"><ImFacebook2  className="f-dot-icon"/></div>
                <div className="f-dot1"><GrInstagram  className="f-dot-icon" /></div>
                <div className="f-dot1"><AiOutlineTwitter  className="f-dot-icon" /></div>
                </div>
      </div>
      <div className="f-mid-main">
            <div className="f-mid">
                <div className="f-mid-name">Company</div>
                <div className="f-mid-sub"> <Link to="/about"style={{ textDecoration: 'none' , color: "white"}} >
                About
        </Link></div>
                <div className="f-mid-sub"><Link to='/' style={{ textDecoration: 'none' , color: "white"}}  >Careers</Link></div>
                <div className="f-mid-sub">Mobile</div>
                </div>
                <div className="f-mid">
                <div className="f-mid-name">Contact</div>
                <div className="f-mid-sub"><Link to='/' style={{ textDecoration: 'none' , color: "white"}}  >Help/FAQ</Link></div>
                <div className="f-mid-sub"><Link to='/' style={{ textDecoration: 'none' , color: "white"}} >Press</Link></div>
                <div className="f-mid-sub"><Link to='/' style={{ textDecoration: 'none' , color: "white"}}  >Affilates</Link></div>
                </div>
                <div className="f-mid">
                <div className="f-mid-name">More</div>
                <div className="f-mid-sub"><Link to='/' style={{ textDecoration: 'none' , color: "white"}} >Blogs</Link></div>
                <div className="f-mid-sub"><Link to='/' style={{ textDecoration: 'none' , color: "white"}} >Careers</Link></div>
                <div className="f-mid-sub"><Link to='/contact' style={{ textDecoration: 'none' , color: "white"}}  >Contact Us</Link></div>
                </div>
                </div>
              
      </div>
      <div className="f-end"> All rights reserved@<div className="f-end-name">backpackers</div><div className="f-end-name1">united.</div>in</div>
        </div>

)
    
}

export default Footer;