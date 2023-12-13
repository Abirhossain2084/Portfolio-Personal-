import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleDownloadResume = async () => {
    // Replace 'your-resume.pdf' with the actual file name you want
    const url = '/your-resume.pdf';

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a link and trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Abir Hossain.pdf';
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
    <div className="h-[700px] bg-gradient-to-r from-[#6f42c1] via-[#830343] to-[#6f42c1] text-white py-16">
      <div className="container mx-auto text-center">

        <div className=" hero-content grid lg:grid-cols-2   w-full justify-center items-center lg:mt-20">

          <motion.div data-aos="fade-right" className="flex justify-center">
            <div className='text-center lg:text-left'>
              <h1 className="text-5xl font-bold">Greetings,</h1>
              <p className="py-6">
                As a Front-End Developer, I create immersive and user-friendly web experiences that captivate audiences. My passion for clean and efficient code drives me to deliver exceptional results. Let's turn your ideas into digital reality!
              </p>
              <button className="btn bg-gradient-to-r from-[#6f42c1]  to-[#830343] text-white">Get Started</button>
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
