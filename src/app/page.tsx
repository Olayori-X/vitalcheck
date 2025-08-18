'use client';
import Image from "next/image";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const startApp = () => {
    console.log("VitalCheck app starting...");
    router.push("/form");
    // Add your app initialization logic here
  };

  const startAssessment = () => {
    localStorage.clear();
    window.location.href = "/blood-pressure"; // ✅ In Next.js, use a route instead of .html
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.heartIcon}>
            <svg className={styles.heartSvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Heart shape */}
              <path
                d="M50,85 C50,85 20,65 20,40 C20,25 30,15 45,15 C47,15 50,20 50,20 C50,20 53,15 55,15 C70,15 80,25 80,40 C80,65 50,85 50,85 Z"
                fill="white"
                stroke="none"
              />

              {/* ECG line */}
              <path
                className={styles.ecgLine}
                d="M15,50 L25,50 L30,35 L35,65 L40,20 L45,80 L50,50 L55,50 L60,35 L65,65 L70,50 L85,50"
                fill="none"
                stroke="#1e40af"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <h1 className={styles.appTitle}>VitalCheck</h1>
            <p className={styles.appSubtitle}>New Checks. Smart Care</p>
          </div>
        </div>

        <button className={styles.startButton} onClick={startApp}>START</button>
      </div>
    </div>
  );
}
