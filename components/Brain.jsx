"use client"


import React from 'react'
import { motion, useTransform } from 'framer-motion'
import Image from 'next/image'

const Brain = ({scrollYProgress}) => {
    const rotateFoward=useTransform(scrollYProgress,[0,1],[0,360])
    const rotateBackward=useTransform(scrollYProgress,[0,1],[0,-360])
  return (
    <div className='h-full w-full relative'>

        <Image  alt="my brain png" src={"/pngBrain.png"} fill />
        {/* COGS */}
        <motion.div style={{rotate:rotateFoward}} className='absolute top-[210px] left-[130px]'>
            <Image alt="cog" src={"/CogGray3.png"} width={120} height={120}/>



        </motion.div>
        <motion.div style={{rotate:rotateBackward}} className='absolute top-[240px] left-[245px]'>
            <Image alt="cog" src={"/CogGray3.png"} width={120} height={120}/>



        </motion.div>
        <motion.div style={{rotate:rotateFoward}} className='absolute top-[295px] left-[100px]'>
            <Image alt="cog" src={"/CogB1.png"} width={300} height={300}/>



        </motion.div>

        <motion.div style={{rotate:rotateBackward}} className='absolute top-[300px] right-[70px] '>
            <Image alt="cog" src={"/CogB1.png"} width={300} height={300}/>



        </motion.div>
        <motion.div style={{rotate:rotateBackward}} className='absolute top-[250px] right-[120px] -z-10'>
            <Image alt="cog" src={"/CogB1.png"} width={130} height={130}/>



        </motion.div>
        <motion.div style={{rotate:rotateFoward}} className='absolute top-[250px] right-[200px]'>
            <Image alt="cog" src={"/CogGray2.png"} width={130} height={130}/>



        </motion.div>

        <motion.div style={{rotate:rotateFoward}} className='absolute top-[320px] left-[400px]'>
            <Image alt="cog" src={"/CogGray3.png"} width={180} height={180}/>



        </motion.div>



        <motion.div style={{rotate:rotateBackward}} className='absolute top-[320px] left-[380px]'>
            <Image alt="cog" src={"/CogGray2.png"} width={100} height={100}/>



        </motion.div>
        <motion.div style={{rotate:rotateFoward}} className='absolute top-[280px] left-[500px]'>
            <Image alt="cog" src={"/CogGray2.png"} width={100} height={100}/>



        </motion.div>
        <motion.div style={{rotate:rotateFoward}} className='absolute top-[250px] left-[420px]'>
            <Image alt="cog" src={"/CogGray2.png"} width={80} height={80}/>



        </motion.div>









    </div>
  )
}

export default Brain