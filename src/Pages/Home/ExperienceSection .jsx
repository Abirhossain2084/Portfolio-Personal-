import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto bg-gray-900 rounded-lg p-8 text-gray-100 my-20">
      <div className="container mx-auto text-center">

        <div className='grid justify-center items-center my-6'>
          <div className="text-4xl font-bold text-[#6f42c1] font-mono">Experience</div>
          <div className="divider divider-info text-[#6f42c1]">-/-</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up" className="text-left">
            <h3 className="text-3xl font-bold mb-4 text-[#830343]">Frontend Developer Journey</h3>
            <p className="text-gray-200 font-mono">
              As a frontend developer, I started my journey by completing various personal projects using the MERN stack (MongoDB, Express.js, React, Node.js). These projects allowed me to strengthen my skills in building interactive and responsive user interfaces. I focused on creating seamless user experiences and optimizing performance.
              </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="text-left">
            <h3 className="text-3xl font-bold mb-4 text-[#830343]">WordPress Development</h3>
            <p className="text-gray-200 font-mono">
              Additionally, I had the opportunity to collaborate with clients outside of online marketplaces, working as a WordPress developer. In this role, I developed and customized WordPress websites to meet the unique requirements of clients. This experience enhanced my ability to create versatile and visually appealing websites using the WordPress platform.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceSection;
