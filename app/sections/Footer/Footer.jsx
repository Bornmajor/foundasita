import React from "react";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

/**
 *
 * @returns
 */
const Footer = () => {
  return (
    <div className={styles.container}>
      {/* section */}
      <div className={styles.section} style={{ maxWidth: "400px" }}>
        <div>
          <p className={styles.siteMapTitle}>Foundasita</p>
        </div>

        <p>
          The aim to empower youth to become resilient, innovative, and
          self-reliant leaders
        </p>
      </div>

      {/* quick links */}
      <div className={styles.section}>
        <p className={styles.siteMapTitle}>Quick Links</p>

        <p className={styles.siteMapLink}>Home</p>
        <p className={styles.siteMapLink}>About Us</p>
        <p className={styles.siteMapLink}>Our Team</p>
        <p className={styles.siteMapLink}>Our Programs</p>
      </div>

      {/* contact us */}
      <div className={styles.section}>
        <p className={styles.siteMapTitle}>Contacts</p>

        <div className={styles.siteMapRow}>
          <MdEmail size={20} />
          <p className={styles.p}>+234 901 234 5678</p>
        </div>

        <div className={styles.siteMapRow}>
          <FaPhoneAlt size={20} />
          <p className={styles.p}>fundasitafoundation@gmail.com</p>
        </div>
      </div>

      {/* social media icons */}
      <div style={styles.section}>
        <p className={styles.siteMapTitle}>Social media</p>

        <div className={styles.siteMapRow}>
          <FaSquareFacebook size={20} />
          <FaSquareFacebook size={20} />
          <FaSquareFacebook size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
