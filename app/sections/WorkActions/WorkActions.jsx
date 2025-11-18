import React from "react";
import styles from "./WorkActions.module.css";
import Image from "next/image";

const WorkActions = () => {
  return (
    <div className={styles.container}>

      <h4 className={styles.subHeader}>Our Impact in the Community</h4>

      <div className={styles.galleryContainer}>
        {/* first row */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/gallery_1.jpg"
            alt="Gallery 1 works by foundasita"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/gallery_2.jpg"
            alt="Gallery 2 works by foundasita"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/gallery_3.jpg"
            alt="Gallery 3 works by foundasita"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className={styles.galleryContainer}>
        {/* second row */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/gallery_4.jpg"
            alt="Gallery 4 works by foundasita"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/gallery_5.jpg"
            alt="Gallery 5 works by foundasita"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero_section_img.jpg"
            alt="Gallery 6 works by foundasita"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkActions;
