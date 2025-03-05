import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { findme, imageVariants, leftfadein, textVariants } from '../animation';
import image from '../Assets/image.png';

const roles = ["FULL STACK DEVELOPER", "MERN STACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"];

const Section_one = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const role = roles[index];
      setText((prevText) =>
        isDeleting
          ? prevText.slice(0, prevText.length - 1)
          : role.slice(0, prevText.length + 1)
      );
      if (!isDeleting && text === role) {
        setTimeout(() => setIsDeleting(true), 100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [isDeleting, text]);

  const HandleGit=()=>{
    
  }
  return (
    <div className="flex w-full h-full">
      <div className='flex gap-[100px] md:flex-col md:gap-2 sm:gap-1'>
        <div className="w-full h-full pt-[100px] md:pt-5">
          <p className="font-mono text-white text-[50px] font-semibold sm:text-[40px]">ANUJITH VK</p>
          <motion.p variants={textVariants} initial='hidden' whileInView="visible" className="text-white">
            I am a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-red-500">{text}</span>
          </motion.p>
          <motion.p variants={leftfadein(1)} initial="hidden" whileInView="visible" className='text-white max-w-[500px] text-[24px] md:text-[20px] pt-4 text-justify font-[Big]'>
            Welcome to my portfolio! Here, I showcase my expertise in technology, my projects, and my continuous learning journey. Let’s connect and innovate together!
          </motion.p>
          <motion.div variants={findme(1)} initial='hidden' whileInView='visible' className='max-w-[500px] mt-3 w-full flex flex-col justify-center'>
            <p className='text-center font-subhead text-[22px]  text-transparent bg-clip-text bg-gradient-to-r from-[#ff6347] to-[#00bfff] '>FIND ME ON</p>
            <div className=" flex gap-7 justify-center mt-2 ">
              <a href="https://github.com/Anujith-vk" target='_blank'>
              <FontAwesomeIcon icon={faGithub} spin style={{ color: "#ffffff", fontSize: "30px" }} />
              </a>
              <a href="https://www.linkedin.com/in/anujithvk" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} beat style={{ color: "#ffffff", fontSize: "30px" }} />
              </a>
              </div>
          </motion.div>
        </div>
        <div className='flex items-center w-full'>
          <motion.img variants={imageVariants} initial="hidden" whileInView="visible" src={image} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Section_one;
