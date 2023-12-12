import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';





import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';



const AboutMeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleDownloadResume = () => {
    // Implement the logic to download your resume as a PDF here
    // You can use a library like html2pdf.js or any other suitable library for PDF generation
  };
  return (
    <div className="container mx-auto my-20 bg-gray-100 rounded-lg p-4">
      <div className="container mx-auto text-center">


        <div className='grid justify-center items-center my-6'>

          <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >About me</div>
          <div className="divider divider-info text-[#6f42c1] ">-/-</div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            data-aos="fade-right"
            className="text-left"
          >
            <h3 className="text-4xl font-bold mb-4 text-[#830343]">Who Am I?</h3>
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
            {/* <img
              src="https://i.ibb.co/C92q4TZ/80676294-1034651610212241-1003760245354266624-n-removebg-preview.png" // Replace with your actual image source
              alt="Profile"
              className="rounded-full  bg-gradient-to-r from-[#6f42c1] via-[#830343] to-[#6f42c1]"
            /> */}

            <div className="container mx-auto my-20">
              <div className="text-4xl font-bold text-[#830343] mb-6">Connect with Me</div>

              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-4">
                <a href="your_github_profile" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={40} color="#6f42c1" />
                </a>
                <a href="your_linkedin_profile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={40} color="#6f42c1" />
                </a>
                <a href="your_twitter_profile" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={40} color="#6f42c1" />
                </a>
              </div>

              {/* Download Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="mt-8 bg-[#6f42c1] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-[#4d2882]"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
