import React,{useState} from 'react'
import "./product.css"
import kud from "../../Images/kudremukh-landscape.jpg"
import Navbar2 from '../../Components/Nav/Navbar/Navbar2'
import {LuClock9} from "react-icons/lu"

const Product = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };
  return (
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
                <div className='product-iternary-left-para'>Upon your arrival, the driver will transfer you from bangalore to Kudremukh 
                On the first day of your Kudremukh trek, you will reach Kudremukh National Park Early Morning through Jeep Ride.
                Once we reach the top, all of us can enjoy the relishing view of the serenity.
Then Return to the base camp after the trek.
Enjoy the bonfire, Have the lip-smacking dinner and retire for the night. On second day Start from Kudremukh National Park and head to visit the Somavathi waterfall
Enjoy the mesmerizing beauty of the waterfall and calm your soul.
Enroute visit Samse Tea Estate then Visit Belur Temple and at last Return to Bangalore around 11:00 PM and get back home with splendid memories.</div>
                <div className='product-iternary-left-but'><button className='product-iternary-left-but-bt'>Dowload PDF</button></div>
            </div>
            <div className='product-iternary-right'></div>
        </div>
        <div className='product-detail'>
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
        </div>
  )
}

export default Product
