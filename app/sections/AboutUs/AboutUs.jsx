import React from "react";
import Image from "next/image";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container} id="aboutus">
   
      <div className={styles.innerContainer}>
        
        {/* text section */}
        <div className={styles.textSection}>
        
            <p className={styles.subHeader}>Transforming Potential into Purpose</p>
         

          <p className={styles.description}>
            Rooted in the belief that every young person possesses unique capabilities, Fundasita Foundation nurtures a culture of entrepreneurship, creativity, and community impact.
            We are dedicated to raising a generation of empowered young men and women who are ready to shape their future and contribute meaningfully to society.
          </p>
        </div>

        {/* image section */}
        <div className={styles.imageSection}>
          <Image
            src="/images/gallery_1.jpg"
            alt="About Image"
            width={800}
            height={200}
            className={styles.aboutImg}
          />
        </div>

      </div>
  
    </div>
    
  );
};

export default AboutUs;
