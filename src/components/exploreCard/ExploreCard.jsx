import React from "react";
import styles from "./exploreCard.module.css";
import menuIcon from "../../assets/menu.png"; // ✅ Import image properly

const ExploreCard = ({ title, subtitle, appointments, services ,image ,bgGradient}) => {
  return (
    <section className={styles.exploreCard}   >
      <div className={styles.cardHead} style={{ background: bgGradient }} >
        <h2>{title}</h2>  
        <p className={styles.cardHeadPara}>{subtitle}</p>
        <img src={image} alt="Menu Icon" height={30} width={30}/>
      </div>
      <div className={styles.cardBottom} style={{backgroundColor:"white"}}>
        <p className={styles.cardBottomPara1}>{appointments}</p>
        <p className={styles.cardBottomPara2}>{services}</p>
        <button className={styles.cardBottomBtn}>Learn More</button>
      </div>
    </section>
  );
};

export default ExploreCard;
