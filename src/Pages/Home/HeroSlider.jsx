import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleDownloadResume = async () => {
    // Use the direct download link by changing the "/view" to "/export?format=pdf"
    const url = 'https://drive.google.com/uc?export=download&id=1Vxh2IsLiEJKq8iSiMXWDbjiM7t5pYLn_';

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a link and trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Abir_Hossain_Resume.pdf'; // Replace with your desired file name
      link.click();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };



  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // Start the animation automatically when the component mounts
    startAnimation();
  }, []);
  // Framer Motion animation controls
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      y: [-10, 0, -10], // Bouncing animation
      transition: { repeat: Infinity, duration: 5, ease: 'easeIn' },
    });
  };


  return (
    <div className="h-[700px] bg-gradient-to-r from-[#2c096b] via-[#33041b] to-[#320e75] bg-black text-white py-16">
      <div className="container mx-auto text-center">

        <div className=" hero-content grid lg:grid-cols-2   w-full justify-center items-center mt-8 lg:mt-20">

          <motion.div data-aos="fade-right" className="flex justify-center">
            <div className='text-center lg:text-left'>
              <h1 className="text-5xl font-bold">Greetings,I'm</h1>



              <div>
                <h4 className="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4"> 
                  <TypeAnimation
                    sequence={[
                      'ABIR',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Website Designer',
                      1000,
                      'Web Developer',
                      1000,
                      'Wordpress Designer',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="typewrite text-[#6f42c1]"
                    repeat={Infinity}
                  />
                  <span className="typewrite text-amber-500" data-period="2000" data-type='[ "ABIR", "Website Designer", "Web Developer", "Wordpress Designer" ]'> <span className="wrap"></span> </span></h4>
                <p className="py-6">
                  As a Front-End Developer, I create immersive and user-friendly web experiences that captivate audiences. My passion for clean and efficient code drives me to deliver exceptional results. Let's turn your ideas into digital reality!
                </p>
                <div className="mt-6">
                  <button className="btn bg-gradient-to-r from-[#6f42c1]  to-[#830343] text-white">Get Started</button>

                </div>
              </div>

            </div>

          </motion.div>




          <div className='flex justify-center lg:justify-end '>
            <motion.div data-aos="fade-left" className="flex justify-center">

              <div className="container mx-auto my-20">
                <div className="text-4xl font-bold text-White mb-6">Connect with Me</div>

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



                <motion.button
                  onClick={handleDownloadResume}
                  className="mt-8 bg-[#6f42c1] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-[#4d2882]"
                  animate={controls}
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </motion.button>



              </div>
            </motion.div>
          </div>


        </div>


      </div>
    </div>
  );
};

export default HeroSection;
