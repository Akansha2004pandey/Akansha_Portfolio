import React, { forwardRef } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { motion } from 'framer-motion';

// Importing images
import image1 from "../images/icecream.webp";
import image2 from "../images/money.webp";
import image3 from "../images/Chatapp.png";
import image4 from "../images/foodie.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.png";
const Projects = forwardRef((props, ref) => {
  // Array of project data
  const projects = [
    {
      id: 1,
      image: image1,
      title: "Icecream-kiosk",
      description: "Developed a full-stack ice cream kiosk application using React for the front end and Node.js/Express for the back end. Implemented features for selecting flavors. Integrated a payment gateway and order tracking system, and ensured a responsive, user-friendly design.",
      githubLink: "https://github.com/Akansha2004pandey/icecream-station",
    },
    {
      id: 2,
      image: image2,
      title: "Money Management",
      description: "Developed a full-stack money management app using React for the front end and Node.js/Express for the back end. Implemented user authentication, expense tracking, and budgeting tools. Integrated MongoDB for data storage and ensured a responsive, user-friendly design.",
      githubLink: "https://github.com/Akansha2004pandey",
    },
    {
      id: 3,
      image: image3,
      title: "Real-time chat app",
      description: "Developed a real-time chat application using React for the front end and Node.js/Express with Socket.io for the back end. Implemented user authentication, real-time messaging, and chat room features. Ensured responsive design for optimal user experience across devices.",
      githubLink: "https://github.com/Akansha2004pandey/ChatAPP",
    },
    {
      id: 4,
      image: image4,
      title: "Food Ordering App",
      description: "Developed a small food ordering UI using React. Created intuitive navigation, implemented add-to-cart and checkout functionalities, incorporated user accounts for login and order tracking, and ensured a responsive, visually appealing design.",
      githubLink: "https://github.com/Akansha2004pandey/foodie1",
    },
    {
      id: 5,
      image: image5,
      title: "GenixAi Ai SaaS APP",
      description: "Genix AI is a comprehensive AI-driven SaaS application built using Next.js, Prisma as ORM, and MongoDB as the database. It integrates cutting-edge AI technologies and services such as Gemini API , hugging face API , Eleven Labs API .",
      githubLink: "https://github.com/Akansha2004pandey/genixAI",
    },{
      
        id: 6,
        image: image6,
        title: "WhisperBox",
        description: "Whisper Box is a web application that allows users to send anonymous messages to other users. Built with Next.js, ShadCN UI, and a combination of NextAuth for authentication and custom authentication for user sign-up, Whisper Box provides a seamless and secure messaging platform. The app also utilizes React Hook Form for managing form inputs.",
        githubLink: "https://github.com/Akansha2004pandey/WhisperBox",
      
    }
  ];

  return (
    <>
      <div id="projects" ref={ref} className='font-bold text-4xl py-20 text-gray-900 text-center'><i>Projects</i></div>
      <div className="flex flex-wrap justify-center">
        {/* Mapping through projects array */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='p-5 m-2 bg-[#d5fffe] flex flex-col justify-between rounded-lg shadow-lg'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: project.id * 0.1, duration: 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={project.image} alt={project.title} className="sm:w-[360px] w-[260px] h-[400px] rounded-lg mb-4" />
            <div>
              <div className='font-semibold text-xl py-3'>{project.title}</div>
              <div className='sm:w-[360px] w-[260px]  text-gray-700'>{project.description}</div>
            </div>
            <a href={project.githubLink} className='mt-4 text-2xl text-gray-900 hover:text-gray-700'>
              <IoLogoGithub />
            </a>
          </motion.div>
        ))}
      </div>
      <div className='h-[200px] flex justify-center items-center'>
        <a href="https://github.com/Akansha2004pandey" className='w-18 py-2 px-3 rounded-md text-white text-xl font-semibold bg-gray-900 my-20'>View more</a>
      </div>
    </>
  );
});

export default Projects;
