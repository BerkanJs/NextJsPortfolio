"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,

  SiExpress,
  

  SiVercel,
  SiRender,

  SiPandas,
  SiNumpy,
  SiScikitlearn,


} from "react-icons/si";
import { SiKubernetes, SiRabbitmq, SiDotnet } from "react-icons/si";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
const techStack = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
  {
    title: "Data Science & Analytics",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Matplotlib", icon: "📊" },
      { name: "Power BI", icon: <BsFileBarGraphFill /> },
    ],
  },
];
export default function Home() {
  return (
    <motion.div
      className="h-full text-black bg-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* HERO */}
      <div className="flex flex-col h-full gap-8 px-4 py-16 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            className="object-contain"
            src="/pngHero.png"
            alt="Hero IMG"
            fill
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center h-1/2 lg:h-full lg:w-1/2">
          <h1 className="text-4xl font-bold md:text-6xl">
            Hi, I’m Berkan Özçelik
          </h1>
          <h2 className="text-xl font-medium text-gray-700 md:text-2xl">
            Full-Stack Developer | React · Next.js · Spring Boot · Node.js
          </h2>
          <p className="max-w-lg text-gray-600 md:text-lg">
            Passionate about building scalable, clean, and user-friendly web
            applications. Experienced in JavaScript ecosystem, backend APIs, and
            exploring cloud-native solutions.
          </p>
          <div className="flex justify-center w-full gap-4">
            <Link href="/portfolio">
              <button className="p-4 text-white transition bg-black rounded-lg hover:bg-gray-800">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 transition border border-black rounded-lg hover:bg-black hover:text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <motion.section
        className="px-6 py-20 mx-auto rounded-lg shadow max-w-7xl bg-slate-50 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-center">About Me</h2>
        <div className="w-24 h-1 mx-auto mb-10 bg-black rounded"></div>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left - Bio */}
          <div className="space-y-8 text-lg leading-relaxed text-gray-800">
            {/* Who I Am */}
            <div className="p-8 bg-white rounded-lg shadow">
              <h3 className="pb-2 mb-4 text-2xl font-bold tracking-wide text-gray-900 border-b-2 border-gray-200">
                Who I Am
              </h3>
              <p className="text-lg leading-loose tracking-wide text-gray-700 font-[Inter]">
                I’m a passionate{" "}
                <strong className="text-gray-900">full-stack developer</strong>
                with a strong foundation in both web development and data
                science. My expertise spans the JavaScript ecosystem (
                <strong className="text-gray-900">React</strong>,
                <strong className="text-gray-900"> Next.js</strong>,
                <strong className="text-gray-900"> Node.js</strong>) and backend
                development using{" "}
                <strong className="text-gray-900">Spring Boot</strong>, with a
                growing focus on cloud-native applications.
              </p>
            </div>

            {/* What I Do */}
            <div className="p-8 bg-white rounded-lg shadow">
              <p className="text-lg leading-loose tracking-wide text-gray-700 font-[Inter]">
                With a background in{" "}
                <strong className="text-gray-900">
                  Management Information Systems (MIS)
                </strong>
                , I specialize in analyzing{" "}
                <strong className="text-gray-900">CRM data</strong> through
                statistical methods and developing{" "}
                <strong className="text-gray-900">
                  machine learning models
                </strong>{" "}
                to extract actionable insights. My focus is on turning complex
                business data into meaningful solutions that drive
                decision-making and add real value.
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid gap-6 text-center sm:grid-cols-2">
            {[
              {
                title: "Full-Stack Developer",
                desc: "React · Next.js · Node.js  Spring Boot",
              },

              {
                title: "Databases",
                desc: "PostgreSQL · MongoDB  MySQL",
              },
              {
                title: "Data Science",
                desc: "Python · Pandas · NumPy  Power BI · Scikit-learn",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start px-6 py-8 space-y-6 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-semibold border-b-2 border-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TECH STACK */}
      <motion.section
        className="px-6 py-16 my-16 text-white bg-gradient-to-b from-black via-black to-gray-800 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-10 text-3xl font-bold text-center"> Tech Stack</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {techStack.map((category, index) => (
            <div key={index}>
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 text-black transition-all duration-300 bg-white rounded-lg hover:bg-black hover:text-white "
                  >
                    <div className="text-4xl ">{item.icon}</div>
                    <p className="text-sm ">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CURRENTLY LEARNING */}
      <motion.section
        className="px-6 py-20 text-center text-white md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-10 text-3xl font-bold text-black ">
          Currently Learning
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Microservices Architecture",
              desc: "Building scalable services with Spring Boot & Docker",
              icon: <SiSpringboot className="text-green-400" />,
            },
            {
              title: "Kubernetes & Orchestration",
              desc: "Managing containerized apps at scale",
              icon: <SiKubernetes className="text-blue-400" />,
            },
            {
              title: "Message Brokers",
              desc: "RabbitMQ for reliable async communication",
              icon: <SiRabbitmq className="text-orange-400" />,
            },
            {
              title: "API Gateway & Security",
              desc: "Implementing secure, scalable API Gateways",
              icon: <FaServer className="text-gray-300" />,
            },
            {
              title: "C# & ASP.NET Core",
              desc: "Building modern backend applications with .NET",
              icon: <SiDotnet className="text-purple-400" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-6 transition rounded-lg shadow bg-gradient-to-r from-black via-white-600 to-black hover:bg-gray-700"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 text-center text-white bg-gradient-to-b from-black via-black to-slate-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-4 text-4xl font-extrabold tracking-wide">
          Let’s build something great together.
        </h2>
        <p className="mb-8 text-lg text-gray-200">
          Have an idea or a project in mind? Let’s turn it into reality.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 px-8 py-4 mx-auto font-semibold text-black transition bg-white rounded-lg shadow-lg hover:bg-gray-200"
          >
            Get In Touch
          </motion.button>
        </Link>
      </motion.section>
    </motion.div>
  );
}
