import React, { useEffect, useState } from 'react';

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '', 
  });

  const [status, setStatus] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear message field
      } else {
        setStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong, please try again.');
    }
  };

  return (
    <>
     <div className='bg-black h-4 mt-20'>
           
          </div>
          <div className='text-center text-gray-900 font-bold text-4xl my-10 gap-3 flex justify-center items-center'>
            <div><i>Contact Me</i></div>
            </div> 
      <div id="contact" ref={ref} className="flex justify-center py-10">
        <div className="w-3/4 min-w-[300px] bg-white p-6 border border-gray-300 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-900 to-gray-500 font-bold text-white py-2 rounded"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-500">{status}</p>
          )}
        </div>
      </div>
    </>
  );
});

export default Contact;
