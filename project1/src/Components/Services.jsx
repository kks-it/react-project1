import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';

const Services = () => {
  return (
    <div className='services'>
        <Carousel 
            showArrows= {false}
            showStatus= {false}
            showThumbs= {false}
            autoPlay
            infiniteLoop
            interval={2000}
            
        >
            <div>
                <img src ={img1} alt='Graphics'></img>
                <p className='legend'>Front-end Development</p>
            </div>
            <div>
                <img src ={img2} alt='Graphics'></img>
                <p className='legend'>Back-end Development</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services