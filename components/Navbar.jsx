"use client"

import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight,FadeUp,listItemVariants} from '../app/animations/Animations'

const Links=[
  {url:"/",title:"Home"},
  {url:"/about",title:"About"},
  {url:"/portfolio",title:"Portfolio"},
  {url:"/contact",title:"Contact"}
]


const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>

      {/* Links Section */}
      <div className='hidden md:flex gap-4 text-xl w-1/3'>

        {

          Links.map((link)=>(
            <NavLink link={link} key={link.url}/>

          ))
        }


      </div>

      {/*   Logo Section    */}
      <div className='md:hidden lg:flex items-center justify-center mt-4 w-1/3'>
     <Link href="/">
     <Image src="/pngLogo.png"     
         width={300}
        height={200}
         alt="My Logo"/>
     
     </Link>
      


       
      



        {/*     <Link href="/" className='text-lg bg-blue-50 rounded-md p-1 font-semibold flex items-center justify-center relative'>
        <span className='mr-1 rounded-md '>Berkan Özçelik</span>
        <span className='w-12 h-8 rounded-full bg-black text-white flex items-center justify-center'>.dev</span>  
        </Link>              */}
        
        
        
       



      </div>

      {/*   İcons Section    */}

      <div className='hidden md:flex items-center justify-center gap-6  w-1/3'>
       <Link href="https://github.com/BerkanJs">
       <FaGithub className='text-3xl '/>
       
       </Link>
       <Link href="https://www.linkedin.com/in/berkan-%C3%B6z%C3%A7elik-2bb733313/
         
         ">
       <FaLinkedin className='text-3xl'/>
       
       </Link>
    
   




      </div>





      {/*  Responsive Menu Section    */}

      <div
      
      className='md:hidden z-20'>
        {/*   Menu Button   */}
        <button
               


        onClick={()=>setOpen(!open)} className='z-50 relative'>
          {open ?  <RxCross2 className='font-bold text-3xl text-white transition-all duration-150  animate-bounce ' /> :<GiHamburgerMenu className='font-bold text-3xl text-white transition-all duration-150 hover:rotate-12  ' />  }
        


        </button>
   
        {/*   Menu items  */}
        {open &&(   <motion.div 
            variants={FadeLeft(0.1)}
            initial={"hidden"}
            whileInView={"visible"}
        
        
        className=' absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl '>{Links.map((link)=>(
          <motion.div
          variants={FadeUp(0.2)}
          initial={"hidden"}
          whileInView={"visible"}
          
          
          
          key={link.url}>
          <Link onClick={()=>setOpen(!open)} href={link.url} >
          {link.title}
          </Link>
          </motion.div>

        ))
          }



        </motion.div>)}
     


      </div>







    </div>
  )
}

export default Navbar
