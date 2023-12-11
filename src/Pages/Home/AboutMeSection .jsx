import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactTyped from 'react-typed';

const AboutMeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto my-20">
      <div className="container mx-auto text-center">


        <div className='grid justify-center items-center my-6'>
          <ReactTyped
            strings={['About me',]}
            
            
            className="text-4xl font-bold  text-[#6f42c1] font-mono"  
          />
          <div className="divider divider-info text-[#6f42c1] ">-/-</div>
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            data-aos="fade-right"
            className="text-left"
          >
            <h3 className="text-4xl font-bold mb-4">Who Am I?</h3>
            <p className="text-gray-600 font-mono">
              Hi, I'm Abir, a passionate and creative software developer. I love to build
              web applications that are not only functional but also delightful to use.
              My journey in the world of programming started [mention your story].
              I'm dedicated to continuous learning and exploring new technologies.
            </p>
          </motion.div>

          <motion.div
            data-aos="fade-left"
            className="flex justify-center"
          >
            <img
              src="https://placekitten.com/300/300" // Replace with your actual image source
              alt="Profile"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
