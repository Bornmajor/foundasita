import React from "react";
import PrimaryText from "@/components/container/PrimaryText";
import Image from "next/image";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
   
      <div className={styles.innerContainer}>
        
        {/* text section */}
        <div className={styles.textSection}>
          <PrimaryText>
            <h4>Transforming Potential into Purpose</h4>
          </PrimaryText>

          <p>
            Rooted in the belief that every young person possesses unique capabilities, Fundasita Foundation nurtures a culture of entrepreneurship, creativity, and community impact.
            We are dedicated to raising a generation of empowered young men and women who are ready to shape their future and contribute meaningfully to society.
          </p>
        </div>

        {/* image section */}
        <div className={styles.imageSection}>
          <Image
            src="/images/hero_section_img.jpg"
            alt="About Image"
            width={800}
            height={200}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>

      </div>
  
    </div>
    
  );
};

export default AboutUs;
