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
        <div className="hero-text">
          <h4 className="hero-text-content">
            Empowering <PrimaryText>youth</PrimaryText> to unlock their
            potential, fostering resilience, innovation, and self-reliance
          </h4>
        </div>

        <Image
          src="/images/hero_img.png"
          alt="Picture of the author"
          width={800} // original image width
          height={200} // original image height
          style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
