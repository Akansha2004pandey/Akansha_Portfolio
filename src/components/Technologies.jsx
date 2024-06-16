import React from 'react'
import image1 from "../images/bootstrap.png"
import image2 from "../images/express.png"
import image3 from "../images/html.png"
import image4 from "../images/js.png"
import image5 from "../images/css.svg"
import image6 from "../images/react.png"
import image7 from "../images/tailwind.png"
import image8 from "../images/mongo.png"
import image9 from "../images/postgre.png"
import image10 from "../images/redux.png"
import image11 from "../images/daisyui.svg"
import image12 from "../images/cplus.png"
import image13 from "../images/git.png"
import { forwardRef } from 'react'

import { GrTechnology } from "react-icons/gr";

const Technologies = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
       
    <div className='text-3xl font-semibold  text-white px-3 py-3 flex  justify-center bg-gradient-to-r from-black  to-gray-800'><div className='px-4'>Techstack</div> <GrTechnology /></div>
    <div className="carousel py-8 ">
    <div className="carousel-item flex flex-col ">
    <img src={image12} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md' />
   
  </div> 
  <div className="carousel-item flex flex-col" >
   
    <img src={image13} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
    
  </div> 
  <div className="carousel-item flex flex-col ">
    <img src={image2} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md' />

  </div> 
  <div className="carousel-item flex flex-col" >

    <img src={image3} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
    
  </div> 
  <div className="carousel-item flex flex-col">
    <img src={image4} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>

  </div> 
  <div className="carousel-item flex flex-col">
 
    <img src={image1} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
   
  </div> 
  <div className="carousel-item flex flex-col">
    <img src={image5} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
   
  </div> 
  <div className="carousel-item flex flex-col">
 
    <img src={image6} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
    
  </div> 
  <div className="carousel-item flex flex-col">
    <img src={image7} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>

  </div>
  <div className="carousel-item flex flex-col">

    <img src={image10} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
    
  </div> 
  <div className="carousel-item flex flex-col">
    <img src={image11} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>

  </div>
  <div className="carousel-item flex flex-col">

    <img src={image9} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>
    
  </div> 
  <div className="carousel-item flex flex-col">
    <img src={image8} alt="Burger" className='w-36 h-36 p-4 m-8 shadow-2xl rounded-md'/>

  </div>
  
</div>
    </div>
  )
}
)
export default Technologies
