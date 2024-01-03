import React from "react";
import styles from "./glow.module.css";

const Glow = () => {
  return (
    <div className={styles.container}>
      <div className="w-28 h-28 glow shadow-[#1D1E34] bg-gradient-to-b from-[#11111D] to-[#201848] rounded-full border border-[#201F33] flex justify-center items-center"></div>
    </div>
  );
};

export default Glow;
