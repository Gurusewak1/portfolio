import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';

function UpdatedProjects() {
  const heroImages = [
    {

      image: '/images/slider3.png',
    },
    {
      image: '/images/slider6.png',
     
    },
    {
      image: '/images/slider7.png',

     
    },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',

      image: '/images/slider4.png',
      link: 'http://localhost:3000/home',
      github: 'https://github.com/Gurusewak1/portfolio.git',

    },
    {
      title: 'E-commerce Store',
      description: 'A fully functional e-commerce store with product listings and a cart.',

      image: '/images/slider7.png',
      link: 'https://myecommercestore.com',
      github: 'https://github.com/Gurusewak1/Project_GymGuru.git',


    },
    {
      title: 'Blog Website',
      description: 'A simple blog website built with Next.js and a headless CMS.',

      image: '/images/slider5.png',
      link: 'https://food-blog-navy.vercel.app/',
      github: 'https://github.com/Gurusewak1/Food-blog.git',

      

    },
  ];

  return (
    <>
      <Navbar />

      {/* Updated Swiper with better height adjustments */}
      <div className="mt-24">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="carousel min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]" // Flexible height for different screen sizes
        >
          {heroImages.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full"
              />
              {slide.title && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6 bg-black bg-opacity-60 rounded-lg">
                  <h1 className="text-4xl font-bold">{slide.title}</h1>
                  <p className="text-xl">{slide.subtitle}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SocialLinks />

      {/* Project section */}
      <div className="py-12">
        <h2 className="text-4xl text-center font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {projects.map((project, index) => (
            <div key={index} className="card image-full relative transition duration-500 hover:bg-opacity-90">
              <figure className="h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="card-title text-2xl text-white">{project.title}</h3>
                <p className="text-white text-center">{project.description}</p>
                <div className="card-actions mt-4">
                  <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UpdatedProjects;
