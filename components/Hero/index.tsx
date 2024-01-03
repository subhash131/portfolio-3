"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll(); //0 to 675
  const transform = useTransform(
    scrollY,
    [50, 800],
    [
      "perspective(50px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(3.375deg) rotateY(0deg) translateZ(0px)",
      "perspective(1200px) translateX(0px) translateY(6px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    ]
  );

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Shaping digital stories with <br /> creative precision
        </h1>
        <p className={styles.title_description}>
          <br /> Where every interaction tells a story!
        </p>
      </div>
      <motion.div
        className={styles.image_container}
        style={{
          transform,
        }}
      >
        <div className={styles.glow}></div>
        <Image
          src="/assets/hero.png"
          alt="image"
          width={1000}
          height={1000}
          className={styles.image}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
