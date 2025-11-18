import styles from "./OurTeam.module.css";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textHeaderContainer}>
          <p className={styles.titleText}>Meet the Team</p>
          <p className={styles.subHeader}>The Faces of Fundasita Foundation</p>
        </div>

        {/* Horizontal scroll wrapper */}
        <div className={styles.profilesRowWrapper}>
          <div className={styles.profilesRow}>
            {/* Profile Card 1 */}
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gallery_1.jpg"
                  alt="Jim Thoya"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={styles.profileName}>Jim Thoya</p>
              <p className={styles.profilePosition}>Founder</p>
            </div>

            {/* Profile Card 2 */}
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gallery_1.jpg"
                  alt="Jane Doe"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={styles.profileName}>Jane Doe</p>
              <p className={styles.profilePosition}>Program Manager</p>
            </div>

            {/* Profile Card 3 */}
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gallery_1.jpg"
                  alt="John Smith"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={styles.profileName}>John Smith</p>
              <p className={styles.profilePosition}>Coordinator</p>
            </div>

              {/* Profile Card 3 */}
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gallery_1.jpg"
                  alt="John Smith"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={styles.profileName}>John Smith</p>
              <p className={styles.profilePosition}>Coordinator</p>
            </div>

              {/* Profile Card 3 */}
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gallery_1.jpg"
                  alt="John Smith"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={styles.profileName}>John Smith</p>
              <p className={styles.profilePosition}>Coordinator</p>
            </div>

              {/* Profile Card 3 */}
            <div className={styles.profileCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/gallery_1.jpg"
                  alt="John Smith"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={styles.profileName}>John Smith</p>
              <p className={styles.profilePosition}>Coordinator</p>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
