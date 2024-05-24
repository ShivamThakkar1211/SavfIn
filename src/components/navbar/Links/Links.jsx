"use client"
import React from 'react'
import NavLink from './navlink/NavLink'
import styles from "./links.module.css"

const links = [
    {
        title:"Home",
        path:"/",
    },
    {
        title:"Top News",
        path:"/services",
    },
    {
        title:"SignUp",
        path:"/signup"
    },
];
function Links() {
    
  return (
    <>
    <div className={styles.container}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
    </div>
    </>
  )
}

export default Links
