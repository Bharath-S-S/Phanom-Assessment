import React from 'react'
import styles from "./about.module.css"
import hero1 from '../../assets/hero1.png'
import frame2 from "../../assets/frame2.png"
const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <h1><span>Let’s innovation</span> meets your excellence</h1>
        <p>Excellence refined, innovation ignited, the future starts here</p>
        <button>Book an appointment</button>
      </div>
      <div className={styles.aboutImage}>
        <img src={hero1} alt="hero-image" className={styles.hero} height={400} width={480} />
        <img src={frame2} alt="frame2"  width={420}/>
      </div>
    </section>
  )
}

export default About
