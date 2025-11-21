import React from "react";
import Image from "next/image";
import PrimaryText from "@/components/container/PrimaryText";
import styles from "./HeroSection.module.css";
import CustomButton from "@/components/button/CustomButton"
import {REGISTRATION_LINK }from "@/constants/url"

/**
 * @description - Hero section
 * @returns
 */
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentSection}>

          <p className={styles.heroTextContent}>
            Empowering <PrimaryText>youth</PrimaryText> to unlock their
            potential, fostering resilience, innovation, and self-reliance
          </p>

          <CustomButton 
           textButton="Join the team"
           variant="outline-primary"
           href={REGISTRATION_LINK}
          />

          
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
