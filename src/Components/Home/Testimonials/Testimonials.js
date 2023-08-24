"use client"

import React from 'react'
import Carousel from 'react-elastic-carousel'
import "./Testimonials.css"
import boy from "../../../Images/raviimg.jpeg"
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"
const Testimonials = () => {
    
      
  
  return (
    <div className='t-body'>
        <div className='test-left'>
            <div className='test-name' >Testimonials</div>
            <div className='test-title'>What People Say</div>
            <div className='test-title1'>About Us.</div>
            </div>
        <div  className='test-right'>
            <img src={boy} height= {50} width= {50}  className='test-card-img'></img>
        <div className='test-card'>
            <div className='test-card-para'>I had an amazing work experience trekking with Backpacker's United! The 
            guide was knowledgeable and ensured everyone's safety, which also 
            creating a fun and inclusive atmosphere. The scenery was
            breathtaking and the trip was well-organized from start to finish. I 
            can't wait to join another adventure with the team.
            </div>
            <div className='test-card-name'>Ravi Banerjee</div>
            <div className='test-card-name1'>Kolkata,India</div>
        </div>
        <div className='test-card1'>
            <div className='text-card1-name' >Habeeb Pasha
            </div>
            <div className='text-card1-name1' >Bangalore,India
            </div>
        </div>
        </div>
        <div className='test-arrows'>
            <div >
                <IoIosArrowUp className='test-arrow-top' />
                </div>
               <div ><IoIosArrowDown className='test-arrow-bottom' /></div>
            
        </div>
        </div>
  )
}

export default Testimonials
