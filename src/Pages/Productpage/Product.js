import React,{useState} from 'react'
import "./product.css"
import kud from "../../Images/kudremukh-landscape.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import {LuClock9} from "react-icons/lu"
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import {VscDebugBreakpointLog} from "react-icons/vsc"
import {TbPointFilled,TbPoint} from "react-icons/tb"
import {GrGallery} from "react-icons/gr"
import {MdArrowRight,MdArrowLeft} from "react-icons/md"
import kudremukh from "../../Images/Kudremukha.png"
import stay from "../../Images/satishmullodistay.jpg"
import KudremukhSight from "../../Images/KudremukhSight.jpg"
import jeepride from "../../Images/kudremukhjeep.jpg"
import view from "../../Images/Bhamikonda.jpg"
import somawathi from "../../Images/somawathifalls.JPG"
import Gallery from '../../Components/Product/Gallery/Gallery'
import netravathi from "../../Images/Nethravathi.png"
import tandiamol from "../../Images/thandiamol.jpg"
import gokarna from "../../Images/gokarna.jpg"
import Review from '../../Components/Product/Reviews/Review'
import Album from '../../Components/Product/Album/Album'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
const Product = () => {
    const [toggleState, setToggleState] = useState(1);
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [isOpen,setIsOpen] = useState(false)
    const data = [
      {
        id:1,
        imgSrc: view,
        title: "Enma's Story",
        para: "Emma was under pressure to bring together the ideal trip for her family with only six weeks to go the clock was ticking, she chose Epic to help her because of their responsiveness and pragmatism."
      },
      {
        id:2,
        imgSrc: KudremukhSight,
        title: "Gary Story",
        para: "Discover Gary’s Transformational Travel experience."
      },
      {
        id:3,
        imgSrc: jeepride,
        title: "Erin's Story",
        para: "Discover how Erin fell in love with Morocco. "
      },
      {
        id:4,
        imgSrc: kudremukh,
        title: "Olivia's Story",
        para: "Travelling with her favourite pooch. Discover Olivia’s story here. "
      }
    ]
    const gallery = [
      {
        id: 1,
        imgSrc: jeepride,
        day: "day1",
        title: "Jeep ride",
        para: ""
      },
      {
        id: 2,
        imgSrc: kudremukh,
        day: "day1",
        title: "kudremukh trek",
        para: ""
      }
    ]
    const ArrowLeft = (props) => (
      <button
          {...props}
          className={'product-sim-prev'}><MdArrowLeft style={{color:"black"}}/> </button>
  );
  const ArrowRight = (props) => (
      <button
          {...props}
          className={'product-sim-next'}><MdArrowRight style={{color:"black"}}/> </button>
  )
  const sliderRef = React.useRef<Slider>(null);
    const settings = {
      dots: true,
      infinite: true,
      // autoplay: true,
      speed: 2000,
      // autoplaySpeed: 3000,
      // pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    const toggleTab = (index) => {
        setToggleState(index);
      };
      const handleShow = () =>{
        setShow(!show)
      }
      const handleShow1 = () =>{
        setShow1(!show1)
      }
      const handleShow2 = () =>{
        setShow2(!show2)
      }
  return (
    <>
        <Gallery open={isOpen} onClose={() => setIsOpen(false)} />
    
    <div >
    
    <div className='product-img'>
        <img src={kud} className='product-img-main' />
      <div className='product-img-body'>
        <Navbar2 />
        <div className='product-title-body' >
        <div className='product-img-title' >Kudremukha Trek</div>
        <div className='product-title-time' ><LuClock9 className='product-title-icon'></LuClock9><div >2 Days 1 Night</div></div>
        <div className='prodeuct-title-para' >The name Kuduremukha literally means "horse-faced" in Kannada and refers
         to a particular picturesque view of a side of the mountain that resembles a horse's face.Located at a distance 
         of 96 km from the district of Chikmagalur, this Kudremukh trekking would let you explore the forests
          which are spread over an area of 600 sq km. Hike to reach an altitude of 6,207ft. above sea level 
          and witness the unbounded natural scenes that adorn Kudremukh. This fun-filled Kudremukh trek 
          begins with an overnight journey from Bangalore.</div>
        </div>
        </div>
        </div>
        <div className='product-iternary' >
            <div className='product-iternary-left' >
                <div className='product-iternary-left-line' ></div>
                <div className='product-iternary-left-title'>Itinerary</div>
                <div className='product-iternary-left-day'>
                <div className='product-iternary-left-day0' onClick={handleShow}><div >Day 0 - Bangalore to Kudremukh</div>
                <div  className='product-iternary-left-day0-but'>
                  {show ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                  </div></div>
               

                {
                  show ?  <div className='product-iternary-left-day0-body' >
                  <div className='product-iternary-left-day0-title'>
                <div >Transfers from bangalore to Kudremukh via Bus</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon'>
                  </TbPointFilled> <div className='product-iternary-left-day0-point-text'>On Friday, Get picked up in Bangalore from the following points and start your Kudremukh trekking tour.</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div className='product-iternary-left-day0-point-text' >The exact pick-up location and time will be confirmed after the booking.</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div className='product-iternary-left-day0-point-text'>Pickup locations are:-</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Indranagar</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Domlur</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Yeshwantpur</div></div> 
                  <div className='product-iternary-left-day0-point-loc'>
                 <TbPoint className='product-iternary-left-day0-point-icon' >
                  </TbPoint> <div >Gorgunte Playa</div></div> 
  
                  </div> :null
                }
                </div>
                <div className='product-iternary-left-day'>
                <div className='product-iternary-left-day1' onClick={handleShow1}><div >Day 1 - Sightseeing and Chill</div>
                <div  className='product-iternary-left-day1-but'>
                  {show1 ? <IoMdArrowDropup className='product-iternary-left-day1-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day1-icon' />}
                  </div></div>
                  {
                  show1 ?  <div className='product-iternary-left-day1-body'>
                      <div className='product-iternary-left-day1-title'>
                      <VscDebugBreakpointLog className='product-iternary-left-day1-title-icon' >
                  </VscDebugBreakpointLog> <div >Jeep Ride</div>
                      </div>
                      <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >Have rest at twin sharing Tents.</div></div> 
                  <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >On the first day you will reach Home stay Early Morning through Jeep Ride.</div></div> 
                  <div className='product-iternary-left-day1-title'>
                      <VscDebugBreakpointLog className='product-iternary-left-day1-title-icon' >
                  </VscDebugBreakpointLog> <div >Bhamikonda View point</div>
                      </div>
                      <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >After having breakfast, we will head towards the View point </div></div> 
                  <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >Have lunch before returning back to the  homestay</div></div> 
                  <div className='product-iternary-left-day1-title'>
                      <VscDebugBreakpointLog className='product-iternary-left-day1-title-icon' >
                  </VscDebugBreakpointLog> <div >Somawathi Falls</div>
                      </div>
                      <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >After lunch head towards Somawathi falls.  </div></div> 
                  <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >Enjoy the bonfire, depends on weather conditions.</div></div> 
                  <div className='product-iternary-left-day1-point'>
                 <TbPointFilled className='product-iternary-left-day1-point-icon' >
                  </TbPointFilled> <div >Have the lip-smacking dinner and retire for the night.</div></div> 
                  </div> : null 
}
</div>
<div className='product-iternary-left-day'>
<div className='product-iternary-left-day2' onClick={handleShow2}><div >Day 2 - Trek and return back to bangalore </div>
                <div  className='product-iternary-left-day2-but'>
                  {show2 ? <IoMdArrowDropup className='product-iternary-left-day2-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day2-icon' />}
                  </div>
</div>
                  { show2 ?  <div className='product-iternary-left-day2-body'><div className='product-iternary-left-day2-title'>
                      <VscDebugBreakpointLog className='product-iternary-left-day2-title-icon' >
                  </VscDebugBreakpointLog> <div >Kudremukh Trek</div>
                      </div>
                      <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >On the second day of your Kudremukh trek, you will reach Kudremukh National park start point.</div></div> 
                  <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >After having breakfast, we will reach the base camp. By 09:00 AM, 
                    we will start trekking to the top of Kudremukh Peak which is around 22 KM both ways.</div></div> 
                    <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >En route to the peak, have lunch midway.</div></div> 
                  <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >Once we reach the top, all of us can enjoy the relishing view of the serenity the peak has to offer.</div></div> 
                  <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >Return to the base camp around 06:00 PM after a trek to Kudremukh. </div></div> 
                  <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >resh up and head to-wards Bangalore. </div></div> 
                  <div className='product-iternary-left-day2-point'>
                 <TbPointFilled className='product-iternary-left-day2-point-icon' >
                  </TbPointFilled> <div >Return to Bangalore around 3am  and get back home with splendid memories.</div></div> </div>
                 

                  : null }
                  </div>
                   
                <div className='product-iternary-left-but'><button className='product-iternary-left-but-bt'>Dowload PDF</button></div>
            </div>
            <div className='product-iternary-right'></div>
        </div>
        <div className='product-list'>
        <div className="bloc-tabs1">
        <button
          className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(1)}
        >
           Inclusions/
           <br />Exclusions
       
        </button>
        <button
          className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(2)}
        >
            Policy and terms
        </button>
        <button
          className={toggleState === 3 ? "tabs1 active-tabs1" : "tabs1"}
          onClick={() => toggleTab(3)}
        >
            Frequent Questions
        </button>
      </div>

      <div className="content-tabs1">
        <div
         className={toggleState === 1 ? "content1  active-content1" : "content1"}
        >
            <div className='product-detail-ie'>
            <div  className='product-detail-inclusions' > 
            <div className='product-detail-inclusions1' >Inclusions</div>
            <div >Transportation from Bangalore to Bangalore 
            <br />(non A/C)
            <br />Forest Permits.
            <br />Trek leads from Backpackers United
            <br />Local Guides
            <br />2 Breakfast, 1 Packed Lunch, 1 Dinner
            <br />Local Malnad Food
            <br />Jeep Ride</div>
            </div>
               <div className='product-detail-exclusions'><div className='product-detail-exclusions1'>Exclusions</div>
               <div >Lunch on Day 3
                <br />Personal Expenses
                <br />Anything not mentioned in the Inclusions.</div> </div>
                <div className='product-detail-things'><div className='product-detail-things1'>Things to Carry</div>
               <div >Xerox ID proof (Aadhar or other Gov. ID) 
               <br />Good trekking shoes 
               <br />Strong backpack for trekking 
               <br />Reusable water bottles      
               <br />Clothes for two days
               <br />Sunscreen,Sunglasses Cap/hat
               <br />Toiletries
               <br />Juice packs,Glucon-D,Energy bars
               <br />A Polybag to carry  wet clothes 
               <br />Raincoat or a poncho 
               <br />Personal medication if any.
               <br />Torch with new batteries.
               <br />Camera (optional).
               <br />Long socks.
               <br />Sandals. 
               <br />Power Bank.</div> </div>
            </div>
            </div>
            <div
         className={toggleState === 2 ? "content1  active-content1" : "content1"}
        >
            terms
            </div>
            <div
         className={toggleState === 3 ? "content1  active-content1" : "content1"}
        >
            frequent
            </div>
            </div>
        </div>
        <div className='product-gal'>
        <Slider {...settings} useRef={sliderRef}>
          
          <div className='product-gal-left'>
            <div className='product-gal-left-title'>
              Jeep Ride
            </div>
            <div className='product-gal-left-para'>
            Experience the thrill of a jeep ride in Kudremukh's rugged terrain. 
            Enjoy stunning views, off-road excitement, and the untouched beauty of 
            misty hills and lush forests. It's an adventure you won't forget!
            </div>
          </div>
          <div className='product-gal-right'>
            <img src={jeepride} className='product-gal-right-img'></img>
          </div>
          <div className='product-gal-left'>
            <div className='product-gal-left-title'>
            Bhamikonda View point
            </div>
            <div className='product-gal-left-para'>
            Experience the thrill of a jeep ride in Kudremukh's rugged terrain. 
            Enjoy stunning views, off-road excitement, and the untouched beauty of 
            misty hills and lush forests. It's an adventure you won't forget!
            </div>
          </div>
          <div className='product-gal-right'>
            <img src={view} className='product-gal-right-img'></img>
          </div>
          <div className='product-gal-left'>
            <div className='product-gal-left-title'>
            Stay
            </div>
            <div className='product-gal-left-para'>
            Experience the thrill of a jeep ride in Kudremukh's rugged terrain. 
            Enjoy stunning views, off-road excitement, and the untouched beauty of 
            misty hills and lush forests. It's an adventure you won't forget!
            </div>
          </div>
          <div className='product-gal-right'>
            <img src={stay} className='product-gal-right-img'></img>
          </div>
          <div className='product-gal-left'>
            <div className='product-gal-left-title'>
            Somawathi Falls
            </div>
            <div className='product-gal-left-para'>
            Experience the thrill of a jeep ride in Kudremukh's rugged terrain. 
            Enjoy stunning views, off-road excitement, and the untouched beauty of 
            misty hills and lush forests. It's an adventure you won't forget!
            </div>
          </div>
          <div className='product-gal-right'>
            <img src={somawathi} className='product-gal-right-img'></img>
          </div>
          <div className='product-gal-left'>
            <div className='product-gal-left-title'>
            Kudremukh Trek
            </div>
            <div className='product-gal-left-para'>
            Experience the thrill of a jeep ride in Kudremukh's rugged terrain. 
            Enjoy stunning views, off-road excitement, and the untouched beauty of 
            misty hills and lush forests. It's an adventure you won't forget!
            </div>
          </div>
          <div className='product-gal-right'>
            <img src={KudremukhSight} className='product-gal-right-img'></img>
          </div>
        </Slider>
        </div>
       
        <div className='similar-body'>
        <div className='similar-body-intro-line'></div>
            <div className='similar-intro'>
              <div className='similar-intro-title' >
                Kudremukh Inspiration
              </div>
              <div className='similar-intro-line'></div>
              <div className='similar-intro-para'>Everyone likes to travel in their own way and we brace it but 
                Travel enriches the mind and educates us far beyond any textbook or 
                travel guide.See below some suggestions we have crafted for you.
</div>
            </div>
            <div className='similar-card-body'>
              <div className='similar-card-left' >
                <img src={netravathi} className='similar-card-left-img'></img>
                <div className='similar-card-left-line'></div>
                <div className='similar-card-left-title' >Nethravathi Trek</div>
                <div className='similar-card-left-para' >Nethravathi Peak is in between the districts of Chikmagalur 
                in Karnataka and Belthangadi Taluk in Dakshina Kannada
                at a height of 1520-meter.Due to its biodiversity, it is a part of the Western Ghat range.</div>
                <div ><button className='similar-card-left-but'>Explore</button></div>
              </div>
              <div className='similar-card-center' >
                <img src={tandiamol} className='similar-card-center-img'></img>
                <div className='similar-card-center-line'></div>
                <div className='similar-card-center-title' >Tadiandamol Trek</div>
                <div className='similar-card-center-para' >Tadiandamol is a trekker's paradise.
                 Located at an elevation of 1,748 m, the gentle slopes and grassy terrain lure you with 
                 their scenic charm and serene ambience.</div>
                <div ><button className='similar-card-center-but'>Explore</button></div>
              </div>
              <div className='similar-card-right' >
                <img src={gokarna} className='similar-card-right-img'></img>
                <div className='similar-card-right-line'></div>
                <div className='similar-card-right-title' >Gokarna beach trek</div>
                <div className='similar-card-right-para' >It has five major beaches which have clean water, 
                gentle waves and amazing views. There are lush green hills in between these 
                beaches which makes Gokarna an even more interesting place to visit.
                </div>
                <div ><button className='similar-card-right-but'>Explore</button></div>
              </div>
    
            </div>
        </div>
        <div className='reviews-body'>
          <Review  slides={data} />
            <div className='reviews-right'>
            <div className='reviews-right-line'></div>
                <div className='reviews-right-title' >Epic Stories</div>
                <div className='reviews-right-para' >Read our journal of eclectic stories, journeys and discoveries. 
                If you have any of your own, let us know!</div>
            </div>
        </div>
        </div>
        </>
  )
}

export default Product
