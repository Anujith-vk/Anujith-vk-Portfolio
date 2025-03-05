import React from "react";
import { motion } from "framer-motion";
import { skills } from "../Assets/Skills/skills"; 
import { bottomfadein, findme, leftfadein} from "../animation";

const InfiniteScroll = ({ direction, reverse }) => {
  const skillsList = reverse ? [...skills].reverse() : skills;
  return (
    <div className="relative tab:max-w-[330px]  tab:w-full w-[480px] overflow-hidden">
      <motion.div
        className="flex gap-6 min-w-max "
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration:45,  ease: "linear" }}>
        {[...skillsList].map((skill, index) => (
          <div key={index} className="flex items-center gap-2 p-2 border-[2px] border-[#74C0FC] rounded-lg min-w-[120px]">
            <img src={skill.image} alt={skill.name} className="w-[30px] h-[30px] object-contain" />
            <p className="text-[14px] font-bigstyle">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
const handleDownload = () => {
  const resumeUrl = "/Anujith_vk_Full_Stack_Resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Anujith_vk_Full_Stack_Resume.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Section_two = () => {
  return (
    <div className="text-white font-bold mx-2 py-4">
      <h1 className="text-center pt-3 md:pt-0 text-[30px]">ABOUT ME</h1>
      <div className="flex items-center justify-center md:pt-1 tab:pt-1 pt-10 gap-6  sm:gap-2 flex-wrap">
        <motion.div variants={leftfadein(1)}  initial='hidden' whileInView='visible' className="flex tab:p-5   tab:max-w-full justify-center items-center flex-col gap-4  max-w-[500px] border-[2px] border-[#9595de] p-[20px]  sm:p-[5px] sm:px-6 rounded-md">
          <p className="font-subhead text-[23px]">What I Am</p>
          <p className="text-justify font-bigstyle text-[18px]">
            I am a passionate and detail-oriented Full Stack Developer specializing in the MERN stack.
            I thrive on solving complex problems and creating user-friendly digital experiences. With
            expertise in React.js, Node.js, and MongoDB, I build scalable applications that drive impact.
            My mission is to continuously learn, innovate, and contribute to the tech industry. Whether
            it's frontend design or backend development, I am committed to writing clean, efficient, and
            high-quality code.
          </p>
        </motion.div>
        <motion.div variants={findme(1)} initial='hidden' whileInView='visible' className="flex z-1  tab:py-1 justify-center items-center tab:max-w-full flex-col gap-4  max-w-[500px] sm:w-[320px] border-[2px] md:p-5  border-[#9595de] p-[40px] sm:px-2 sm:p-0 rounded-md">
          <p className="font-subhead text-[23px] sm:text-[18px]">My Skills</p>
          <p className="font-bigstyle text-justify text-[16px] sm:text-[12px] ">Here are the technologies and tools I work with! Continuously learning and evolving to build better solutions.</p>
          <InfiniteScroll direction="left" reverse={false} />
          <InfiniteScroll direction="right" reverse={true} />
        </motion.div>
      </div>
<<<<<<< HEAD
      <motion.div variants={leftfadein(1.5)} initial='hidden' whileInView='visible' className="border-[2px] mx-auto flex flex-col gap-2 items-center border-[#9595de] max-w-[500px]  text-center  p-3 rounded-md mt-6">
=======
      <motion.div variants={bottomfadein(1)} initial='hidden' whileInView='visible' className="border-[2px] mx-auto flex flex-col gap-2 items-center border-[#9595de] max-w-[500px]  text-center  p-3 rounded-md mt-6">
>>>>>>> 376ce7706841c8fb0ac484c9e3aaedaff687cc4a
      <p className="font-subhead text-[20px]">Want to Know More</p>
      <p className="font-bigstyle text-[14px]">Interested in learning more about me? Download my resume below to explore my skills and experience.</p>
      <motion.button
      onClick={handleDownload}
    className="bg-blue-400 p-3 rounded-full w-[200px] text-white"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
  >
    Download Resume
  </motion.button></motion.div>
    </div>
  );
};

export default Section_two;
