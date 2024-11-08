"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLink = ({link}) => {
    const pathName=usePathname();
  return (
    <Link className={`rounded-lg p-2 transition-all ease-in-out duration-300 ${pathName===link.url && "bg-black text-white"}`} href={link.url}>
        {link.title}
    
    </Link>
  )
}

export default NavLink