import React from "react";
import styles from "./section2.module.css";
import CompaniesGrid from "./Grid";

const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
        <CompaniesGrid />
      </div>
    </div>
  );
};

export default Section2;
