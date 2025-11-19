import React from "react";
import Image from "next/image";
import PrimaryText from "@/components/container/PrimaryText";
import styles from "./HeroSection.module.css";

/**
 * @description - Hero section
 * @returns
 */
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div >
          <p className={styles.heroTextContent}>
            Empowering <PrimaryText>youth</PrimaryText> to unlock their
            potential, fostering resilience, innovation, and self-reliance
          </p>
        </div>

        <Image
          src="/images/hero_img.png"
          alt="Picture of the author"
          width={700}
          height={500}
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default HeroSection;
