import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContactMe = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gjbcpsr', 'template_ednxyca', form.current, 'qPZX1bjYVv3Cfre6u')
      .then((result) => {
          console.log(result.text);

          Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Your email has been sent successfully!',
          });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'Error',
            title: 'Something went Wrong!',
            text: 'Your email has been not Sent!',
          });
      });
  };
  return (
    <section id='contactsection'>
      <div className="container mx-auto my-20 bg-gray-900 p-8 rounded-md shadow-md grid lg:grid-cols-2 gap-8 px-8 items-center justify-center">
        {/* Form */}
        <div className=" pr-8">
          <div className='grid justify-center items-center my-6'>
            <div className="text-4xl font-bold text-[#6f42c1] font-mono">Contact me</div>
            <div className="divider divider-info text-[#6f42c1]">-/-</div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
            
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#6f42c1]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
               
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#6f42c1]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
               
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#6f42c1]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6f42c1] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-[#4d2882]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="">
          <img
            src="https://i.ibb.co/fQ8nhKK/volodymyr-hryshchenko-V5vq-WC9gy-EU-unsplash.jpg" // Replace with your actual image source
            alt="Contact Me"
            className="rounded-md"
          />
          {/* Additional Info */}
          <div className="mt-4 text-white">
            <p className="text-lg">Contact Information: </p>
            <p className="text-sm">Email: abirhossain2084@gmail.com</p>
            <p className="text-sm">Phone: +8801840045296</p>
            <p className="text-lg mt-4">Location:</p>
            <p className="text-sm">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
