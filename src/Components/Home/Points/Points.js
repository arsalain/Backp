import React from "react";
import "./Points.css"
import  dest from "../../../Images/dest.jpg"
import {BiPlusMedical} from "react-icons/bi"
import {MdOutlineRouter} from "react-icons/md"

const Points = () => {
    return (
        <div className="p">
        <div className="p-left"   
>
<div className="p-card-log">
<div className="p-card-nam"></div>
                    <div className="p-num-log">50<BiPlusMedical   className="p-num-icon"/></div>
    
    <div className="p-card-nam1">Destination</div>
                </div>
<div className="p-left-box1" >
<div className="p-card-nam1">
    <div className="p-card-logo"><MdOutlineRouter  className="p-num-icon"/></div>
                    <div className="p-num-log1">200<BiPlusMedical   className="p-num-icon"/></div>
                    </div> 
    <div className="p-card-nam2">Employees</div>
              
</div>
            {/* <Image src={dest} width={400} height={600}/>  */}
        </div>
        <div className="p-right">
            <div className="p-head">
            <div className="p-name">Destination Points</div>
            <div className="p-title1">Our Stories Have</div>
            <div className="p-title2">Adventures</div>
            <div className="p-para1">We are experienced in bringing adventures to stay their
            <br/>joutny with all outdoor destinations in the world as our<br/>
            specialities. Start  your adventure now! Nature has already
            <br />called you!</div>
            </div>
            <div className="p-body">
                <div className="p-card">
                    <div className="p-num">10<BiPlusMedical className="p-num-icon" /></div>
    <div className="p-card-name">Travel</div>
    <div className="p-card-name1">Destination</div>
                </div>
                <div className="p-card">
                    <div className="p-num">40<BiPlusMedical className="p-num-icon" /></div>
    <div className="p-card-name">Trek</div>
    <div className="p-card-name1">Guides</div>
                </div>
                <div className="p-card">
                    <div className="p-num">20K<BiPlusMedical className="p-num-icon"/></div>
    <div className="p-card-name">Happy</div>
    <div className="p-card-name1">Customers</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Points;