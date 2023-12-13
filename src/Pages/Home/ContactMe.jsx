import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to handle form submission (e.g., send an email, save to database)
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contactsection'>

      <div

        className="container mx-auto my-20 bg-gray-900 p-8 rounded-md shadow-md grid lg:grid-cols-2 gap-8 px-8 items-center justify-center">
        {/* Form */}
        <div className=" pr-8">
          <div className='grid justify-center items-center my-6'>

            <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >Contact me</div>
            <div className="divider divider-info text-[#6f42c1] ">-/-</div>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
        </div>
      </div>
    </section>

  );
};

export default ContactMe;
