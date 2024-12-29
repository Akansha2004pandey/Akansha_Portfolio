import React, { forwardRef } from 'react';
import image1 from "../images/bootstrap.png";
import image2 from "../images/express.png";
import image3 from "../images/html.png";
import image4 from "../images/js.png";
import image5 from "../images/css.svg";
import image6 from "../images/react.png";
import image7 from "../images/tailwind.png";
import image8 from "../images/mongo.png";
import image9 from "../images/postgre.png";
import image10 from "../images/redux.png";
import image11 from "../images/daisyui.svg";
import image12 from "../images/cplus.png";
import image13 from "../images/git.png";
import { GrTechnology } from "react-icons/gr";

const Technologies = forwardRef((props, ref) => {
  const techImages = [
    { src: image12, alt: "C++" },
    { src: image13, alt: "Git" },
    { src: image2, alt: "Express" },
    { src: image3, alt: "HTML" },
    { src: image4, alt: "JavaScript" },
    { src: image1, alt: "Bootstrap" },
    { src: image5, alt: "CSS" },
    { src: image6, alt: "React" },
    { src: image7, alt: "Tailwind CSS" },
    { src: image10, alt: "Redux" },
    { src: image11, alt: "DaisyUI" },
    { src: image9, alt: "PostgreSQL" },
    { src: image8, alt: "MongoDB" },
  ];

  return (
    <div ref={ref}>
      <div className='text-3xl font-semibold text-white px-3 py-3 flex justify-center bg-gradient-to-r from-black to-gray-800'>
        <div className='px-4'>Techstack</div> <GrTechnology />
      </div>

      <div className="flex py-8 flex-wrap justify-center gap-12 px-5">
        {techImages.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tech.src}
              alt={tech.alt}
              className='w-40 h-40 p-4 shadow-2xl rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Technologies;
