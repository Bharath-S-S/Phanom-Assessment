import React from 'react'
import styles from "./plan.module.css"
import aadarsh from "../../assets/aadarsh.png"
import rating from "../../assets/rating.png"
const Plan = () => {
  return (
    <section className={styles.plan} >
      <div>
        <h2>Adarsh</h2>
        <p>Phanom Guide</p>
        <img src={aadarsh} alt=""  height={400}/>
      </div>
      <div className={styles.planTextContainer}>
        <p>Virtual Private Server</p>
        <h2>Flexible, private, and affordable VPS Hosting</h2>
        <p>Expand major projects with hardware strategy design options.</p>
        <p>Pick Your Dream OS.</p>
        <p>Maintain Sites and Applications uptime of 99.9%.*</p>
       <p> <button>Get Plans and Pricing</button>
        <span>Buy Fully Managed VPS</span> </p>
        <p> <img src={rating} alt="" />&nbsp; &nbsp;4.6 out of 5 stars based on 110,937 reviews <strong> &nbsp;View All</strong></p>
      </div>
    </section>
  )
}

export default Plan
