import React from 'react'
import Navbar2 from '../../Nav/Navbar/Navbar2'
import dest from "../../../Images/destination.jpeg"
import hampi from "../../../Images/Hampi.jpeg"
import coorg from "../../../Images/destcoorg.jpeg"
import kodiakanol from "../../../Images/kodaikanol.jpeg"
import pondichery from "../../../Images/Pondicherry.jpeg"
import ooty from "../../../Images/ooty.jpeg"
import gokarna from "../../../Images/gokarna.jpeg"
import dandeli from "../../../Images/dandeli.jpg"
import munar from "../../../Images/munar.jpg"
import chikmangalur from "../../../Images/chikmangalur.jpg"
import wayanad from "../../../Images/wayanad.jpg"
import "./destimg.css"
const Destimg = () => {
  return (
    <div>
           <div className='destimg'>
        <img src={dest} className='destimg-main' />
      <div className='destimg-head'>
      <Navbar2 />
      </div>
      <div className='destimg-head-title'><h1 >Destinations</h1></div>
      
      <div className='destimg-body'>
        <div className='destimg-body-title'><h1>Tours</h1></div>
        <div className='destimg-body-top'>
            <div className='destimg-body-img'>
                <img src={coorg} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={hampi} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={kodiakanol} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={pondichery} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            </div>
            <div className='destimg-body-middle'>
            <div className='destimg-body-img'>
                <img src={ooty} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={gokarna} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={dandeli} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={chikmangalur} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            </div>
            <div className='destimg-body-last'>
            <div className='destimg-body-img'>
                <img src={munar} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            <div className='destimg-body-img'>
                <img src={wayanad} className='destimg-body-i' />
                <div className='destimg-body-name'>Travel to</div>
                <div className='destimg-body-name1' >Coorg</div>
            </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Destimg
