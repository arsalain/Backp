import React from "react";
import "./Book.css"
import leh from "../../../Images/ladakh.jpg"
import {RiLeafFill} from "react-icons/ri"
import {GiPaperPlane} from "react-icons/gi"
import {GiFoldedPaper} from "react-icons/gi"
import {BsFillBuildingsFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
const Book = () =>{
    return (
        <div className="b-body">
            <div className="b-left">
        <div className="b-left1">
            <div className="b-left-head">
            <div className="b-name">Easy and Fast</div>
            <div className="b-title">Book Your Next Trip In </div>
            <div className="b-title1">3 Easy Steps</div>
            </div>
            </div>
            <div className="b-left-body">
                <div className="b-box"></div>
                <div className="b-box-des"> 
                <div className="b-box-name">Choose Destination</div>
                <div className="b-box-para">Discover your next adventure with
                our expertly curated destination selection</div>
                </div>
            </div>
            <div className="b-left-body">
                <div className="b-box1"></div>
                <div className="b-box-des"> 
                <div className="b-box-name">Make Payment</div>
                <div className="b-box-para">Securely and conveniently make payments
                for your booking with just a few clicks.</div>
                </div>
            </div>
            <div className="b-left-body">
                <div className="b-box2"></div>
                <div className="b-box-des"> 
                <div className="b-box-name">Reach Pick Up point on Selected Date</div>
                <div className="b-box-para">Arrive at your designated pick-up point
                on your selected date hassle-free with
                our detailed instructions and support</div>
                </div>
            </div>
            </div>
            <div className="b-right">
                <div className="b-card">
                    <div className="b-card-img" ><img src={leh}  className="b-card-img1"/></div>
                    <div className="b-card-name">Trip to Leh - ladakh  </div>
                    <div className="b-card-name1">19 - 21 April    |    by Habeeb </div>
                    <div className="b-card-dot"><RiLeafFill className="b-card-icon"/></div>
                    <div className="b-card-dot1"><GiFoldedPaper className="b-card-icon"/></div>
                    <div className="b-card-dot2"><GiPaperPlane className="b-card-icon"/></div>
                    <div className="b-card-build"><BsFillBuildingsFill className="b-card-icon1"/>24 people going 
                    <AiOutlineHeart className="b-card-icon2"/></div>
                </div>
            </div>
            
        </div>
    
    )
}
export default Book