import React from "react";
import styles from "./Event.module.css";
import EventCard from "./EventCard";

const Event = () => {
  return (
    <div className={styles.container}>

      <div className={styles.innerContainer}>

        <div className={styles.textSection}>
          <p className={styles.subHeader}>
            Empowering Tezo: Events & Ongoing Programs
          </p>

          <p className={styles.description}>
           We believe true empowerment goes beyond the classroom, equipping youth with the skills to thrive through sports, environmental stewardship, and practical enterprise. 
          </p>
        </div>


       {/* event come here */}
        <div className={styles.eventContainer}>

            {/* event card */}
            <EventCard 
            day="12"
            month="Aug"
            title="Tezo Community Tournament"
            description="Our ladies' team takes the field to promote unity, sportsmanship, and female empowerment, creating a safe platform for young talent to shine within the Tezo community."
            location="Kilifi Town Center, Kilifi, Kenya"
            />

             {/* event card */}
            <EventCard 
            day="24"
            month="Aug"
            title="Green Future Initiative & Tree Planting"
            description="In partnership with the Blueheart Movement, we are driving climate action through tree-planting exercises and teaching young farmers innovative agricultural techniques for sustainable living."
            location="Mnarani, Kilifi County, Kenya"
            />

             
          


            </div>

      </div>
    </div>
  );
};

export default Event;
