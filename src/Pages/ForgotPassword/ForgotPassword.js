import React, { useState } from 'react'
import "./Forgotpassword.css"
import Navbar1 from '../../Components/Nav/Navbar/Navbar1'
import Footer from '../../Components/Nav/Footer/Footer'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import {  toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [password,setPassword] = useState()
  
  const { id, token } = useParams();
console.log(id,"id")
console.log(token,"token")
  const setVal = (e) => {
    setPassword(e.target.value)
}
  const savePassword = async (e) => {
    e.preventDefault();

    if (password === "") {
        toast.error("password is required!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
    } 
    else {
        const res = await fetch(`http://localhost:4000/auth/forgotpassword/${id}/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password })
        });

        const data = await res.json()
        console.log(data,"data")

        if (data.password == true) {
          setPassword("")
          toast.success("! Password updated Successfully",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
          
        } else {
       
            toast.error("! Token Expired generate new Link",{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              })
        }
    }
}

  //onClick={sendLink}

  return (
    <div>
      <Navbar1 />
      <div className='forgot' ></div>
      <div className='forgot-body' >      
      <div className='forgot-title'> Enter Your  New Password </div> 
      <div className='forgot-input1'>
      <div class="inputBox1"> 
<input type="password" value={password}  onChange={setVal} name="password" required /> <i>Password</i> 
</div> 
</div>
<div >
  <button className='forgot-but1' onClick={savePassword}  >Send</button>
  <div className='return-login1' >
 <div  className='retun-ac1'>Return To</div>
 <div className='retun-up1'><button className='return-up-but'
          ><Link to="/" style={{ textDecoration: 'none' , color: "black"}} >Home</Link></button> </div>
 </div>
 </div>
</div>
            
      
      <Footer />
    </div>
  )
}

export default ForgotPassword
