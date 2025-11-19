import React from "react";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

/**
 *
 * @returns
 */
const Footer = () => {
  //const icon size
  const iconSize = 25;
  return (
    <div className={styles.container} id="footer">
      {/* section */}
      <div className={styles.section} style={{ maxWidth: "400px" }}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/app_black_logo.png"
            alt="App logo"
            width={55}
            height={50}
            className={styles.appLogo}
          />
          <p className={styles.siteMapTitle}>Fundasita</p>
        </div>

        <p className={styles.motto}>
          The aim to empower youth to become resilient, innovative, and
          self-reliant leaders
        </p>
      </div>

      {/* quick links */}
      <div className={styles.section}>
        <p className={styles.siteMapTitle}>Quick Links</p>

        <Link className={styles.siteMapLink} href="#aboutus">
          About us
        </Link>
        <Link className={styles.siteMapLink} href="#ourteam">
          Our Team
        </Link>
        <Link className={styles.siteMapLink} href="#works">
          Our Impact
        </Link>
        <Link className={styles.siteMapLink} href="#ourprograms">
          Our Programs
        </Link>
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
          <Link href="#" className={styles.iconLink}>
            <FaSquareFacebook size={iconSize} />
          </Link>
          <Link href="#" className={styles.iconLink}>
            {" "}
            <FaSquareFacebook size={iconSize} />
          </Link>
          <Link href="#" className={styles.iconLink}>
            <FaSquareFacebook size={iconSize} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
