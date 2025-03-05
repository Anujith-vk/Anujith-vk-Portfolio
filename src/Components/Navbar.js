import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { bottomBarAnimation, flipOnHover, middleBarAnimation, mobileitems, topBarAnimation } from "../animation";

const Navbar = () => {
  const menuItems = ["HOME", "ABOUT", "WORKS", "CONTACT"];
  const [sidenav, setsidenav] = useState(false);
  const isscrolling = useRef(false);
  const [active, setactive] = useState("HOME");

  useEffect(() => {
    const onScroll = () => {
      if (isscrolling.current) return;

      menuItems.forEach((section, index) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const scrollY = window.scrollY;
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          if (scrollY >= sectionTop - 50 - sectionHeight * 0.3 && scrollY < sectionTop + sectionHeight - 50) {
            setactive(section);
            HandleHighlight(index);
            HandleMobHighlight(index);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Handlenav = () => setsidenav(!sidenav);

  const Handlescroll = (id, index) => {
    isscrolling.current = true;
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 60;
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
    HandleHighlight(index);
    HandleMobHighlight(index);
    setTimeout(() => (isscrolling.current = false), 1000);
  };

  const HandleHighlight = (index) => {
    const highlight = document.getElementById("highlight");
    const items = document.querySelectorAll(".nav-item");
    if (highlight && items.length > 0) {
      const selectedItem = items[index];
      highlight.style.width = `${selectedItem.offsetWidth + 1}px`;
      highlight.style.left = `${selectedItem.offsetLeft}px`;
    }
  };

  useEffect(() => HandleHighlight(0), []);

  const HandleMobHighlight = (index) => {
    const highlight = document.getElementById("Mob-Highlight");
    if (highlight) highlight.style.top = `${index * 44}px`;
  };

  useEffect(() => {
    if (!sidenav) return;
    menuItems.forEach((section, index) => {
      if (section === active) HandleMobHighlight(index);
    });
  }, [sidenav]);

  return (
    <nav className="w-full bg-black h-[60px] px-5 flex items-center justify-between top-0  z-10 sticky shadow-md shadow-gray-800">
      <h2 className="text-white font-bold text-[20px]">ANUJITH VK</h2>

      {/* Desktop Navigation */}
      <div className="hidden nav:flex text-white border w-[300px] h-[45px] rounded-full flex justify-center items-center relative">
        <div className="h-[38px] bg-neutral-700 rounded-full z-0 absolute transition-all duration-300 ease-in-out" id="highlight"></div>
        <div className="w-full h-full flex items-center justify-around z-10">
          {menuItems.map((item, index) => (
            <motion.p
              key={index}
              className="nav-item cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#ff6347] to-[#00bfff] font-mono text-sm font-semibold text-center px-3"
              variants={flipOnHover}
              initial="initial"
              whileHover="whileHover"
              onClick={() => Handlescroll(item.toLowerCase(), index)}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="border w-[43px] h-[34px] rounded-sm flex items-center justify-center flex-col gap-[5px] nav:hidden" onClick={Handlenav}>
        <motion.p className="bg-white w-[26px] h-[1px] rounded-full" animate={topBarAnimation(sidenav)}></motion.p>
        <motion.p className="bg-white w-[26px] h-[1px] rounded-full" animate={middleBarAnimation(sidenav)}></motion.p>
        <motion.p className="bg-white w-[26px] h-[1px] rounded-full" animate={bottomBarAnimation(sidenav)}></motion.p>
      </div>

      {/* Mobile Menu */}
      {sidenav && (
        <motion.div
          animate={mobileitems(sidenav)}
          initial={{ x: "100vw", opacity: 0 }}
          className="absolute bg-black w-[150px] right-5 top-[60px] flex flex-col items-center justify-center gap-5 p-5 rounded-md border"
        >
          {menuItems.map((item, index) => (
            <p
              key={index}
              className="z-10 font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#ff6347] to-[#00bfff] cursor-pointer"
              onClick={() => Handlescroll(item.toLowerCase(), index)}
            >
              {item}
            </p>
          ))}
          <div id="Mob-Highlight" className="absolute bg-slate-900 w-[140px] h-[40px] z-0 rounded-md mt-3 transition-all duration-500 ease-in-out"></div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
