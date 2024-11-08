"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8">
      {/* IMAGE CONTAİNER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          className="object-contain"
          src="/pngHero.png"
          alt="Hero IMG"
          fill
        />
      </div>
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">Coding Creative Experiences , Designing Your Dreams</h1>
        {/* Description */}
        <p className="md:text-xl font-thin">
        Unleashing creativity in web development means crafting digital experiences that captivate and engage. By merging innovative design with cutting-edge technology, we create websites that are not only visually stunning but also highly functional and user-friendly. Our approach ensures that every project is unique, pushing the boundaries of what’s possible on the web and delivering exceptional results that inspire and delight.
        </p>
         {/* Buttons */}
         <div className="flex gap-4 w-full">
          <Link href="/portfolio"><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button></Link>
          <Link href="/contact"><button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button></Link>


         </div>
      </div>
    </div>
    </motion.div>
  );
}
