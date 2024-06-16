import React from 'react'
import image1 from "../images/khalsa.avif"
import image2 from "../images/nsit.jpg"
import { useRef } from 'react'
import { forwardRef } from 'react'
const About = forwardRef((props,ref) => {
 
  
  return (
    <div id="about" ref={ref}>
        <div className='font-bold text-center text-4xl py-20'><i>Education</i></div>
    <div className="flex justify-center education">

      <div> <div className="card w-96 bg-base-100 shadow-xl mx-5">
  <figure><img src={image1} alt="School" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">SSK Khalsa Girls School</h2>

    <div className='flex justify-between'>
        <div>12th Standard</div>
        <div><i>2020-2022</i></div>
    </div>
    
  </div>
</div></div>
      
        
      <div className="card w-96 bg-base-100 shadow-xl mx-5">
  <figure><img src={image2} alt="college" className='h-[305px]' /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">NSIT Delhi</h2>
    <div className='flex justify-between'>
        <div>Btech, CSE</div>
        <div><i>2022-Present</i></div>
    </div>
    
  </div>
</div>
      </div>
      <div className='h-4 bg-black m-10'></div>
    </div>
    
  )
})

export default About
