import React from 'react'
import { useRef } from 'react';
import { forwardRef } from 'react';
const Contact =forwardRef((props,ref) => {
  
  
  return (
    <div id="contact" ref={ref} className='flex justify-center'>
        <h4 className='m-4 font-md text-xl py-2 mb-10 px-10 border-[2px] border-gray-200 text-gray-500 rounded-lg'>akanshaoptimist@gmail.com</h4>
    </div>

  )
}
)
export default Contact
