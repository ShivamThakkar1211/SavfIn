"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from "next/link"
import styles from "./navlink.module.css"
function Navlink({item}) {
    const pathName = usePathname();
  return (
    <div>
       <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} >
        {item.title}
       </Link>
    </div>
  )
}

export default Navlink
