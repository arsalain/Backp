
import React , {useState, useRef, Component} from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";

class Navbar extends Component {

  state= {clicked : false}
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
  return (
    <>
    <div className="n-wrapper" >
      {/* left */}
      <div className="n-img"></div>
      <div className="n-left">
        
        <div className="n-name">BACKPACKERS</div>
        <div className="n-name1">UNITED</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className={this.state.clicked ? "n-list active": "n-list" } >
          <ul  style={{ listStyleType: "none" }}>
            <li>
              <Link href="/" activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" spy={true} smooth={true}>
                Destination 
              </Link>
            </li>
            <li>
              <Link href="/trek" spy={true} smooth={true}>
                Treks
              </Link>
            </li>
            <li>
              <Link href="/" spy={true} smooth={true}>
                Tours
              </Link>
            </li>
            <li>
              <Link href="/" spy={true} smooth={true}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/"spy={true} smooth={true}>
                Contact Us
              </Link>
            </li>
            
            <div className="n-login"> 
            <Link href="/"spy={true} smooth={true}>
                Login
        </Link>
        </div>
         <div className="n-signup"> 
            <Link href="/" spy={true} smooth={true}>
               <button className="n-signup2">Sign up</button>
        </Link>
        </div>
        </ul>
      
        </div>
        </div>
         {/* <div  className="mobile-navbar" >
                      <CgMenu  name="menu-outline"
                            className='mobile-nav-icon'
                            onClick={() => setisMobile(true)} />   
                     
               <CgCloseR name="close-outline"
                            className='mobile-nav-icon'
                            onClick={() => setisMobile(false)}/>
                            
                            </div> */}
                            <div className="mobile-navbar" onClick={this.handleClick}>
                              {this.state.clicked ? <CgCloseR  className='mobile-nav-icon' />:   <CgMenu className='mobile-nav-icon' />} 

                            </div>
        </div> 
      </>
    
  );
}
}
export default Navbar;
