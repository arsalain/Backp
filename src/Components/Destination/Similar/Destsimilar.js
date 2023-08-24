import React from 'react'
import "./destsimilar.css"
import wayanad from "../../../Images/destwayanad.jpg"
import kodaikanol from "../../../Images/kodaikanol.jpeg"
import Kudremukh from "../../../Images/Kudremukha.png"
import nethravathi from "../../../Images/Nethravathi.png"
import Paithalamala from "../../../Images/paithalamala.jpg"
import dudhsagar from "../../../Images/dudhsagar.jpg"
import kodachadri from "../../../Images/kodachadri.jpg"
import gokarna from "../../../Images/gokarna.jpeg"
import dandeli from "../../../Images/dandeli.jpg"
import chikmangalur from "../../../Images/chikmangalur.jpg"
import coorg from "../../../Images/destcoorg.jpeg"
import {FaClock} from "react-icons/fa"
import {BiRupee} from "react-icons/bi"
import {ImLocation} from "react-icons/im"
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md"
import Slider from "react-slick";
import Footer from '../../Nav/Footer/Footer'



const Destsimilar = () => {
    
  const ArrowLeft = (props) => (
    <button
        {...props}
        className={'dest-sim-prev'}><MdKeyboardArrowLeft style={{color:"black"}}/> </button>
);
const ArrowRight = (props) => (
    <button
        {...props}
        className={'dest-sim-next'}><MdKeyboardArrowRight style={{color:"black"}}/> </button>
)
const sliderRef = React.useRef<Slider>(null);
//  sliderRef.current.slickPlay();;
// if (sliderElement){
   
// }
    const settings = {
        infinite: true,
        centerMode: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div >
    <div className='dest-sim'>
      <div className='dest-sim-title' ><h1 >Weekend Gateways</h1></div>
      <div className='dest-sim-cont'>
        <div className='dest-sim-card'>
            <img src={wayanad} className='dest-sim-card-img'/>
            <div className='dest-sim-card-name' >Wayanad Tour</div>
            <div className='dest-sim-card-amount'>
            <div className='dest-sim-card-t'><ImLocation className='dest-sim-card-t-icon'/>Kerala
                </div>
                <div className='dest-sim-card-t1'><FaClock className='dest-sim-card-t-icon'/>2D/1N
                </div>
                <div className='dest-sim-card-t2'><BiRupee />5999
                </div>
              
            </div>
            <div className='dest-sim-card-bt'><button className='dest-sim-card-but'>View Details</button>
            <button className='dest-sim-card-but1'>Book Now</button></div>
        </div>
        <div className='dest-sim-card'>
            <img src={Kudremukh} className='dest-sim-card-img'/>
            <div >
            <div className='dest-sim-card-name' >Kudremukh Trek</div>
            </div>
            <div className='dest-sim-card-amount1'>
            <div className='dest-sim-card-t'><ImLocation className='dest-sim-card-t-icon'/>Karnataka
                </div>
                <div className='dest-sim-card-t1'><FaClock className='dest-sim-card-t-icon' />2D/1N
                </div>
                <div className='dest-sim-card-t2'><BiRupee />3799
                </div>
              
            </div>
            <div className='dest-sim-card-bt'><button className='dest-sim-card-but'>View Details</button>
            <button className='dest-sim-card-but1'>Book Now</button></div>
        </div>
        <div className='dest-sim-card'>
            <img src={kodaikanol} className='dest-sim-card-img'/>
            <div className='dest-sim-card-name' >kodaikanal Tour</div>
            <div className='dest-sim-card-amount2'>
            <div className='dest-sim-card-t'><ImLocation className='dest-sim-card-t-icon'/>Tamil Nadu
                </div>
                <div className='dest-sim-card-t1'><FaClock className='dest-sim-card-t-icon' />2D/1N
                </div>
                <div className='dest-sim-card-t2'><BiRupee />6499
                </div>
              
            </div>
            <div className='dest-sim-card-bt'><button className='dest-sim-card-but'>View Details</button>
            <button className='dest-sim-card-but1'>Book Now</button></div>
        </div>
      </div>
          <div className='dest-sim-slide'>
          <h1> Plan Your Next Holiday</h1>
          <Slider {...settings} useRef={sliderRef}>
            <div className='dest-sim-slide-item'>
                <img src={nethravathi} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  Nethravathi Trek
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={chikmangalur} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  Chikmagalur Tour
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={Paithalamala} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  Paithalamala Trek
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={gokarna} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  Gokarna-Murudeshwara Tour
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={dudhsagar} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  Dhudsagar Trek
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={dandeli} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                Dandeli Tour
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={kodachadri} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  kodachadri Trek
              </div>
            </div >
            <div className='dest-sim-slide-item'>
                <img src={coorg} className='dest-sim-slide-item-img'></img>
              <div className='dest-sim-slide-item-title'>
                  Coorg Tour
              </div>
            </div >
          </Slider>
        </div>
        </div>
        <Footer />
        </div >
  
  )
}

export default Destsimilar
