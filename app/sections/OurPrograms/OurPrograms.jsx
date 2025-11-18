import React from "react";
import styles from "./OurPrograms.module.css";
import { MdGroups2,MdAddBusiness  } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";

function OurPrograms() {
  return (
    <div className={styles.container}>

        <h4 className={styles.subHeader}>Our Approach to Empowerment</h4>

      <div className={styles.innerContainer}>

       {/* card 1  */}
        <div className={styles.card}>

            {/* icon */}
           <MdGroups2 size={50}/>


            {/* title */}
            <p className={styles.cardTitle}>
                Capacity Building & Mentorship
            </p>

            {/* subtitle */}
            <p className={styles.cardSubtitle}>
                We provide targeted capacity-building programs and mentorship to equip youth with the skills, mindset, and opportunities they need to thrive.
            </p>





        </div>

         {/* card 2  */}
        <div className={styles.card}>

            {/* icon */}
           <MdAddBusiness size={50}/>


            {/* title */}
            <p className={styles.cardTitle}>
               Enterprise & Entrepreneurship
            </p>

            {/* subtitle */}
            <p className={styles.cardSubtitle}>
               We foster entrepreneurial thinking and run practical enterprise development initiatives to create pathways for economic empowerment.
            </p>





        </div>

         {/* card 3  */}
        <div className={styles.card}>

            {/* icon */}
           <CgCommunity size={50}/>


            {/* title */}
            <p className={styles.cardTitle}>
                Community Impact
            </p>

            {/* subtitle */}
            <p className={styles.cardSubtitle}>
               We champion youth-led solutions and engage in community-focused activities, including supporting underserved communities and promoting sustainable living.
            </p>





        </div>

      </div>

    </div>
  );
}

export default OurPrograms;
