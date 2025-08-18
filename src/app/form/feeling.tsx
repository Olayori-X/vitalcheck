"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/feeling.module.css";
import next from "next";

type StepThreeProps = {
  nextPage: () => void;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  };
  
  const StepThree: React.FC<StepThreeProps> = ({ nextPage, selected, setSelected }) => {
  const router = useRouter();

  const handleNext = () => {
    if (!selected) {
      alert("Please select an option");
      return;
    }

    // Store in localStorage
    localStorage.setItem("feeling", selected);

    // Navigate to processing page
    router.push("/processing");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <svg
            className={styles.logo}
            viewBox="0 0 100 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 30 L20 30 L25 20 L30 40 L35 10 L40 50 L45 30 L55 30 L60 45 C65 50, 70 50, 75 45 C80 40, 80 35, 75 30 C70 25, 65 25, 60 30 Z"
              stroke="#007AFF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.brandText}>VitalCheck</div>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.question}>How are you feeling?</h1>

        <div className={styles.options}>
          <label
            className={`${styles.option} ${
              selected === "weak" ? styles.selected : ""
            }`}
          >
            <input
              type="radio"
              name="feeling"
              value="weak"
              checked={selected === "weak"}
              onChange={() => setSelected("weak")}
            />
            <span className={styles.optionLabel}>Weak</span>
          </label>

          <label
            className={`${styles.option} ${
              selected === "okay" ? styles.selected : ""
            }`}
          >
            <input
              type="radio"
              name="feeling"
              value="okay"
              checked={selected === "okay"}
              onChange={() => setSelected("okay")}
            />
            <span className={styles.optionLabel}>Okay</span>
          </label>

          <label
            className={`${styles.option} ${
              selected === "very-weak" ? styles.selected : ""
            }`}
          >
            <input
              type="radio"
              name="feeling"
              value="very-weak"
              checked={selected === "very-weak"}
              onChange={() => setSelected("very-weak")}
            />
            <span className={styles.optionLabel}>Very Weak</span>
          </label>
        </div>

        <button className={styles.nextButton} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepThree;