"use client"

import React from 'react'
import Carousel from 'react-elastic-carousel'
import "./Testimonials.css"
import boy from "../../../Images/dest.jpg"

const Testimonials = () => {
    
        const breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 1, itemsToScroll: 1 },
          { width: 850, itemsToShow: 2, itemsToScroll: 2 },
          { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
          { width: 1450, itemsToShow: 2 , itemsToScroll: 2},
          { width: 1750, itemsToShow: 2 , itemsToScroll: 2},
        ]
      
  
  return (
    <div className='t-body'>
      <Carousel breakPoints={breakPoints}   >
        <div className='test-left'>
            <div className='test-name' >Testimonials</div>
            <div className='test-title'>What People Say</div>
            <div className='test-title1'>About Us.</div></div>
        <div  className='test-right'>
            <img src={boy} height= {50} width= {50}  className='test-card-img'></img>
        <div className='test-card'>
            <div className='test-card-para'>I had an amazing work experience trekking with Backpacker's United! The <br />guide was knowledgeable and ensured everyone's safety, which also <br />creating a fun and inclusive atmosphere. The scenery was
            <br />breathtaking and the trip was well-organized from start to finish. I <br />can't wait to join another adventure with the team.
            </div>
            <div className='test-card-name'>Chitramgada Singh</div>
            <div className='test-card-name1'>Lahore,India</div>
        </div>
        </div>
        <div className='test-left'>
            <div className='test-name' >Testimonials</div>
            <div className='test-title'>What People Think</div>
            <div className='test-title1'>About Us.</div></div>
        <div  className='test-right'>
            <img src={boy} height= {50} width= {50}  className='test-card-img'></img>
        <div className='test-card'>
            <div className='test-card-para'>I had an amazing work experience trekking with Backpacker's United! The <br />guide was knowledgeable and ensured everyone's safety, which also <br />creating a fun and inclusive atmosphere. The scenery was
            <br />breathtaking and the trip was well-organized from start to finish. I <br />can't wait to join another adventure with the team.
            </div>
            <div className='test-card-name'>Chitramgada Singh</div>
            <div className='test-card-name1'>Lahore,India</div>
        </div>
        </div>
        <div className='test-left'>
            <div className='test-name' >Testimonials</div>
            <div className='test-title'>What People Feel</div>
            <div className='test-title1'>About Us.</div></div>
        <div  className='test-right'>
            <img src={boy} height= {50} width= {50}  className='test-card-img'></img>
        <div className='test-card'>
            <div className='test-card-para'>I had an amazing work experience trekking with Backpacker's United! The <br />guide was knowledgeable and ensured everyone's safety, which also <br />creating a fun and inclusive atmosphere. The scenery was
            <br />breathtaking and the trip was well-organized from start to finish. I <br />can't wait to join another adventure with the team.
            </div>
            <div className='test-card-name'>Chitramgada Singh</div>
            <div className='test-card-name1'>Lahore,India</div>
        </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonials
