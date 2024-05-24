"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Links from './Links/Links'
import Image from "next/image"
import { motion } from "framer-motion"
// import Link from "next/link"
// import axios from 'axios'
import Logout from '../logout/Logout'
                 
function Navbar() {
// const [data,setData] = useState("nothing");
// const getUserDetails = async () => {
//   const res = await axios.get('/api/users/me')
//   console.log(res.data);
//   setData(res.data.data._id)
// }
  return (
    <div className={styles.container}>
      <motion.div animate={{y:100}} className={styles.logo}>
        <Image src="/SaveIn.png" alt='Image not found' fill/>
        </motion.div>
      <div className={styles.link}>
        <Links/>
      <Logout/>
      {/* <h2>{data==="nothing"?"Nothing":<Link href={`/services/${data}`}>{data}</Link>}</h2>
      <button onClick={getUserDetails}>Get User Details</button> */}
    </div>
      </div>
  )
}

export default Navbar
