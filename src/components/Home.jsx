import React, { useRef } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Technologies from './Technologies';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './footer';
import SideBar from './SideBar';

const Home = () => {
  const homeref = useRef(null);
  const projectsref = useRef(null);
  const aboutref = useRef(null);
  const contactref = useRef(null);

  const handleScrollToSection = (ref) => {
    console.log(ref);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      console.log('scrolling to section');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden sm:block fixed top-0 left-0 bottom-0 w-1/4 h-screen bg-gray-800">
        <SideBar  handleScrollToSection={handleScrollToSection}
          homeref={homeref}
          aboutref={aboutref}
          projectsref={projectsref}
          contactref={contactref} />
      </div>

      {/* Main content */}
      <div className="sm:absolute sm:right-0 sm:right-0 sm:w-3/4">
        <Navbar
          handleScrollToSection={handleScrollToSection}
          homeref={homeref}
          aboutref={aboutref}
          projectsref={projectsref}
          contactref={contactref}
        />
        <Body ref={homeref} />
        <About ref={aboutref} />
        <Projects ref={projectsref} />
        <Technologies ref={projectsref} />
        <Contact ref={contactref} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
