"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Brain from "@/components/Brain";
import { useRef } from "react";
import { useScroll,useInView } from "framer-motion";

const AboutPage = () => {

  const containerRef=useRef()
  const {scrollYProgress}= useScroll({container:containerRef})

  const skillRef=useRef()
  //const isSkillRefInView=useInView(skillRef,{once:true}) 
  const isSkillRefInView=useInView(skillRef,{once:true}) 

  
  const exprerienceRef=useRef()
  //const isSkillRefInView=useInView(skillRef,{once:true}) 
  const isExpreienceRefInView=useInView(skillRef,{once:true}) 



  const SkillsData = [
    { id: 1, title: "HTML", icon: <FaHtml5 /> },

    { id: 2, title: "CSS", icon: <FaCss3 /> },
    { id: 3, title: "JavaScript", icon: <IoLogoJavascript /> },
    { id: 4, title: "Bootstrap", icon: <FaBootstrap /> },
    { id: 5, title: "Tailwind", icon: <RiTailwindCssFill /> },
    { id: 6, title: "ReactJS", icon: <FaReact /> },
    { id: 7, title: "NextJS", icon: <RiNextjsFill /> },
    { id: 8, title: "TypeScript", icon: <SiTypescript /> },
    { id: 9, title: "NodeJs", icon: <FaNodeJs /> },
    { id: 10, title: "MongoDB", icon: <DiMongodb /> },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*Container */}

      <div className=" h-full overflow-scroll lg:flex" ref={containerRef}>
        {/*Text Container */}

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/*Biography Container */}

          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-3xl">Profile</h1>
            <p className="text-lg">
              {" "}
              Dedicated management information systems student with the 
ability to multitask and work well with others. Adequate 
organized, and skilled in web design and frontend web 
programming. Good in various programming languages and 
office technology programs. Committed to utilizing my skills to 
further the mission of a company.  
            </p>
            <span className="italic text-slate-600">
            Coding Creative Experiences , Designing Your Dreams
            </span>

            <a href="#skills"><MdOutlineArrowCircleDown className="text-6xl mt-12 animate-bounce cursor-pointer"  /></a>
          </div>
          {/*Skills Container */}

          <div id="skills" className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} :{}}
            transition={{delay:0.2}} className="font-bold text-3xl">Skills</motion.h1>
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} :{}} className="flex gap-4 flex-wrap">
              {SkillsData.map((data) => (
                <div
                  key={data.id}
                  className="flex gap-4 px-4 items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {" "}
                  {data.icon} {data.title}{" "}
                </div>
              ))}
            </motion.div>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div ref={exprerienceRef} className="flex flex-col gap-12 justify-center pb-48 shadow-lg rounded-xl p-6 bg-white ">
            {/* EXPERIENCE TITLE */}
            <motion.h1 initial={{x:"-400px"}} transition={{delay:0.6}} animate={isExpreienceRefInView ? {x:"0"} :{}} className="font-bold text-2xl">EDUCATİON</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{x:"-800px"}} transition={{delay:0.8}} animate={isExpreienceRefInView ? {x:"0"} :{}}>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48  ">
                {/* LEFT */}
                <div className="w-1/3 h-[250px] shadow-lg rounded-md p-6 bg-white ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg underline">
                    Akdeniz University
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 uppercase text-sm italic">
                    BS,Management of Information Systems{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3  text-sm font-semibold">2021 - 2025</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-black rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3   "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3  "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-black rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 h-[250px] shadow-lg rounded-md p-6 bg-white">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg underline ">
                    University of Konstanz
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    BS, COMPUTER SCİENCE,{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3  text-sm font-semibold">2019 - 2020 </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 h-[250px] shadow-lg rounded-md p-6 bg-white ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg underline">
                    University of Stuttgart{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">PREP LANGUAGE, </div>
                  {/* JOB DATE */}
                  <div className="p-3  text-sm font-semibold">2018 - 2019 </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-black rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
        <Brain scrollYProgress={scrollYProgress}/>
        
        
        
        </ div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
