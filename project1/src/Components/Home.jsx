import React from 'react'
import vg  from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillInstagram, AiFillAmazonCircle, AiFillYoutube} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='home' id = 'home'>
        <main>
          <h1>Home</h1>
          <p>lorem text fsldjalks askfdjka alksfdj adfsjlj  </p>
        </main>
      </div>
      
      <div className='home2'>
        <img src = {vg} alt = 'Graphics'></img>
        <div>
          <p>We provide all kinds of IT solutions you are looking for? Join Us!</p>
        </div>
      </div>

      <div className='home3' id= 'aboutus'>
        <div>
          <h1>Who we are?</h1>
          <p>
            We provide all kinds of IT solutions you are looking for? Join Us!We provide all kinds of IT solutions you are looking for? Join Us!We provide all kinds of IT solutions you are looking for? Join Us!We provide all kinds of IT solutions you are looking for? Join Us!We provide all kinds of IT solutions you are looking for? Join Us!We provide all kinds of IT solutions you are looking for? Join Us!
          </p>
        </div>
      </div>


      <div className='home4' id= 'brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={ {animationDelay : "0.3s" }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={ {animationDelay : "0.6s" }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={ {animationDelay : "0.9s" }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={ {animationDelay : "1.2s" }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home