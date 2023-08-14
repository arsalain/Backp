import "./trek.css"
import React ,{Component, useEffect, useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import  Carousel ,{consts } from 'react-elastic-carousel'
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"
import {GrLocation} from "react-icons/gr"
import {CiClock2} from "react-icons/ci"
import {BiRupee} from "react-icons/bi"
import Footer from '../../Components/Nav/Footer/Footer.js'
import Navbar2 from '../../Components/Nav/Navbar/Navbar2.js'

function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? <IoIosArrowBack className='trek-but-icon' /> : <IoIosArrowForward className='trek-but-icon' />
  return (
    <button onClick={onClick} disabled={isEdge} className='trek-but'>
      {pointer}
    </button>
  )
}

const Trek = () =>{
    
    const [searchInput, setSearchInput] = useState("");
    const [searchResult,setSearchResult] = useState([])
    const [trekrecom,settrekrecom] = useState([])
    const [treklong,settreklong] = useState([])
    const [trekshort,settrekshort] = useState([])
    const [trekwaterfall,settrekwaterfall] = useState([])
    console.log(searchInput,"hey1")
    console.log(trekrecom,"hey")
    const search = async() =>{
      try {
        if(!searchInput.trim()){
          setSearchResult([])
          return
        }
        const res = await fetch(`http://localhost:4000/trek/gettreks?q=${searchInput}`)
        setSearchResult(res.data)
        console.log(res.data,"hiii")
      }
      catch(err){
        console.log(err)
      }
    }
    const getTrekrecom = async() =>{
      const response = await fetch("http://localhost:4000/trek/gettrekrecom")
      settrekrecom(await response.json())
    }
    const getTreklong = async() =>{
      const response = await fetch("http://localhost:4000/trek/gettreklong")
      settreklong(await response.json())
    }
    const getTrekshort = async() =>{
      const response = await fetch("http://localhost:4000/trek/gettrekshort")
      settrekshort(await response.json())
    }
    const getTrekwaterfall = async() =>{
      const response = await fetch("http://localhost:4000/trek/gettrekwaterfall")
      settrekwaterfall(await response.json())
    }
   useEffect(()=>{
    search()
 getTrekrecom()
 getTreklong()
getTrekshort()
getTrekwaterfall()
 },[searchInput])
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 850, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4 , itemsToScroll: 1},
    { width: 1750, itemsToShow: 4, itemsToScroll: 1},
  ]

  return (
    
    <div className="trek">
    <div className='trek-body'>
      <Navbar2 />
      <div className='trek-search'>
        <div className='trek-search-bar'>
          <input type="text" placeholder="Search for amazing treks" className='trek-search-input'   onChange={(e)=>setSearchInput(e.target.value)}
   value={searchInput}/>
          <button  className='trek-search-button'><AiOutlineSearch   className="trek-search-icon" /></button>
          </div>
          {searchResult.map((list,index)=>(
          <div  className='trek-search-field'>
            <img src={`http://localhost:4000/uploads/${list.testimage}`} width={50} height={50} ></img>
            <div className='trek-search-field-name'>{list.name} </div>
          </div>
             ))}
          </div>
          </div>
        <div className='trek-recom'>
          <div className='trek-recom-title'>Recommended Treks </div>
          <Carousel isRTL={false} itemPadding={[10, 10]} breakPoints={breakPoints}  className=''  renderArrow={myArrow} showEmptySlots >
  {trekrecom.map((list,index)=>(
 <div key={index} className='trek-card'>
     
        <img src={`http://localhost:4000/uploads/${list.testimage}`} width={220} height={170} className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>{list.name}</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>{list.state}
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>{list.daynight}</div>
          </div>
        </div>
        <div className='trek-card-date'>{list.date}{list.day}</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>{list.person}</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>{list.amount}</div>
        </div>
      </div>
  ))}
      </Carousel>
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Long Treks </div>
          <Carousel isRTL={false} itemPadding={[10, 10]} breakPoints={breakPoints}  className=''  renderArrow={myArrow} showEmptySlots >
  {treklong.map((list,index)=>(
 <div key={index} className='trek-card'>
     
        <img src={`http://localhost:4000/uploads/${list.testimage}`} width={220} height={170} className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>{list.name}</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>{list.state}
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>{list.daynight}</div>
          </div>
        </div>
        <div className='trek-card-date'>{list.date}{list.day}</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>{list.person}</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>{list.amount}</div>
        </div>
      </div>
  ))}
      </Carousel>
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Short Treks </div>
          <Carousel isRTL={false} itemPadding={[10, 10]} breakPoints={breakPoints}  className=''  renderArrow={myArrow} showEmptySlots >
  {trekshort.map((list,index)=>(
 <div key={index} className='trek-card'>
     
        <img src={`http://localhost:4000/uploads/${list.testimage}`} width={220} height={170} className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>{list.name}</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>{list.state}
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>{list.daynight}</div>
          </div>
        </div>
        <div className='trek-card-date'>{list.date}{list.day}</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>{list.person}</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>{list.amount}</div>
        </div>
      </div>
  ))}
      </Carousel>
      </div>
      <div className='trek-recom'>
          <div className='trek-recom-title'>Waterfall Treks </div>
          <Carousel isRTL={false} itemPadding={[10, 10]} breakPoints={breakPoints}  className=''  renderArrow={myArrow} showEmptySlots >
  {trekwaterfall.map((list,index)=>(
 <div key={index} className='trek-card'>
     
        <img src={`http://localhost:4000/uploads/${list.testimage}`} width={220} height={170} className='trek-card-img' ></img>
        <div className='trek-card-body' >
        <div className='trek-card-title'>{list.name}</div>
        <div className='trek-card-loca'>
          <div className='trek-card-loca1'><div className='trek-card-loca-icon' ><GrLocation className='trek-card-loca-icon'/></div>{list.state}
          <div  className='trek-card-day'><div className='trek-card-loca-icon' ><CiClock2 /></div>{list.daynight}</div>
          </div>
        </div>
        <div className='trek-card-date'>{list.date}{list.day}</div>
        </div>
        <div className='trek-card-total' >
          <div className='trek-card-person'>{list.person}</div>
          <div className='trek-card-amount'><div className='trek-card-amount-icon'><BiRupee /></div>{list.amount}</div>
        </div>
      </div>
  ))}
      </Carousel>
      </div>
      <Footer />
    </div>
    
  )
}


export default Trek
