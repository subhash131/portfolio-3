"use client";
import React from "react";
import styles from "./grid.module.css";

const data = [
  {
    img: "/assets/pwc_logo.jpg",
    name: "PwC",
    alt: "PwC logo",
  },
  {
    img: "/assets/victoria_s_secret_logo.jpg",
    name: "Victoria's Secret",
    alt: "victoria's secret logo",
  },
  {
    img: "/assets/aon_logo.jpg",
    name: "Aon",
    alt: "Aon logo",
  },
  {
    img: "/assets/blueshield_ca_logo.jpg",
    name: "BSC",
    alt: "Blue Shield of California logo",
  },

  {
    img: "/assets/cvs_logo.jpg",
    name: "CVS Health",
    alt: "CVS Health logo",
  },

  {
    img: "/assets/bridgestone_logo.jpg",
    name: "Bridge Stone",
    alt: "Bridge Stone logo",
  },
];

const CompaniesGrid = () => {
  return (
    <div className={styles.companies_container}>
      <div className={styles.description}>
        <p>Colabrated with industry gaints</p>
      </div>
      <div className={styles.items}>
        {data.map(({ img, name, alt }, index) => {
          return (
            <div className={styles.grid_item} key={`${index}:${name}`}>
              <div className={styles.light} />
              <img
                src={img}
                className={styles.img}
                alt={alt}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesGrid;
