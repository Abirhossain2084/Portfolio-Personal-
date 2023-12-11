
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGit, FaSass, FaBootstrap } from 'react-icons/fa';
import 'react-circular-progressbar/dist/styles.css';

const SkillsSection = () => {
  const skills = [
    { title: 'HTML5', icon: <FaHtml5 />, percentage: 90 },
    { title: 'CSS3', icon: <FaCss3 />, percentage: 85 },
    { title: 'React', icon: <FaReact />, percentage: 80 },
    { title: 'Node.js', icon: <FaNodeJs />, percentage: 75 },
    { title: 'Database', icon: <FaDatabase />, percentage: 70 },
    { title: 'Git', icon: <FaGit />, percentage: 75 },
    { title: 'Sass', icon: <FaSass />, percentage: 80 },
    { title: 'Bootstrap', icon: <FaBootstrap />, percentage: 85 },
  ];

  return (
    <div className="container mx-auto mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <p className='text-center'>Take a look of my skills</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center text-center bg-gradient-to-r from-[#6f42c1] via-[#830343] to-[#6f42c1] text-white rounded-lg">
              <h3 className="text-2xl font-semibold ">{skill.title}</h3>
              <div style={{ width: '50px', height: '80px', margin: 'auto' }}>
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
              <p className="text-5xl">
                {skill.icon}
              </p>
            </div>
          ))}
        </div>


<div className='grid gap-3 mt-20'>
  <div className='border-sky-100 border w-60 rounded-xl'>
    <progress className="progress progress-accent w-56 " value='50' max="100"></progress>
   
  </div>
        <progress className="progress progress-accent w-56 " value="10" max="100"></progress>
        <progress className="progress progress-accent w-56" value="40" max="100"></progress>
        <progress className="progress progress-accent w-56" value="70" max="100"></progress>
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
     
</div>
        </div>
    </div>
  );
};

export default SkillsSection;
