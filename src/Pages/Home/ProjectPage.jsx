import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-scroll';

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      name: 'OutingBD',
      description: 'Travel and Tourisom Website',
      image: 'https://i.ibb.co/YQVqSwJ/Outing-BD-22.png',
      livelink: 'https://outingbd-e0644.web.app/'
    },
    {
      id: 2,
      name: 'People Pulse',
      description: 'Employee Managmment Systems',
      image: 'https://i.ibb.co/17gJ2Hr/Home-5.png',
      livelink: 'https://people-pulse-63cf6.web.app/',
    },
    {
      id: 3,
      name: 'M|I poullas',
      description: 'Darwin Painting & Decorative Contractors',
      image: 'https://i.ibb.co/vXj4XHM/Explore-The-Container-House-Solutions-Dream-Container-Home-2.png',
      livelink: 'https://mipoullas.com.au/',
    },
    {
      id: 4,
      name: 'AutoPathfinders',
      description: 'Car Blog Website',
      image: 'https://i.ibb.co/4sKnDg6/Auto-Pathfinders-7.png',
      livelink: 'https://autopathfinders.web.app/',
    },
    {
      id: 5,
      name: 'SkyXDigital',
      description: 'Marketing Agency Website',
      image: 'https://i.ibb.co/qrNrT7H/Digital-Marketing-Agency-Sky-X-Digital-2.png',
      livelink: 'https://skyxdigital.com/',
    },
    {
      id: 6,
      name: 'The Container House',
      description: 'House Building Company',
      image: 'https://i.ibb.co/vXj4XHM/Explore-The-Container-House-Solutions-Dream-Container-Home-2.png',
      livelink: 'https://thecontainerhouse.com.au/'
    },
    {
      id: 7,
      name: 'CheapHolidayGlobal',
      description: 'Travel Agency',
      image: 'https://i.ibb.co/hWNtLHX/Home-Cheap-Holiday-Global-2.png',
      livelink: 'https://cheapholidayglobal.com/'
    },
    {
      id: 8,
      name: 'TaskLeaf',
      description: 'Task Managment System',
      image: 'https://i.ibb.co/SsmCDSd/Home-6.png',
      livelink: 'https://task-leaf.web.app/'
    },
  ];

  const sliderSettings = {
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Autoplay speed in milliseconds (adjust as needed)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto sm:w-full my-20">


      <div className='grid justify-center items-center my-20' data-aos='fade-up'>
        <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >Recent Projects</div>
        <div className="divider divider-info text-[#6f42c1] ">-/-</div>
      </div>

      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="text-center p-4  rounded bg-[#111827]">

            <img src={project.image} alt={project.name} className="mx-auto h-[200px] mb-4 md:h-[500px] w-full object-cover w-full" />
            <h3 className="text-2xl font-semibold text-[#830343]">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>

            <a href={project.livelink} target="_blank" rel="noopener noreferrer">
              <button className="btn bg-gradient-to-r from-[#6f42c1] to-[#830343] text-white">Live Link</button>
            </a>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectPage;
