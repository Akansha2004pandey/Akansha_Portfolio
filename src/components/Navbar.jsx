import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

const NavBar = ({ handleScrollToSection, homeref, aboutref, projectsref, contactref }) => {
  const [isToggled, setIsToggled] = useState(false); // Manage menu state

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Slide-in animation for the navbar (full-page)
  const slideIn = {
    hidden: {
      x: '100%', // Initially off-screen
      opacity: 0,
      transition: { type: 'linear', stiffness: 300 },
    },
    visible: {
      x: 0, // Slide in
      opacity: 1,
      transition: { type: 'linear', stiffness: 300 },
    },
  };

  return (
    <>
      <div className="flex justify-between items-center shadow-2xl p-8 bg-gradient-to-r from-black to-gray-900">
        <div className="font-bold text-2xl px-3 text-white">Akansha Pandey</div>
        <ul className="flex px-3 items-center text-white hidden lg:flex">
          <li className="px-3 font-semibold">
            <a href="#" onClick={() => { handleScrollToSection(homeref); handleToggle(); }}>
              Home
            </a>
          </li>
          <li className="px-3 font-semibold">
            <a href="#about" onClick={() => { handleScrollToSection(aboutref); handleToggle(); }}>
              About
            </a>
          </li>
          <li className="px-3 font-semibold">
            <a href="#projects" onClick={() => { handleScrollToSection(projectsref); handleToggle(); }}>
              Projects
            </a>
          </li>
          <li className="px-3 font-semibold">
            <a href="#contact" onClick={() => { handleScrollToSection(contactref); handleToggle(); }}>
              Contact
            </a>
          </li>
        </ul>
        {/* Hamburger Menu Button for mobile */}
        <button onClick={handleToggle} className="lg:hidden text-2xl text-white z-50">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Full-page Slide-in Navbar */}
      <motion.div
        className="fixed top-0 right-0 w-3/4 bg-gray-900 text-white p-8 h-full z-50"
        initial="hidden"
        animate={isToggled ? 'visible' : 'hidden'}
        variants={slideIn}
      >
        <ul>
          <li className="flex justify-end">
            <button onClick={handleToggle} className="lg:hidden text-2xl text-white z-50">
              <GiHamburgerMenu />
            </button>
          </li>
          <li>
            <a
              href="#"
              onClick={() => { handleScrollToSection(homeref); handleToggle(); }}
              className="block py-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => { handleScrollToSection(aboutref); handleToggle(); }}
              className="block py-4"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => { handleScrollToSection(projectsref); handleToggle(); }}
              className="block py-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => { handleScrollToSection(contactref); handleToggle(); }}
              className="block py-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default NavBar;
