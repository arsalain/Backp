
import React , {useState, useEffect} from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar2.css";
import {CgCloseR, CgMenu} from "react-icons/cg";
import {Link} from "react-router-dom"
import Sigin from "../../../Pages/Sigin/Sigin";
import bplog from "../../../Images/bplogo.jpg"


const Navbar2 = () =>{
  const [navbar,setNavbar] = useState(false)
  const [isOpen,setIsOpen] = useState(false)

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
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }
 
  
  return (
    <>
    <Sigin open={isOpen} onClose={() => setIsOpen(false)} />
    <div className= {navbar ? "n-wrapper2 active" : "n-wrapper2"}  >
      {/* left */}
      <div className="n-left12">
      <div ><img  className="n-img2" src={bplog}></img></div>
      <div className="n-left2">
        
        <div className="n-name2">BACKPACKERS</div>
        <div className="n-name12">UNITED</div>
      </div>
      </div>
      {/* right */}
      <div className="n-right2">
        <div className={toggle ? "n-list2 active": "n-list2 "}>
          <ul  style={{ listStyleType: "none" }}>
            <li>
              <Link to="/" style={{ textDecoration: 'none' , color: "white"}} >
                Home
              </Link>
            </li>
            <li>
              <Link to="/destination" style={{ textDecoration: 'none' , color: "white"}} >
                Destination 
              </Link>
            </li>
            <li>
              <Link to="/trek" style={{ textDecoration: 'none' , color: "white"}} >
                Treks
              </Link>
            </li>
            <li>
              <Link to="/dest" style={{ textDecoration: 'none' , color: "white"}} >
                Tours
              </Link>
            </li> 
          
        </ul>
      
        </div>
        </div>
         {/*   <div className="n-login2" > 
           <button className="n-login2-but" onClick={()=>{setIsOpen(true)}}>Login</button>
        </div>
        <div  className="mobile-navbar" >
                      <CgMenu  name="menu-outline"
                            className='mobile-nav-icon'
                            onClick={() => setisMobile(true)} />   
                     
               <CgCloseR name="close-outline"
                            className='mobile-nav-icon'
                            onClick={() => setisMobile(false)}/>
                            
                            </div> */}
                            <div className="mobile-navbar2" onClick={handleToggle}>
                            {toggle? <CgCloseR  className='mobile-nav-icon2' />:   <CgMenu className='mobile-nav-icon2' /> }

                            </div>
        </div> 
      </>
    
  );

}
export default Navbar2;
