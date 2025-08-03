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
  SiSpringboot,
  SiKubernetes,
  SiPostgresql,
} from "react-icons/si";
import Brain from "@/components/Brain";
import { BsFileBarGraphFill } from "react-icons/bs";

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
  { id: 15, title: "Power BI", icon: <BsFileBarGraphFill /> },
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

  // Section refs for inView
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const languagesRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const isProfileInView = useInView(profileRef, { once: true });
  const isSkillInView = useInView(skillRef, { once: true });
  const isExperienceInView = useInView(experienceRef, { once: true });
  const isEducationInView = useInView(educationRef, { once: true });
  const isCertificationsInView = useInView(certificationsRef, { once: true });
  const isLanguagesInView = useInView(languagesRef, { once: true });



  const slideInLeft = {
    hidden: { x: -600, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="h-full bg-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        ref={containerRef}
        className="h-full overflow-x-hidden overflow-y-scroll lg:flex"
      >
        {/* Left content */}
        <main
          className="flex flex-col max-w-full gap-24 p-6 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 "
        >
          {/* Profile */}
<motion.section
  ref={profileRef}
  className="max-w-6xl p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
  initial={false}   // animasyonu kapat
  animate={true}    // her zaman görünür yap
  // variants={slideInLeft}   // kaldır
  // transition={{ duration: 0.7, delay: 0.2 }}  // kaldır
>
  <h1 className="mb-6 text-3xl font-bold border-b-2 border-gray-900 sm:text-4xl">
    Profile
  </h1>
  <p className="mb-4 text-base leading-relaxed sm:text-lg">
    Dedicated management information systems graduate with a strong foundation in web development, data science, and cloud-native applications. Experienced in multitasking, teamwork, and skilled in programming languages and modern web frameworks. Committed to applying my skills to solve real-world problems and drive business value.
  </p>
  <span className="italic text-slate-600">
    Coding Creative Experiences, Designing Your Dreams
  </span>
  <a href="#skills" aria-label="Scroll down to skills section">
    <MdOutlineArrowCircleDown className="mt-12 text-6xl text-gray-800 cursor-pointer animate-bounce" />
  </a>
</motion.section>


          {/* Skills */}
          <section
            id="skills"
            ref={skillRef}
            className="max-w-6xl p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <motion.h1
              className="mb-6 text-3xl font-bold border-b-2 border-gray-900 sm:text-4xl"
              initial="hidden"
              animate={isSkillInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Skills
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-3 mt-4"
              initial="hidden"
              animate={isSkillInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {SkillsData.map(({ id, icon, title }) => (
                <div
                  key={id}
                  title={title}
                  className="flex items-center gap-3 px-4 py-2 text-white transition-colors duration-300 bg-black rounded cursor-pointer hover:bg-white hover:text-black min-w-[120px] max-w-full break-words text-center"
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-lg font-semibold">{title}</span>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Experience */}
          <section
            ref={experienceRef}
            className="max-w-6xl p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <motion.h1
              className="mb-6 text-3xl font-bold border-b-2 border-gray-900 sm:text-4xl"
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Experience
            </motion.h1>
            <motion.div
              className="flex flex-col gap-8 mt-4"
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {experiences.map(({ id, title, company, date, description }) => (
                <article
                  key={id}
                  className="p-6 border-b-2 rounded-lg bg-slate-50 last:border-b-0"
                >
                  <h3 className="mb-1 text-xl font-semibold">{title}</h3>
                  <p className="text-sm italic text-gray-600">{company}</p>
                  <p className="mb-2 text-sm font-semibold text-gray-800">{date}</p>
                  <p className="text-gray-700">{description}</p>
                </article>
              ))}
            </motion.div>
          </section>

          {/* Education */}
          <section
            ref={educationRef}
            className="max-w-6xl p-8 pt-16 mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <motion.h1
              className="mb-6 text-3xl font-bold border-b-2 border-gray-900 sm:text-4xl"
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Education
            </motion.h1>
            <motion.div
              className="flex flex-col gap-6 mt-4"
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {education.map(({ id, school, degree, period }) => (
                <article
                  key={id}
                  className="p-6 border-b-2 rounded-lg last:border-b-0 bg-slate-50"
                >
                  <h3 className="mb-1 text-xl font-semibold">{school}</h3>
                  <p className="text-sm italic text-gray-600">{degree}</p>
                  <p className="text-sm font-semibold text-gray-800">{period}</p>
                </article>
              ))}
            </motion.div>
          </section>

          {/* Certifications */}
          <section
            ref={certificationsRef}
            className="max-w-6xl p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <motion.h2
              className="mb-6 text-3xl font-bold text-gray-900 border-b-2 border-gray-900 sm:text-4xl"
              initial="hidden"
              animate={isCertificationsInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Certifications
            </motion.h2>
            <motion.ul
              className="mt-4 space-y-4 text-base text-gray-800 list-disc list-inside"
              initial="hidden"
              animate={isCertificationsInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
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
          </section>

          {/* Languages */}
          <section
            ref={languagesRef}
            className="max-w-6xl py-16 mx-auto"
          >
            <motion.h2
              className="mb-6 text-3xl font-bold text-gray-900 border-b-2 border-gray-900 sm:text-4xl"
              initial="hidden"
              animate={isLanguagesInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Languages
            </motion.h2>
            <motion.div
              className="p-8 space-y-6 bg-white border-2 rounded-lg shadow-md"
              initial="hidden"
              animate={isLanguagesInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {languages.map(({ name, level, description }, idx) => (
                <article key={idx} className="border-b-2 last:border-b-0">
                  <h3 className="mb-1 text-xl font-semibold text-gray-800">{name}</h3>
                  {description && (
                    <p className="mb-1 text-base text-gray-600">{description}</p>
                  )}
                  <span className="text-base font-medium text-gray-400">{level}</span>
                </article>
              ))}
            </motion.div>
          </section>
        </main>

        {/* Right SVG & Animation Container */}
        <aside className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </aside>
      </div>
    </motion.div>
  );
};

export default AboutPage;
