"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const items = [
    {
      id: 1,
      color: "from-white to-slate-100",
      title: "Smart Data Dashboard (ML-Powered)(Live Demo)",
      desc: "This project allows users to visualize and analyze their data and derive meaningful insights through machine learning (ML) techniques. It facilitates analytics such as customer segmentation, anomaly detection, and future predictions with its user-friendly interface.",
      img: "/MLPROJECT.png",
      link: "https://smart-data-dashboard-ml-supported-1.onrender.com/",
    },
    {
      id: 2,
      color: "from-slate-200 to-white",
      title: "Earthquake Data Monitoring and Analysis Project",
      desc: "A React + D3-based web application for interactive analysis and visualization of earthquakes in Turkey by magnitude, depth, and region. It fetches and processes real-time earthquake data from Kandilli Observatory’s HTML-based open data using Axios and Cheerio for visualization.",
      img: "/EartQuakeApp.png",
      link: "https://github.com/BerkanJs/Turkiye-Earthquake-Analytics",
    },
    {
      id: 3,
      color: "from-white to-slate-300",
      title: "MIS APP – Social Forum Application(Live Demo)",
      desc: "A React + D3-based web application for interactive analysis and visualization of earthquakes in Turkey by magnitude, depth, and region. It fetches and processes real-time earthquake data from Kandilli Observatory’s HTML-based open data using Axios and Cheerio for visualization.",
      img: "/MISAPP.png",
      link: "https://mis-next-js-app-tush-lupi5s31t-berkanjs-projects.vercel.app/",
    },
    {
      id: 4,
      color: "from-slate-300 to-white",
      title: "MERN Stack E-commerce Website",
      desc: "A modern, scalable, and feature-rich e-commerce application. Built with React + Vite for a fast and animated frontend experience,Express + Node.js + MongoDB for a robust backend API infrastructure,featuring Stripe payment integration and Redis caching for high performance.",
      img: "/MERNSTACKECOMMERCE.png",
      link: "https://github.com/BerkanJs/Mernstack-Ecommerce-Website",
    },
        {
      id: 5,
      color: "to-slate-300 from-white",
      title: "Realtime Chat App",
      desc: "Realtime Chat App is a modern chat application that allows users to communicate in real-time using a sleek and interactive UI. Built with React, DaisyUI, and Lucide React, this application leverages Socket.IO for real-time messaging and notifications. It includes features like user authentication, message sending, and dynamic updates to ensure smooth communication between users.",
      img: "/REALCHATAPP.png",
      link: "https://github.com/BerkanJs/Realtime-Chat-App",
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* Ana başlık */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl md:text-7xl lg:text-8xl text-center font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
          My Projects
        </div>

        {/* Proje kartları */}
        <div className="sticky top-0 flex items-center h-screen gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r" />

            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 p-6 text-black md:p-10">
                  <h1 className="text-3xl font-bold text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                    {item.title}
                  </h1>
                  <div className="relative w-72 h-48 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-lg shadow-lg overflow-hidden">
                    <Image src={item.img} alt="" fill style={{ objectFit: "contain" }} />
                  </div>
                  <p className="w-72 md:w-96 lg:w-[500px] xl:w-[600px] text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                    {item.desc}
                  </p>
                  <Link className="flex justify-end" href={item.link} target="_blank">
                    <button className="px-6 py-3 text-sm font-semibold text-white transition-transform bg-gray-800 rounded-lg shadow-md md:px-8 md:py-4 md:text-lg hover:bg-gray-900 hover:scale-105">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Son bölüm */}
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 px-4 text-center bg-white">
        <h1 className="text-3xl font-bold text-gray-800 md:text-6xl lg:text-7xl">
          Do you have a <span className="text-transparent bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text">Project?</span>
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-56 h-56 md:w-[400px] md:h-[400px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg md:text-xl">
                Full-Stack Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-16 h-16 m-auto text-white transition-colors bg-gray-900 rounded-full md:w-24 md:h-24 hover:bg-gray-700"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
