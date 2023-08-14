import React,{useState} from 'react'
import "./about.css"
import Navbar1 from '../../Components/Nav/Navbar/Navbar1'
import about from "../../Images/about.jpg"
import Footer from '../../Components/Nav/Footer/Footer.js'
import bh from "../../Images/bh.jpg"
const About1 = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <div className='body'>
        
        <Navbar1 />
        <div  className='about-nav'>
        </div> 
        <div className="container1">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          CEO
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Team
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Trekleads
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <img src={bh} className='about-ceo-img'/>
          <div className='about-ceo-des'>
            <div className='about-ceo-name' >Habeeb</div>
            <div  className='about-ceo-full'>
In nature, nothing is perfect and everything is perfect. 
Trees can be contorted, bent in weird ways,
 and they're still beautiful.
 </div>
 </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
          <p>
          <img src={bh} className='about-team-img'/>
          <div className='about-team-des'>
            <div className='about-team-name' >Syed Mudasir Hussain</div>
            <div  className='about-team-full'>
In nature, nothing is perfect and everything is perfect. 
Trees can be contorted, bent in weird ways,
 and they're still beautiful.
 </div>
 </div>
    <img src={bh} className='about-team-img'/>
    <div className='about-team-des'>
            <div className='about-team-name' >Syed Mudasir Hussain</div>
            <div  className='about-team-full'>
In nature, nothing is perfect and everything is perfect. 
Trees can be contorted, bent in weird ways,
 and they're still beautiful.
 </div>
 </div>
 <img src={bh} className='about-team-img'/>
 <div className='about-team-des'>
            <div className='about-team-name' >Syed Mudasir Hussain</div>
            <div  className='about-team-full'>
In nature, nothing is perfect and everything is perfect. 
Trees can be contorted, bent in weird ways,
 and they're still beautiful.
 </div>
 </div>
 <img src={bh} className='about-team-img'/>
 <div className='about-team-des'>
            <div className='about-team-name' >Syed Mudasir Hussain</div>
            <div  className='about-team-full'>
In nature, nothing is perfect and everything is perfect. 
Trees can be contorted, bent in weird ways,
 and they're still beautiful.
 </div>
 </div>
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default About1
