import React,{useState} from 'react'
import "./product.css"
import kud from "../../Images/kudremukh-landscape.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import {LuClock9} from "react-icons/lu"
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import {VscDebugBreakpointLog} from "react-icons/vsc"
import {TbPointFilled,TbPoint} from "react-icons/tb"
import {GrGallery} from "react-icons/gr"
import {IoIosArrowDropleft,IoIosArrowDropright} from "react-icons/io"
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
      const Open = () => {
        setIsOpen(!isOpen)
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
            <div className='product-iternary-left'>
                <div className='product-iternary-left-line' ></div>
                <div className='product-iternary-left-title'>Itinerary</div>
                <div className='product-iternary-left-day0'><div >Day 0 - Bangalore to Kudremukh</div>
                <div onClick={handleShow} className='product-iternary-left-day0-but'>
                  {show ? <IoMdArrowDropup className='product-iternary-left-day0-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day0-icon' />}
                  </div></div>
               

                {
                  show ?  <div className='product-iternary-left-day0-body' >
                  <div className='product-iternary-left-day0-title'>
                 <VscDebugBreakpointLog className='product-iternary-left-day0-title-icon' >
                  </VscDebugBreakpointLog> <div >Transfers from bangalore to Kudremukh via Bus</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div >On Friday, Get picked up in Bangalore from the following points and start your Kudremukh trekking tour.</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div >The exact pick-up location and time will be confirmed after the booking.</div></div> 
                  <div className='product-iternary-left-day0-point'>
                 <TbPointFilled className='product-iternary-left-day0-point-icon' >
                  </TbPointFilled> <div >Pickup locations are:-</div></div> 
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
                <div className='product-iternary-left-day1'><div >Day 1 - Sightseeing and Chill</div>
                <div onClick={handleShow1} className='product-iternary-left-day1-but'>
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
<div className='product-iternary-left-day2'><div >Day 2 - Trek and return back to bangalore </div>
                <div onClick={handleShow2} className='product-iternary-left-day2-but'>
                  {show2 ? <IoMdArrowDropup className='product-iternary-left-day2-icon' />: 
                  <IoMdArrowDropdown className='product-iternary-left-day2-icon' />}
                  </div></div>

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
                  </TbPointFilled> <div >Return to Bangalore around 3am  and get back home with splendid memories.</div></div> 
                  </div>

                  : null }
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
        <div className='product-description'>
            <div className='product-description-left'>
            <div className='product-description-left-line' ></div>
                <div className='product-description-left-title'>Experience</div>
                <div className='product-description-left-title1'>Kudremukh Trek</div>
                <div className='product-description-left-para'>Kudremukh is nestled in the 
                heart of the western ghats in Chikkamagaluru district. It comes under 
                Kudremukh National Park which is the second-largest wildlife protected 
                area in the western ghats. Kudremukh is a home for many flora and fauna. 
                You can even spot deer and peacocks on the way amongst other wildlife while trekking!  
                It is a beautiful trek across the rolling green hills and misty valleys. 
              

</div>
            </div>
            <div className='product-description-right'>
              <img src={kudremukh} />
              <div className='product-description-right-img-title'>Adventure</div>
              </div>
        </div>
        <div className='product-description-img' >
          <div className='product-description-img-left' >
        <img src={stay} />
              <div className='product-description-img-left-title'>Stay</div>
              </div>
              <div className='product-description-img-right' >
        <img src={KudremukhSight} />
              <div className='product-description-img-right-title'>Sightseeing</div>
              </div>
        </div>
        <div className='product-description-img1' >
          <div className='product-description-img1-left' >
        <img src={jeepride} />
              <div className='product-description-img1-left-title'>Jeep Ride</div>
              </div>
              <div className='product-description-img1-center' >
        <img src={view} />
              <div className='product-description-img1-right-title'>View point</div>
              </div>
              <div className='product-description-img1-right' >
        <img src={somawathi} />
              <div className='product-description-img1-right-title'>Somawathi Falls</div>
              <button className='product-description-img1-right-but' onClick={()=>{setIsOpen(true)}}><GrGallery className='product-description-img1-right-but-icon'></GrGallery>Gallery</button>
              </div>
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
            {/* <div className='reviews-left'>
              <img src= {gokarna} className='reviews-left-img'></img>
                <div className='reviews-left-arrows'>
                  <IoIosArrowDropleft />
                  <IoIosArrowDropright />
                </div>
                <div className='reviews-left-box'>
                  <div className='reviews-left-title' >
                      Enma Story
                  </div>
                  <div className='reviews-left-para' >
                  Emma was under pressure to bring together the ideal trip for her family
                   with only six weeks to go the clock was ticking, she chose Epic to help 
                   her because of their responsiveness and pragmatism.
                  </div>
                </div>
            </div> */}
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
