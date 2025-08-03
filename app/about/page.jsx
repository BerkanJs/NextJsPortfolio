"use client";
import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import {
  SiTypescript,
  SiPowerbi,
  SiSpringboot,
  SiKubernetes,
  SiPostgresql,
} from "react-icons/si";
import Brain from "@/components/Brain";

const SkillsData = [
  { id: 1, title: "HTML", icon: <FaHtml5 /> },
  { id: 2, title: "CSS", icon: <FaCss3 /> },
  { id: 3, title: "JavaScript", icon: <SiTypescript /> },
  { id: 4, title: "Bootstrap", icon: <FaBootstrap /> },
  { id: 5, title: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { id: 6, title: "ReactJS", icon: <FaReact /> },
  { id: 7, title: "Next.js", icon: <RiNextjsFill /> },
  { id: 8, title: "Node.js", icon: <FaNodeJs /> },
  { id: 9, title: "Spring Boot", icon: <SiSpringboot /> },
  { id: 10, title: "Docker", icon: <FaDocker /> },
  { id: 11, title: "Kubernetes (Learning)", icon: <SiKubernetes /> },
  { id: 12, title: "MongoDB", icon: <DiMongodb /> },
  { id: 13, title: "PostgreSQL", icon: <SiPostgresql /> },
  { id: 14, title: "Python", icon: <FaPython /> },
  { id: 15, title: "Power BI", icon: <SiPowerbi /> },
  { id: 16, title: "Git & GitHub", icon: <FaGitAlt /> },
];

const experiences = [
  {
    id: 1,
    title: "Ar-Ge Software Intern",
    company: "SUNNY ELEKTRONİK Inc.",
    date: "Feb 2025 - May 2025",
    description:
      "Worked on full-stack applications using React (frontend) and Spring Boot (backend), focusing on scalable solutions.",
  },
  {
    id: 2,
    title: "Intern",
    company: "TNC Group",
    date: "Jun 2024 - Aug 2024",
    description:
      "Joined project management software development training and contributed to internal automation projects.",
  },
];

const education = [
  {
    id: 1,
    school: "Akdeniz University",
    degree: "Management of Information Systems (BS)",
    period: "2021 - 2025",
  },
  {
    id: 2,
    school: "University of Konstanz",
    degree: "Computer Science (BS)",
    period: "2019 - 2020",
  },
  {
    id: 3,
    school: "University of Stuttgart",
    degree: "German Language Prep School",
    period: "2018 - 2019",
  },
];

const certifications = [
  "Microsoft Power BI - The Complete Masterclass (Udemy, 2025)",
  "Exploratory Data Analysis for Machine Learning - IBM (2025)",
  "Supervised Machine Learning: Regression - IBM (2025)",
  "15 Days of SQL: The Complete SQL Masterclass - Udemy (2025)",
  "Responsive Web Design - FreeCodeCamp (2024)",
  "SQL Server Database Programming (Basic-Advanced) - Udemy (2023)",
];

const languages = [
  { name: "Turkish", level: "Native", description: "Mother tongue" },
  {
    name: "German",
    level: "Advanced",
    description: "Goethe Zertifikat C2 Oral, C1 Certificate",
  },
  {
    name: "English",
    level: "Fluent",
    description: "Professional working proficiency",
  },
  { name: "French", level: "Pre-intermediate", description: "Conversational" },
];

const AboutPage = () => {
  const containerRef = useRef(null);

  // Create refs for each section for inView tracking
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const languagesRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  // Track if section is in view, animate only once
  const isProfileInView = useInView(profileRef, { once: true });
  const isSkillInView = useInView(skillRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isEducationInView = useInView(educationRef, { once: true });
  const isCertificationsInView = useInView(certificationsRef, { once: true });
  const isLanguagesInView = useInView(languagesRef, { once: true });

  // Common animation variants for reuse
  const slideInLeft = {
    hidden: { x: -600, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full overflow-scroll bg-white lg:flex"
        ref={containerRef}
      >
        {/* Left content */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">

          {/* Profile */}
          <motion.div
            className="flex flex-col justify-center max-w-6xl gap-12 p-10 mx-auto bg-white rounded-lg shadow-md border-1"
            ref={profileRef}
            initial="hidden"
            animate={isProfileInView ? "visible" : "hidden"}
            variants={slideInLeft}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl font-bold border-b-2 border-gray-900"
              initial="hidden"
              animate={isProfileInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Profile
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed"
              initial="hidden"
              animate={isProfileInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Dedicated management information systems graduate with a strong
              foundation in web development, data science, and cloud-native
              applications. Experienced in multitasking, teamwork, and skilled
              in programming languages and modern web frameworks. Committed to
              applying my skills to solve real-world problems and drive business
              value.
            </motion.p>
            <motion.span
              className="italic text-slate-600"
              initial="hidden"
              animate={isProfileInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Coding Creative Experiences, Designing Your Dreams
            </motion.span>
            <a href="#skills">
              <MdOutlineArrowCircleDown className="mt-12 text-6xl cursor-pointer animate-bounce" />
            </a>
          </motion.div>

          {/* Skills */}
          <div
            id="skills"
            className="flex flex-col justify-center max-w-6xl gap-12 p-10 mx-auto bg-white rounded-lg shadow-md border-1"
            ref={skillRef}
          >
            <motion.h1
              initial="hidden"
              animate={isSkillInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl font-bold border-b-2 border-gray-900"
            >
              Skills
            </motion.h1>
            <motion.div
              initial="hidden"
              animate={isSkillInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {SkillsData.map(({ id, icon, title }) => (
                <div
                  key={id}
                  className="flex items-center gap-3 px-4 py-2 text-white transition-colors duration-300 bg-black rounded cursor-pointer hover:bg-white hover:text-black"
                  title={title}
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-lg font-semibold">{title}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Experience */}
          <div
            ref={experienceRef}
            className="flex flex-col justify-center max-w-6xl gap-12 p-10 mx-auto bg-white rounded-lg shadow-md border-1"
          >
            <motion.h1
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-3 mb-8 text-3xl font-bold border-b-2 border-gray-900"
            >
              Experience
            </motion.h1>
            <motion.div
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              {experiences.map(({ id, title, company, date, description }) => (
                <div
                  key={id}
                  className="p-6 border-b-2 rounded-lg bg-slate-50 last:border-b-0"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm italic text-gray-600">{company}</p>
                  <p className="text-sm font-semibold text-gray-800">{date}</p>
                  <p className="mt-2 text-gray-700">{description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div
            ref={educationRef}
            className="flex flex-col justify-center max-w-6xl gap-12 p-10 py-16 bg-white rounded-lg shadow-md border-1"
          >
            <motion.h1
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-3 mb-8 text-3xl font-bold border-b-2 border-gray-900"
            >
              Education
            </motion.h1>
            <motion.div
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              {education.map(({ id, school, degree, period }) => (
                <div
                  key={id}
                  className="p-6 border-b-2 rounded-lg last:border-b-0 bg-slate-50"
                >
                  <h3 className="text-xl font-semibold">{school}</h3>
                  <p className="text-sm italic text-gray-600">{degree}</p>
                  <p className="text-sm font-semibold text-gray-800">{period}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div
            ref={certificationsRef}
            className="max-w-6xl p-10 mx-auto bg-white rounded-lg shadow-md py-15 border-1"
          >
            <motion.h2
              initial="hidden"
              animate={isCertificationsInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-3 mb-8 text-3xl font-bold text-gray-900 border-b-2 border-gray-900"
            >
              Certifications
            </motion.h2>
            <motion.ul
              initial="hidden"
              animate={isCertificationsInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4 text-base text-gray-800 list-disc list-inside"
            >
              {certifications.map((cert, idx) => (
                <li
                  key={idx}
                  className="p-4 leading-relaxed border-b-2 rounded-lg bg-slate-50 last:border-b-0"
                >
                  {cert}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Languages */}
          <section
            ref={languagesRef}
            className="max-w-6xl py-16"
          >
            <motion.h2
              initial="hidden"
              animate={isLanguagesInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-3 mb-8 text-3xl font-bold text-gray-900 border-b-2 border-gray-900"
            >
              Languages
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLanguagesInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-10 space-y-6 bg-white border-2 rounded-lg shadow-md"
            >
              {languages.map(({ name, level, description }, idx) => (
                <div className="border-b-2" key={idx}>
                  <h3 className="mb-1 text-xl font-semibold text-gray-800">{name}</h3>
                  {description && (
                    <p className="mb-1 text-base text-gray-600">{description}</p>
                  )}
                  <span className="text-base font-medium text-gray-400">{level}</span>
                </div>
              ))}
            </motion.div>
          </section>
        </div>

        {/* Right SVG & Animation Container */}
        <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
