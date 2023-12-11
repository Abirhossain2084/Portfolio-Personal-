import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const TopService = () => {
  return (
    <div className="container mx-auto -mt-10">
      <div className="flex justify-center items-center gap-6">
        <div className="card h-32 bg-base-100 shadow-xl image-full" data-aos="fade-up">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card h-32 bg-base-100 shadow-xl image-full" data-aos="fade-up" data-aos-delay="100">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card h-32 bg-base-100 shadow-xl image-full" data-aos="fade-up" data-aos-delay="200">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopService;
