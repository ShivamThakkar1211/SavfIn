"use client"
import React from 'react'
import styles from "./home.module.css"
import { ReactTyped } from "react-typed";
import Image from "next/image"


function page() {
  return (
    <div className={styles.container}>
    <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    <br />

    <ReactTyped className="text-black"
      strings={[
        "Think Equity",
        "Think Currency",
        "Think Fixed Deposits",
      ]}
      typeSpeed={40}
      backSpeed={40}
      loop
    >
    </ReactTyped>
    <h1 className={styles.h1}>Invest today with Save<span className={styles.span}>In</span></h1>
    <h1 className={styles.br}></h1>
    <h1 className={styles.jpg}>Platforms we deal with</h1>
    <div className={styles.imgs}>
    <div className={styles.img}>
    <Image  src="/nifty.png" fill alt='image not found'/>
    </div>
    <div className={styles.img}>
    <Image  src="/nifty.png" fill alt='image not found'/>
    </div>
    <div className={styles.img}>
    <Image  src="/nifty.png" fill alt='image not found'/>
    </div>
    </div>
    <div>
      <h1>Features that we Provide</h1>
      <div className={styles.boxes}>
      <div className={styles.box}>
        <h1></h1>
      </div>
      <div className={styles.box} id={styles.newBox}>
        <h1></h1>
      </div>
      <div className={styles.box}>
        <h1></h1>
      </div>
      </div>
    </div>
  </div>
  )
}

export default page;
