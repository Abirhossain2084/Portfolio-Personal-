import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMeSection = () => {
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
      transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
    });
  };

  return (
    <div className="container mx-auto my-20 bg-gray-900 rounded-lg p-4">
      <div className="container mx-auto text-center">
        <div className='grid justify-center items-center my-6'>
          <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >About me</div>
          <div className="divider divider-info text-[#6f42c1] ">-/-</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div data-aos="fade-right" className="text-left">
            <h3 className="text-4xl font-bold mb-4 text-[#830343]">Who Am I?</h3>
            <p className="text-gray-200- font-mono">
              Hi, I'm Abir, a dedicated and creative frontend developer with a passion for crafting engaging and user-friendly web applications. My journey into the world of programming began with a curiosity for creating seamless digital experiences. Over the years, I've honed my skills in building modern and intuitive interfaces that not only meet but exceed user expectations.

              I thrive on the challenge of turning design concepts into functional and aesthetically pleasing websites. My commitment to continuous learning drives me to stay updated with the latest frontend technologies and industry best practices. From responsive designs to interactive user interfaces, I enjoy bringing ideas to life through clean and efficient code.

              Let's collaborate and bring your vision to the web!
            </p>

          </motion.div>

          <motion.div
            data-aos="fade-left"
            className="text-left"
          >
            <div className='flex justify-center lg:justify-end '>
              <motion.img
                src="https://i.ibb.co/Hx77VW5/80676294-1034651610212241-1003760245354266624-n-removebg-preview.png"
                className="max-w-sm rounded-full shadow-2xl bg-gradient-to-r from-[#6f42c1] via-[#830343] to-[#6f42c1]"
                alt="Hero"
                animate={controls}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
