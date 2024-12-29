import React from 'react'
import Typed from 'typed.js';
import { IoMdHand } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from 'react';
import { forwardRef } from 'react';
const Body = forwardRef((props,ref) => {
  
  const el = React.useRef(null);

  React.useEffect((ref) => {
    const typed = new Typed(el.current, {
      strings: ['A frontend developer', 'A backend developer','A full stack developer'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div id="home" ref={ref} className='flex w-full h-[500px]  items-center justify-center bg-gradient-to-r from-black  to-gray-900'>
      <div className='text-white flex flex-col mx-auto pl-10 '>
         <div className='font-semibold text-4xl pb-3 flex'><div className='pr-4'>Hi, </div> <IoMdHand /></div>
         <div className='font-semibold text-5xl pb-3 text-white'>I am <span className='text-yellow-500'>Akansha Pandey</span></div>
         <div className='font-semibold text-3xl pb-3 text-gray-400' ref={el}>A Frontend Developer</div>
         <div className='flex '>
         <a href="https://github.com/Akansha2004pandey" ><FaGithub className='text-white  w-8 h-8 hover:text-blue-30 mx-3 bg-black rounded-md  box-border'/></a>
         <a href="https://leetcode.com/u/Akansha_Pandey/"><TbBrandLeetcode className='text-white  w-8 h-8 hover:text-blue-30 mx-3 bg-yellow-600 rounded-md  box-border'/></a>
         <a href="https://www.linkedin.com/in/akansha-pandey-aa5aa4250/"><CiLinkedin className='text-white  w-8 h-8 hover:text-blue-30 mx-3 bg-blue-500 rounded-md  box-border'/></a>
      </div>
      </div>
     
    </div>
  )
})

export default Body
