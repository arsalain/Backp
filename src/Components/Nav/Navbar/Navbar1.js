"use client"

import React , {useState, useEffect} from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {CgCloseR, CgMenu} from "react-icons/cg";
import {Link} from "react-router-dom";



const Navbar1 = () =>{
  const [navbar,setNavbar] = useState(false)
  console.log(navbar,"nav")

  useEffect(() => {
    // window is accessible here.
    window.addEventListener('scroll',changeBackground)
  }, [])
  const changeBackground = () =>{
    if(window.scrollY >= 50){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
      
  }

 
  
  return (
    <>
    <div className={navbar ? "n-wrapper active" : "n-wrapper"} >
      {/* left */}
      <div className="n-img"></div>
      <div className="n-left">
        
        <div className="n-name">BACKPACKERS</div>
        <div className="n-name1">UNITED</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul  style={{ listStyleType: "none" }}>
            <li>
              <Link to="/" style={{ textDecoration: 'none' , color: "black"}}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none' , color: "black"}} >
                Destination 
              </Link>
            </li>
            <li>
              <Link to="/trek" style={{ textDecoration: 'none' , color: "black"}} >
                Treks
              </Link>
            </li>
            <div className="n-login"> 
            <Link to="/" style={{ textDecoration: 'none' , color: "black"}} >
                Login
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
                            <div className="mobile-navbar">
                <CgCloseR  className='mobile-nav-icon' />:   <CgMenu className='mobile-nav-icon' /> 

                            </div>
        </div> 
      </>
    
  );

}
export default Navbar1;
