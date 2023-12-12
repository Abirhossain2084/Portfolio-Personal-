import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      name: 'OutingBD',
      description: 'Travel and Tourisom Website',
      image: 'https://i.ibb.co/qkhpzbS/Outing-BD-1.png',
    },
    {
      id: 2,
      name: 'People Pulse',
      description: 'Employee Managmment Systems',
      image: 'https://i.ibb.co/16pWk5J/Home.png',
    },
    {
      id: 3,
      name: 'M|I poullas',
      description: 'Darwin Painting & Decorative Contractors',
      image: 'https://i.ibb.co/khZMf8Y/Darwin-Painting-Services-Painters-Darwin-M-I-Poullas.png',
    },
    {
      id: 4,
      name: 'AutoPathfinders',
      description: 'Car Blog Website',
      image: 'https://i.ibb.co/0X81Hdv/Auto-Pathfinders.png',
    },
    {
      id: 5,
      name: 'SkyXDigital',
      description: 'Marketing Agency Website',
      image: 'https://i.ibb.co/khDRzcL/Digital-Marketing-Agency-Sky-X-Digital.png',
    },
    {
      id: 6,
      name: 'The Container House',
      description: 'House Building Company',
      image: 'https://i.ibb.co/1d6j0Bm/Explore-The-Container-House-Solutions-Dream-Container-Home.png',
    },
  ];

  const sliderSettings = {
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Autoplay speed in milliseconds (adjust as needed)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-20 ">
     
      <div className='grid justify-center items-center my-20' data-aos='fade-up'>
        <div className="text-4xl font-bold  text-[#6f42c1] font-mono" >Recent Projects</div>
        <div className="divider divider-info text-[#6f42c1] ">-/-</div>
      </div>

      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="text-center p-4 border rounded gap-2 bg-blue-50"> {/* Added padding */}
            <img src={project.image} alt={project.name} className="mx-auto mb-4 max-h-96 object-cover" /> {/* Added max height and object-cover */}
            <h3 className="text-2xl font-semibold text-[#830343]">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectPage;
