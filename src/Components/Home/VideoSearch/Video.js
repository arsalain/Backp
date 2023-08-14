"use client"
import React,{useState,useEffect} from 'react'
import Navbar2 from '../../Nav/Navbar/Navbar2.js'
import {FaRegThumbsUp,FaHandPeace} from "react-icons/fa"
import {HiUserGroup} from "react-icons/hi"
import {IoEarth} from "react-icons/io5"
import {AiOutlinePlus} from "react-icons/ai"
import  "./Video.css"
import video from "./mountain.mp4"
// import video from "../../../public/mountain.mp4"

const Video = () => {
  const [name,setName] = useState(0)
  const names = ["View Treks","View Tours","Book Treks","Book Tours","book tours"];


  useEffect(() => {
    if (name === names.length - 1) {
      const data = name - 4;
      setName(data)
    }
    const interval = setInterval(() => {
      const updatedData = name + 1;
      setName(updatedData);
    }, 3000);

    return () => clearInterval(interval);
  }, [name]);

  return (
    <div className='video-main'>
        <video src={video} autoPlay muted loop  >
        </video>
    
      <div className='video-body'>
        <Navbar2 />
        <div className='video-title' >Explore Now</div>
        <div className='video-title1' >{names[name]}</div>
        <div className='video-search'>  
        <input type="text" placeholder="Search" className='video-search-input'/>
          <button  className='video-search-button'>Explore</button>
        </div>
        <div className='video-footer'>
          <div className='video-rating-icon'><FaRegThumbsUp /></div>
        <div className='video-rating'>
          4.8
          <div>Google Rating</div>
        </div>
        <div className='video-rating-icon'><HiUserGroup /></div>
        <div className='video-rating'>
      <div className='video-customer'> 1 Lakh<AiOutlinePlus className='video-customer-icon'/></div>
          <div>Happy Customers</div>
        </div><div className='video-rating-icon'><IoEarth /></div>
        <div className='video-rating'>
        <div className='video-customer'> 15<AiOutlinePlus className='video-customer-icon'/></div>
          <div>Tourist Destinations</div>
        </div><div className='video-rating-icon'><FaHandPeace /></div>
        <div className='video-rating'>
        Best Price
          <div>Guaranteed</div>
        </div>
        </div>
      </div>
     
    </div>
  )
}

export default Video
