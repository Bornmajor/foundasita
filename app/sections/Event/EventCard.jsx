import React from "react";
import styles from "./Event.module.css";
import { FiMapPin } from "react-icons/fi";
import Button from 'react-bootstrap/Button';

const EventCard = ({ day,month, title, description, href, location }) => {
  return (
    <div className={styles.eventCard}>

      <div className={styles.rightSection}>
        
        <div className={styles.eventDates}>
          <div className={styles.date}> {day}</div>
          <div className={styles.month}>{month}</div>

        <Button variant="outline-primary" className={[styles.customButton,styles.secondaryCtaBtn]}>
            Join
        </Button>

        </div>

        <div className={styles.eventContentSection}>

          <p className={styles.eventTitle}>{title}</p>
          <p className={styles.eventDescription}>{description}</p>

           <div className={styles.row}>
             <FiMapPin size={20}/> <p className={styles.eventLocation}>{location}</p>
           </div>
          

        </div>

      </div>

      <div className={styles.eventCta}>

        <Button variant="outline-primary" className={[styles.customButton,styles.primaryCtaBtn]}>
            Join
        </Button>
   
      </div>
    </div>
  );
};

export default EventCard;
