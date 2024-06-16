import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ handleScrollToSection, homeref, aboutref, projectsref, contactref }) => {
  return (
    <>
    <div className='flex justify-between  items-center shadow-2xl p-8 bg-gradient-to-r from-black  to-gray-900'>
      <div className='font-bold text-2xl px-3 text-white'>Akansha Pandey</div>
         <ul className='flex px-3 items-center text-white long'>
         <li className='px-3 font-semibold'><a href="#" onClick={() => handleScrollToSection(homeref)}>Home</a></li>
          <li className='px-3 font-semibold'><a href="#about" onClick={() => handleScrollToSection(aboutref)}>About</a></li>
          <li className='px-3 font-semibold'><a href="#projects" onClick={() => handleScrollToSection(projectsref)}>Projects</a></li>
          <li className='px-3 font-semibold'><a href="#contact" onClick={() => handleScrollToSection(contactref)}>Contact</a></li>
           
         </ul>
         <details className="dropdown toggler">
        <summary className="m-20 btn text-2xl"><GiHamburgerMenu /></summary>
        <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a href="#" onClick={() => handleScrollToSection(homeref)}>Home</a></li>
          <li><a href="#about" onClick={() => handleScrollToSection(aboutref)}>About</a></li>
          <li><a href="#projects" onClick={() => handleScrollToSection(projectsref)}>Projects</a></li>
          <li><a href="#contact" onClick={() => handleScrollToSection(contactref)}>Contact</a></li>
        </ul>
      </details>
    </div>
    
    
    </>
  )
}

export default Navbar
