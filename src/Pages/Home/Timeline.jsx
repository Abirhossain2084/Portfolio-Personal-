import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (

    <div className='container mx-auto my-20 '>
      
      <div className='grid justify-center items-center my-6' data-aos='fade-up'>
        <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >Educational Qualification</div>
        <div className="divider divider-info text-[#6f42c1] ">-/-</div>

      </div>

      <ul className="timeline timeline-snap-icon  b max-md:timeline-compact timeline-vertical">
      <li data-aos='fade-right'>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10 font-semibold">
            <time className="font-mono italic text-2xl text-[#830343]">2017-2019</time>
            <div className="text-2xl font-black text-[#830343]">Higher Secondary Certificate (HSC) </div>
            Giasuddin Islamic Model College(GIMC)
           </div>
          <hr className='bg-[#6f42c1]' />
        </li>
        <li data-aos='fade-left'>
        <hr className='bg-[#6f42c1]' />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10 font-semibold">
          <time className="font-mono italic text-2xl text-[#830343]">2020-2023</time>
            <div className="text-2xl font-black text-[#830343]">Bachelor of Science in Computer Science and Engineering</div>
            University of Information Technology & Sciences (UITS) </div>
            <hr className='bg-[#6f42c1]' />
        </li>
       


      </ul>
    </div>

  );
};

export default EducationTimeline;
