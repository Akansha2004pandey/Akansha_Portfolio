import React from 'react';
import image1 from "../images/khalsa.avif";
import image2 from "../images/nsit.jpg";
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <>
      <div id="about" ref={ref}>
        <div className="font-bold text-center text-4xl py-20">
          <i>Education</i>
        </div>
        <div className="flex flex-wrap justify-center items-center education gap-10">
          {/* Khalsa Card */}
          <div className="card bg-base-100 shadow-xl mx-5 sm:w-96 w-3/4">
            <figure>
              <img src={image1} alt="School" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">SSK Khalsa Girls School</h2>
              <div className="flex justify-between">
                <div>12th Standard</div>
                <div><i>2020-2022</i></div>
              </div>
            </div>
          </div>

          {/* NSIT Card */}
          <div className="card bg-base-100 shadow-xl mx-5 sm:w-96 w-3/4 lg:mx-5">
            <figure>
              <img src={image2} alt="College" className="h-[305px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">NSIT Delhi</h2>
              <div className="flex justify-between">
                <div>Btech, CSE</div>
                <div><i>2022-Present</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 bg-black mt-20"></div>
    </>
  );
});

export default About;
