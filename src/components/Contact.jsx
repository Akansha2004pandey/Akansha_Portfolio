import React from 'react';
import { CiMail } from 'react-icons/ci';

const Contact = React.forwardRef((props, ref) => {
  const email = 'akanshaoptimist@gmail.com';


  return (
    <>
      <div className="h-4 bg-gray-800 mt-20"></div>
      <div className="flex flex-col justify-center items-center font-semibold text-center text-white text-4xl py-20">
        
        <button onClick={(e) => {
          console.log(email)
          window.location.href =`mailto:${email}`
          e.preventDefault();
        }
          } ref={ref}>
          <CiMail
            className="text-white bg-gray-900 p-4 rounded-full text-6xl cursor-pointer hover:bg-gray-700"
          />
        </button>
        <p className="mt-4 text-lg text-gray-400">Send an email</p>
      </div>
    </>
  );
});

export default Contact;
