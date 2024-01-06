import React from "react";
import styles from "./section2.module.css";
import CompaniesGrid from "./Grid";

const Section2 = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.title_container}>
        <h1 className={styles.title}>
          From pioneering innovative software solutions to optimizing digital
          experiences.
        </h1>
        <p className={styles.title_description}>
          my journey as a software engineer has spanned impactful collaborations
          with industry leaders such as
        </p>
      </div> */}
      <div className={styles.grid_container}>
        <CompaniesGrid />
      </div>
    </div>
  );
};

export default Section2;
