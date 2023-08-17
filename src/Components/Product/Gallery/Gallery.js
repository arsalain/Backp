import React from 'react'
import kudremukh from "../../../Images/Kudremukha.png"
import stay from "../../../Images/satishmullodistay.jpg"
import KudremukhSight from "../../../Images/KudremukhSight.jpg"
import jeepride from "../../../Images/kudremukhjeep.jpg"
import view from "../../../Images/Bhamikonda.jpg"
import somawathi from "../../../Images/somawathifalls.JPG"
import "./gallery.css"
const Gallery = ({ onClose,open }) => {
    if (!open) return null
  return (
    <div className='gallery-main'>
      <div className='gallery-first'>
      <div className='gallery-close' ><button className='gallery-close-but' onClick={onClose}>x</button></div>
          <div className='gallery-first-img'>
          <img src={kudremukh} />
        <div className='gallery-first-img-title'>Kudremukha Trek</div>
          </div>
      </div>
      <div className='gallery'>
          <div className='pics'>
            <img className='pics-img' src={kudremukh} style={{width: '100%'}}/>
            <img className='pics-img' src={view} style={{width: '100%'}}/>
            <img className='pics-img' src={stay} style={{width: '100%'}}/>
            <img className='pics-img' src={jeepride} style={{width: '100%'}}/>
            <img className='pics-img' src={view} style={{width: '100%'}}/>
            <img className='pics-img' src={KudremukhSight} style={{width: '100%'}}/>
            <img className='pics-img' src={jeepride} style={{width: '100%'}}/>
            <img className='pics-img' src={stay} style={{width: '100%'}}/>
            <img className='pics-img' src={somawathi} style={{width: '100%'}}/>
            </div >
            </div>
    
  </div>
  
  )
}

export default Gallery
