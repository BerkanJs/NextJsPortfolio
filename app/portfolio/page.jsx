"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const items = [
    {
      id: 1,
      color: "from-blue-50 to-slate-100",
      title: "React Hotel Project",
      desc: "a hotel web app with room filtering by check in out date , users count and type . React-datepicker , react-dom,tailwindcss react-icons,react-router,react-router-dom,swiper.",
      img: "/hotel.png",
      link: "https://hotel-landing-page-mu.vercel.app/",
    },
    {
      id: 2,
      color: "from-slate-100 to-blue-200",
      title: "React Furniture Shop",
      desc: "React.Js landing page website with tailwind css and framer motion.",
      img: "/furniture.png",
      link: "https://furniture-website-react-js.vercel.app",
    },
    {
      id: 3,
      color: "from-blue-200 to-slate-300",
      title: "React Clothing E-Commerce",
      desc: "a small dynamic web app for e-commerce with react.js useContext,react-router framer-motion tailwindcss all data is fetched from the fake store API.",
      img: "/shop.png",
      link: "https://clothing-shop-web-app.vercel.app/",
    },
    {
      id: 4,
      color: "from-slate-300 to-blue-400",
      title: "React Redux App",
      desc: "a small app with e-commerce functionality react-dom react-router-dom react-redux react-icons tailwindcss.",
      img: "/reduxapp.png",
      link: "https://gleeful-nougat-3e2538.netlify.app/",
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
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl md:text-8xl text-center ">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r" />

            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center  bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black ">
                  <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]  ">
                    <Image src={item.img} alt="" fill style={{objectFit:"contain"}} />
                  </div>
                  <p className="w-80 md:w-96 h-40 lg:w-[500px]  xl:w-[600px] text-lg lg:text-2xl capitalize font-thin">
                    {item.desc}
                  </p>
                  <Link
                    className="flex justify-end"
                    href={item.link}
                    target="_blank"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className=" text-4xl md:text-8xl font-semibold">Do you have a Project ?</h1>
            <div className="relative ">
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[500px] md:h-[500px]  "
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Full-Stack Web Developer 
                  </textPath>
                </text>
              </motion.svg>
              <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center ">Hire Me</Link>
            </div>
          </div>
    </motion.div>
  );
};

export default PortfolioPage;
