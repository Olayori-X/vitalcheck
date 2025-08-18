import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/Processing.module.css";

const ProcessingPage = () => {
  const router = useRouter();

  // Redirect after 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push("/result"); // ✅ your result page
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [router]);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <svg
            className={styles.logoSvg}
            viewBox="0 0 120 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 40 L25 40 L30 25 L35 55 L40 15 L45 65 L50 35 L55 45 L65 40 L70 40"
              stroke="#007AFF"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M70 40 L70 55 C70 60 75 65 85 65 C95 65 100 60 100 55 L100 45 C100 40 95 35 85 35 C80 35 77 37 75 40"
              stroke="#007AFF"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M85 35 C90 35 93 37 95 40 L95 45 C95 50 90 55 85 55"
              stroke="#007AFF"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div className={styles.appName}>VitalCheck</div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.spinner}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={styles.spinnerDot}></div>
          ))}
        </div>
        <div className={styles.processingText}>Processing output</div>
      </div>
    </div>
  );
};

export default ProcessingPage;
