import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-[700px] bg-gradient-to-r from-[#6f42c1] via-[#830343] to-[#6f42c1] text-white py-16">
      <div className="container mx-auto text-center">

        <div className=" hero-content flex-col lg:flex-row-reverse w-full justify-center items-center mt-20">
          
          <div className='flex justify-end w-1/2'>
          <img src="https://i.ibb.co/C92q4TZ/80676294-1034651610212241-1003760245354266624-n-removebg-preview.png" className="max-w-sm rounded-full shadow-2xl" alt="Hero" />
            </div>
         
          <div className='text-center lg:text-left '> 
            <h1 className="text-5xl font-bold">Greetings,</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-gradient-to-r from-[#6f42c1]  to-[#830343] text-white">Get Started</button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HeroSection;
