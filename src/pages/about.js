import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaPhp,
  FaGem,
  FaBriefcase,
  FaGraduationCap,
} from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiRubyonrails } from 'react-icons/si';

function AboutPage() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-600" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'PHP', icon: <FaPhp className="text-purple-500" /> },
    { name: 'Ruby', icon: <FaGem className="text-red-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
    { name: 'MySQL', icon: <SiMysql className="text-indigo-500" /> },
    { name: 'Ruby on Rails', icon: <SiRubyonrails className="text-red-500" /> },
  ];

  const experiences = [
    {
      title: 'Full-Stack Web Development Student',
      icon: <FaGraduationCap className="text-pink-500 text-4xl" />,
      details: 'Currently studying full-stack web development at Red River College, gaining hands-on experience in web technologies and best practices.',
      years: 'Expected Graduation: 2025',
    },
    {
      title: 'Web Developer Intern - ACE Project Space',
      icon: <FaBriefcase className="text-pink-500 text-4xl" />,
      details: 'Completed a four-month internship at ACE Project Space, working on real-world projects and collaborating with cross-functional teams.',
      years: '2024',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Spacer to create distance from the top */}
      <div className="h-24"></div>

      {/* About Section */}
      <div className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">About <span className="text-pink-500">Me</span></h1>
        <p className="text-xl mb-8 text-white">
          <span className="text-pink-500">Full-Stack Web Development Student</span> | Aspiring Developer | Lifelong Learner
        </p>
        <p className="text-white max-w-4xl mx-auto leading-relaxed">
          Hello! I’m <span className="text-pink-500 font-semibold">Gurusewak Singh</span>, a dedicated full-stack web development student at Red River College. I recently completed a four-month internship at <span className="text-pink-500 font-semibold">ACE Project Space</span>, where I collaborated on real-world projects, enhancing my skills in front-end and back-end technologies. I am passionate about creating seamless user experiences and continuously improving my development abilities.
        </p>
      </div>

      {/* Skills Section with Swiper */}
      <div className="py-12">
        <h2 className="text-4xl text-center font-bold mb-12 text-pink-500">My Skills</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="skills-carousel"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center p-6 shadow-md transition-transform transform hover:scale-105">
                <div className="text-6xl mb-4">{skill.icon}</div>
                <p className="text-lg font-semibold text-white">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Experience & Qualifications Section */}
      <div className="py-12">
        <h2 className="text-4xl text-center font-bold mb-12 text-pink-500">Experience & Qualifications</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-black bg-opacity-50 p-6 rounded-lg shadow-md text-white"
            >
              <div className="mb-4">{experience.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-400 mb-2">{experience.years}</p>
              <p className="text-gray-300 text-center">{experience.details}</p>
            </div>
          ))}
        </div>
      </div>

      <SocialLinks />
    </>
  );
}

export default AboutPage;
