import { useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGit, FaSass, FaBootstrap, FaJs, FaMdb, FaWordpress } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { title: 'HTML5', icon: <FaHtml5 className='text-orange-500' />, level: 'Expert' },
    { title: 'CSS3', icon: <FaCss3 className='text-blue-600' />, level: 'Expert' },
    { title: 'Tailwind CSS', icon: <SiTailwindcss className='text-blue-500' />, level: 'Expert' },
    { title: 'JavaScript', icon: <FaJs className='bg-yellow-400' />, level: 'Intermediate' },
    { title: 'React', icon: <FaReact className='text-blue-300' />, level: 'Advanced' },
    { title: 'Node.js', icon: <FaNodeJs className='text-green-600' />, level: 'Intermediate' },
    { title: 'MongoDB', icon: <DiMongodb className='text-green-700' />, level: 'Intermediate' },
    { title: 'Express', icon: <SiExpress className='text-black' />, level: 'Intermediate' },
    { title: 'Wordpress', icon: <FaWordpress className='text-blue-400' />, level: 'Advanced' },
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






          <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >SkIllSET</div>
          <div className="divider divider-info text-[#6f42c1] ">-/-</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="flex items-center text-center bg-gradient-to-r from-[#2a0372] via-[#240313] to-[#320e75] text-white rounded-lg p-4 drop-shadow-2xl"
            >
              <h3 className="text-2xl font-semibold">{skill.title}</h3>
              <div className='' style={{ width: '50px', height: '80px', margin: 'auto', }}>
             <div className=''>
              <p className="text-5xl">{skill.icon}</p>
                <div className="text-lg font-semibold">
                  {skill.level}
                </div>
             </div>
              
              </div>
             
            </motion.div>
          ))}



        </div>
      </div>
    </div>
  );
};

export default SkillsSection;