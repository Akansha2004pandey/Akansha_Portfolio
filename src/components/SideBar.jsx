import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { MdContactPage } from "react-icons/md";


const SideBar = ({ handleScrollToSection, homeref, aboutref, projectsref, contactref }) => {
  const show = [{text:"Home",icon:<IoHome className="text-xl text-white" />, move:homeref, href:"#"},
     {text:"About",icon:<FcAbout className="text-xl text-white" />, move:aboutref,href:"#about"}, 
     {text:"Projects",icon:<GrProjects className="text-xl text-white" />,move:projectsref,href:"#projects"},
      {text:"Contact",icon:<MdContactPage className="text-xl text-white" />,move:contactref,href:"#contact"}]
  return (
    <div>
      <div className="flex flex-col justify-end h-screen">
        <div className='flex flex-col w-full mb-4'>
          {show.map((nav) => {
            return (
              <a href={nav?.href} onClick={() => { handleScrollToSection(nav?.move);  }}>
              <div
                key={nav}
                className="text-[#a1e2e9] font-semibold text-base flex justify-center items-center gap-4 py-3 mx-5 text-center hover:bg-[#b9b6b628] rounded-md hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              > 
                {nav?.icon}
                {nav?.text}
              </div>
              </a>
            )
          })}
          <div className='bg-[#0d0d0d] rounded-md my-3 flex justify-center mx-3 py-2'>
            <a href="https://github.com/Akansha2004pandey">
              <FaGithub className='text-white w-8 h-8 hover:text-blue-300 mx-3 bg-black rounded-md transition-all duration-300 ease-in-out hover:scale-110' />
            </a>
          </div>
          <div className='bg-[#e99e3b] rounded-md mb-3 flex justify-center mx-3 py-2'>
            <a href="https://leetcode.com/u/Akansha_Pandey/">
              <TbBrandLeetcode className='text-white w-8 h-8 hover:text-blue-300 mx-3 bg-[#e99e3b] rounded-md transition-all duration-300 ease-in-out hover:scale-110' />
            </a>
          </div>
          <div className='bg-[#3b77ee] rounded-md mb-3 flex justify-center mx-3 py-2'>
            <a href="https://www.linkedin.com/in/akansha-pandey-aa5aa4250/">
              <CiLinkedin className='text-white w-8 h-8 hover:text-blue-300 mx-3 bg-blue-500 rounded-md transition-all duration-300 ease-in-out hover:scale-110' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
