import React from 'react'
import "./contact.css"
import Navbar1 from '../../Components/Nav/Navbar/Navbar1'
import {GiPolarStar} from "react-icons/gi"
import Footer from '../../Components/Nav/Footer/Footer'
import cp from "../../Images/contact.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
const Contact = () => {
  return (
    <div className='contact'>
      <Navbar1 />
      <div className='contact-header' >
      <div className='contact-header-title' >Contact Us</div>
      </div>
      <div className='contact-body'>

        <div className='contact-body-left' >
        <div className='contact-body-head' >Head Office:</div>
        <div className='contact-body-head1' ></div>
        <div className='contact-body-add'>#817 Ground Floor, 10 A main, Indiranagar 1st Stage,
        <br />Bengaluru- 560038</div>
        <div className='contact-body-email'>Email :</div > <div className='contact-body-email1'>&nbsp; info@backpackersunited.in </div>
        <div  className='contact-body-phone'>Phone Number (s) :</div> <div className='contact-body-phone1' >&nbsp;+91 83 1018 0586 | +91 63 6117 0690</div>
        <div className='contact-body-timing'>Office Timings : </div > <div className='contact-body-timing1'> &nbsp;Monday to Saturday (11 AM to 11pm) </div>
        <div className='contact-body-feed'>For feedback or any escalation, kindly send us an email at -</div>
        <div className='contact-body-email2' >info@backpackersunited.in</div>
        </div>
        <div className='contact-body-right'>
        
          <img src={cp} height={300} width={450} className='contact-body-img'/>
        </div>
        </div>
        <div className='contact-form'>
        <div className='contact-title'>Reach Out to Us</div>
            <div className='contact-form-name'>
                <div className='contact-form-title' >Full Name <GiPolarStar className='contact-form-name-icon'></GiPolarStar></div>
                <input type="text" name="fname" placeholder='Enter Name' ></input>
            </div>
            <div className='contact-form-email'>
                <div className='contact-form-title'  >Email ID <GiPolarStar className='contact-form-email-icon'></GiPolarStar></div>
                <input type="email" name="fname" placeholder='Enter Email'  ></input>
            </div>
            <div className='contact-form-number'>
                <div className='contact-form-title'  >Mobile Number <GiPolarStar className='contact-form-number-icon'></GiPolarStar></div>
                <input type="tel" name="fname" placeholder='Enter Phone Number'  ></input>
            </div>
            <div className='contact-form-area'>
                <div className='contact-form-title1'  >Message </div>
                <textarea />
             </div>
             <div className='contatc-form-button'><button className='contact-form-but'>Submit</button></div>
             
        </div>
      
      <Footer />
    </div>
  )
}

export default Contact
