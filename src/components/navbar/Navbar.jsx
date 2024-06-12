"use client"
import React from 'react'
import styles from "./navbar.module.css"
import Links from './Links/Links'
import Image from "next/image"
import { motion } from "framer-motion"
import Logout from '../logout/Logout'
                 
 function Navbar() {

  return (
    <div className={styles.container}>
      <motion.div animate={{y:100}} className={styles.logo}>
        <Image src="/SaveIn.png" alt='Image not found' fill/>
        </motion.div>
      <div className={styles.link}>
        <Links/>
        {/* <Logout /> */}
    </div>
      </div>
  )
}

export default Navbar
