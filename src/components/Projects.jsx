import React from 'react'
import image1 from "../images/icecream.webp"
import image2 from "../images/money.webp"
import image3 from "../images/Chatapp.png"
import image4 from "../images/foodie.jpg"
import { IoLogoGithub } from "react-icons/io5";
import { useRef ,forwardRef} from 'react'
const Projects = forwardRef((props,ref) => {
 
 
  return (
    <>
    <div id="projects" ref={ref} className='font-bold text-3xl  py-20 text-black text-center'>Projects</div>
    <div className="flex flex-wrap justify-center">
      <div className='p-5 m-2 bg-[#d5fffe] flex flex-col justify-between'>
        <img src={image1} alt="" className="w-[260px] h-[300px]"/>
        <div>
            
               <div className='font-semibold text-xl w-auto py-3 '>Icecream-kiosk</div>

            
            <div className='w-[260px]'>
            Developed a full-stack ice cream kiosk application using React for the front end and Node.js/Express for the back end. Implemented features for selecting flavors. Integrated a payment gateway and order tracking system, and ensured a responsive, user-friendly design.
            </div>
        </div>
        <a href="https://github.com/Akansha2004pandey/icecream-station"><IoLogoGithub /></a>
      </div>
      <div className='p-5 m-2  bg-[#d5fffe] flex flex-col justify-between'>
        <img src={image2} alt="" className="w-[260px] h-[300px] " />
        <div>
           <div className='font-semibold text-xl py-3'>Money Management</div>
           <div className='w-[260px]'>Developed a full-stack money management app using React for the front end and Node.js/Express for the back end. Implemented user authentication, expense tracking, and budgeting tools. Integrated MongoDB for data storage and ensured a responsive, user-friendly design.</div>

        </div>
        
        <a href="https://github.com/Akansha2004pandey" className=''><IoLogoGithub /></a>
      </div>
      <div className='p-5 m-2  bg-[#d5fffe] flex-flex-col justify-between'>
        <img src={image3} alt="" className="w-[260px] h-[300px]" />
        <div>
            <div className='font-semibold text-xl py-3'>Real time chat app</div>
            <div className='w-[260px]'>Developed a real-time chat application using React for the front end and Node.js/Express with Socket.io for the back end. Implemented user authentication, real-time messaging, and chat room features. Ensured responsive design for optimal user experience across devices.






</div>
        </div>
        <a href="https://github.com/Akansha2004pandey/ChatAPP"><IoLogoGithub /></a>
        
      </div>
      <div className='p-5 m-2  bg-[#d5fffe] flex flex-col justify-between'>
        <img src={image4} alt="" className="w-[260px] h-[300px]"/>
        <div>
            <div className='font-semibold text-xl py-3'>Food Ordering App</div>
            <div className='w-[260px]'>Developed a small food ordering UI using React. Created intuitive navigation, implemented add-to-cart and checkout functionalities, incorporated user accounts for login and order tracking, and ensured a responsive, visually appealing design.</div>
        </div>
        <a href="https://github.com/Akansha2004pandey/foodie1"><IoLogoGithub /></a>
      </div>
    </div>
    <div className='h-[200px] flex justify-center items-center'>
        <a href="https://github.com/Akansha2004pandey" className='w-18 py-2 px-3 rounded-md text-white text-xl font-semibold bg-gray-900 my-20'>view more</a>
    </div>
    </>
  )
})

export default Projects
