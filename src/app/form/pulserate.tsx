import React from "react";
import styles from "./css/Bp.module.css";

type StepTwoProps = {
  nextPage: () => void;
  selectedPR: string;
  setSelectedPR: React.Dispatch<React.SetStateAction<string>>;
};

const StepTwo: React.FC<StepTwoProps> = ({ nextPage, selectedPR, setSelectedPR }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPR(event.target.value);
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles["logo-container"]}>
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
            <div className={styles["brand-text"]}>VitalCheck</div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.question}>What's your pulse rate?</h1>

          <div className={styles.options}>
            <label
              className={`${styles.option} ${
                selectedPR === "high" ? styles.selected : ""
              }`}
              htmlFor="high"
            >
              <input
                type="radio"
                id="high"
                name="pulseRate"
                value="high"
                checked={selectedPR === "high"}
                onChange={handleChange}
              />
              <span className={styles["option-label"]}>High</span>
            </label>

            <label
              className={`${styles.option} ${
                selectedPR === "normal" ? styles.selected : ""
              }`}
              htmlFor="normal"
            >
              <input
                type="radio"
                id="normal"
                name="pulseRate"
                value="normal"
                checked={selectedPR === "normal"}
                onChange={handleChange}
              />
              <span className={styles["option-label"]}>Normal</span>
            </label>

            <label
              className={`${styles.option} ${
                selectedPR === "low" ? styles.selected : ""
              }`}
              htmlFor="low"
            >
              <input
                type="radio"
                id="low"
                name="pulseRate"
                value="low"
                checked={selectedPR === "low"}
                onChange={handleChange}
              />
              <span className={styles["option-label"]}>Low</span>
            </label>
          </div>

          <button
            className={styles["next-button"]}
            onClick={nextPage}
            disabled={!selectedPR}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
