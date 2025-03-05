import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLaptop, faSchool } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import port from '../Assets/port.png';
import nike from '../Assets/nike.png';
import blog from '../Assets/Screenshot 2025-03-04 191347.png';
import { bottomfadein, findme} from '../animation';

const Section_three = () => {
  const [selection, setSelection] = useState('Education');

  return (
    <div className='text-white font-bold'>
      <h1 className='text-center pt-3 md:pt-0 text-[30px]'>MY WORKS</h1>
      <div className='flex items-center justify-center pt-5 md:flex-col gap-5 px-2'>
        <motion.div variants={findme(0.5)} initial='hidden' whileInView='visible' whileHover='hover' className='max-w-[400px] w-full border-[2px] border-[#9595de] rounded-md flex flex-col items-center p-4'>
          <p className='text-center font-bigstyle text-[20px]'>Personal Portfolio</p>
          <img src={port} alt="portfolio" className='max-w-[400px] w-full' />
          <div className="mt-3 w-full px-4 ">
            <ul className="list-disc text-[16px] font-bigstyle text-[#b5afaf9d] pl-5">
              <li>Created a personal portfolio</li>
              <li>Showcases my personal details, skills, and a way to contact me</li>
              <li>Built using React, Tailwind CSS, and Framer Motion</li>
            </ul>
          </div>
        </motion.div>
         
        <motion.div variants={findme(0.7)} initial='hidden' whileInView='visible' whileHover='hover' className='max-w-[400px] w-full border-[2px] pb-0 border-[#9595de] rounded-md flex flex-col items-center p-1'>
          <p className='text-center font-bigstyle text-[20px]'>Nike-Clone</p>
          <img src={nike} alt="portfolio" className='max-w-[400px] w-full' />
          <div className="mt-3 w-full px-1">
            <ul className="list-disc text-[16px] font-bigstyle text-[#b5afaf9d] pl-5">
              <li>Developed a fully responsive Nike Clone website</li>
              <li>Implemented features such as Add-to-Cart, Product Purchase, Product Management, and User Authentication</li>
              <li>Successfully deployed on Render</li>
            </ul>
            <a href="https://nike-clone-1.onrender.com" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faEye} bounce className='ml-3 pt-2 w-7 h-6'></FontAwesomeIcon>
            </a>
          </div>
        </motion.div>

        <motion.div variants={findme(0.9)} initial='hidden' whileInView='visible' whileHover='hover' className='max-w-[400px] w-full border-[2px] border-[#9595de] rounded-md flex flex-col items-center p-1'>
          <p className='text-center font-bigstyle text-[20px]'>Blog Website</p>
          <img src={blog} alt="portfolio" className='max-w-[400px] w-full' />
          <div className="mt-3 w-full px-4">
            <ul className="list-disc text-[16px] font-bigstyle text-[#b5afaf9d] pl-2">
              <li>Developed a fully functional blog website.</li>
              <li>Implemented key features including blog creation, editing, user authentication, viewing, and deletion.</li>
              <li>Successfully deployed on Render.</li>
            </ul>
            <a href="https://blog-website-frontend-p34u.onrender.com" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faEye} bounce className=' pt-2 w-7 h-6'></FontAwesomeIcon>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div variants={bottomfadein(1)} initial='hidden' whileInView='visible' className='max-w-[1240px] py-5 mx-auto border-[2px] border-[#9595de] rounded-md mt-[25px] flex flex-col justify-center items-center'>
        <div className='flex  p-2 rounded-full border max-w-[300px] w-full text-center justify-center'>
          <p 
            onClick={() => setSelection('Education')} 
            className={`cursor-pointer w-[180px] rounded-full h-[30px] flex gap-2 justify-center items-center ${selection === 'Education' ? 'bg-[#9595de] text-black' : 'bg-transparent text-white'}`}>
            <FontAwesomeIcon icon={faSchool} beatFade></FontAwesomeIcon>
            Education
          </p>
          <p 
            onClick={() => setSelection('Experience')} 
            className={`cursor-pointer w-[180px] rounded-full h-[30px] flex gap-2 justify-center items-center ${selection === 'Experience' ? 'bg-[#9595de] text-black' : 'bg-transparent text-white'}`}>
            <FontAwesomeIcon icon={faLaptop} beatFade />
            Experience
          </p>
        </div>
{selection==='Education'?(
        <div className='p-4'>
            <motion.h1 variants={bottomfadein(0.4)} initial='hidden' whileInView='visible' className='font-bigstyle text-[#b5afaf9d]'>Bachelor of Technology (B.Tech) in Computer Science and Engineering</motion.h1>
            <motion.p variants={bottomfadein(0.5)} initial='hidden' whileInView='visible' className='font-bigstyle text-[17px] pb-2 pt-3 text-[#b5afaf9d]'>St. Thomas College of Engineering and Technology, Kannur</motion.p>
            <ul className="list-disc pl-4 text-[#b5afaf9d] font-bigstyle">
              <motion.li variants={bottomfadein(0.6)} initial='hidden' whileInView='visible'>2020-2024 Batch</motion.li>
              <motion.li variants={bottomfadein(0.7)} initial='hidden' whileInView='visible'>No Backlogs</motion.li>
            </ul>
        </div>
        ):(
        <div className='p-4'>
          <motion.h1 variants={bottomfadein(0.4)} initial='hidden'  whileInView='visible' className='font-bigstyle text-[#b5afaf9d]'>Mern Stack Developer</motion.h1>
            <motion.p variants={bottomfadein(0.5)} initial='hidden' whileInView='visible' className='font-bigstyle text-[#b5afaf9d] text-[17px] pb-2 pt-3'>Zoople Technology, kochi, kannur</motion.p>
            <ul className="list-disc text-[#b5afaf9d] pl-4 font-bigstyle">
              <motion.li variants={bottomfadein(0.6)} initial='hidden' whileInView='visible'>Internship</motion.li>
              <motion.li variants={bottomfadein(0.7)} initial='hidden' whileInView='visible'>July 2024 - November 2024</motion.li>
            </ul>
        </div>
      )}
      </motion.div>
    </div>
  );
}

export default Section_three;
