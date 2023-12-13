import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const TopService = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        <div className="card h-40 bg-base-100 border border-solid border-gray-300 hover:border-[#6f42c1] shadow-xl relative overflow-hidden" data-aos="fade-up">
          <figure>
            <img src="https://i.ibb.co/4S1rHbt/lautaro-andreani-xk-Baqlcqeb4-unsplash.jpg" alt="MERN" className="rounded-t-md object-cover w-full h-full" />
          </figure>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white transition duration-300 opacity-0 hover:opacity-100">
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">MERN Stack</h2>
              <p className="text-gray-200">Build robust and scalable web applications with MongoDB, Express.js, React, and Node.js.</p>
            </div>
          </div>
        </div>

        {/* Repeat similar changes for other cards */}

        {/* Card 2 */}
        <div className="card h-40 bg-base-100 border border-solid border-gray-300 hover:border-[#6f42c1] shadow-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          {/* Image */}
          <figure>
            <img src="https://i.ibb.co/qDFQM0J/moritz-mentges-5-Ml-BMYDs-GBY-unsplash.jpg" alt="Wordpress" className="rounded-t-md object-cover w-full h-full" />
          </figure>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white transition duration-300 opacity-0 hover:opacity-100">
            {/* Card Body */}
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">Wordpress</h2>
              <p className="text-gray-200">Create stunning and customizable websites using the versatile Wordpress platform.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card h-40 bg-base-100 border border-solid border-gray-300 hover:border-[#6f42c1] shadow-xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          {/* Image */}
          <figure>
            <img src="https://i.ibb.co/bXP5wdD/greg-rakozy-vw3-Ahg4x1t-Y-unsplash.jpg" alt="FrontEnd" className="rounded-t-md object-cover w-full h-full" />
          </figure>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white transition duration-300 opacity-0 hover:opacity-100">
            {/* Card Body */}
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">Frontend Development</h2>
              <p className="text-gray-200">Craft engaging and responsive user interfaces using the latest frontend technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopService;
