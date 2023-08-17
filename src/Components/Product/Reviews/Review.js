import React, { useState } from 'react'
import "./review.css"
import gokarna from "../../../Images/gokarna.jpg"
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"

const Review = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(slides,"data")
    const goToPrev = () =>{
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () =>{
        const isLast = currentIndex === slides.length - 1 ;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
  return (
    <div>
        <div className='reviews-left'>
              <img src= {slides[currentIndex].imgSrc} className='reviews-left-img'></img>
                <div className='reviews-left-arrows'>
                  <IoIosArrowDropleft  onClick={goToPrev}/>
                  <IoIosArrowDropright  onClick={goToNext} />
                </div>
                <div className='reviews-left-box'>
                  <div className='reviews-left-title' >
                     { slides[currentIndex].title}
                  </div>
                  {/* <br /> */}
                  <div className='reviews-left-para' >
                  { slides[currentIndex].para}
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Review
