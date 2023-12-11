import { useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGit, FaSass, FaBootstrap, FaJs, FaMdb, FaWordpress } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'react-typed';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { title: 'HTML5', icon: <FaHtml5 className='text-orange-500' />, percentage: 90 },
    { title: 'CSS3', icon: <FaCss3 className='text-blue-600' />, percentage: 85 },
    { title: 'Tailwind CSS', icon: <SiTailwindcss className='text-blue-500' />, percentage: 85 },
    { title: 'JavaScript', icon: <FaJs className='bg-yellow-400' />, percentage: 75 },
    { title: 'React', icon: <FaReact className='text-blue-300' />, percentage: 80 },
    { title: 'Node.js', icon: <FaNodeJs className='text-green-600' />, percentage: 75 },
    { title: 'MongoDB', icon: <DiMongodb className='text-green-700' />, percentage: 70 },
    { title: 'Express', icon: <SiExpress className='text-black' />, percentage: 70 },
    { title: 'Wordpress', icon: <FaWordpress className='text-blue-400' />, percentage: 70 },
 
  ];

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
          <Typed
            strings={['SKILLSET', 'My Skills', 'Expertise']}
            typeSpeed={80}
            backSpeed={40}
            loop
            className="text-4xl font-extrabold  text-[#6f42c1] font-mono"  
          />
          <div className="divider divider-info text-[#6f42c1] ">skills</div>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="flex items-center text-center bg-gradient-to-r from-[#6f42c1] via-[#830343] to-[#6f42c1] text-white rounded-lg p-4 drop-shadow-2xl"
            >
              <h3 className="text-2xl font-semibold">{skill.title}</h3>
              <div className='' style={{ width: '50px', height: '80px', margin: 'auto', }}>

                <CircularProgressbarWithChildren
                  value={skill.percentage}
                  strokeWidth={8}
                  styles={{
                    path: { stroke: 'white' },
                    trail: { stroke: 'green' },
                  }}
                >
                  <div className="text-lg font-semibold">
                    {`${skill.percentage}%`}
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <p className="text-5xl">{skill.icon}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;