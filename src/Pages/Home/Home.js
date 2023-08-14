import React from 'react'
import Video from "../../Components/Home/VideoSearch/Video.js"
import Intro from "../../Components/Home/Intro/Intro.js"
import Selling from "../../Components/Home/Selling/Selling.js"
import Points from "../../Components/Home/Points/Points.js"
import Book from "../../Components/Home/Book/Book.js"
import Testimonials from "../../Components/Home/Testimonials/Testimonials.js"
import Footer from "../../Components/Nav/Footer/Footer.js"

const Home = () => {
  return (
    <div>
      <Video />
      <Intro />
      <Selling />
      <Points />
      <Book />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
