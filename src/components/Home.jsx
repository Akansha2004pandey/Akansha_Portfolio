import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Technologies from './Technologies'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './footer'
import { useRef } from 'react'
const Home = () => {
  const homeref= useRef(null);
  const projectsref = useRef(null);
  const aboutref = useRef(null);
  const  contactref= useRef(null);
  const handleScrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar  handleScrollToSection={handleScrollToSection} 
        homeref={homeref} 
        aboutref={aboutref} 
        projectsref={projectsref} 
        contactref={contactref} />
   
      <Body ref={homeref}/>
      <About ref={aboutref}/>
      <Projects ref={projectsref}/>
      <Technologies ref={projectsref}/>
      <Contact ref={contactref}/>
      <Footer/>
    </div>
  )
}

export default Home
