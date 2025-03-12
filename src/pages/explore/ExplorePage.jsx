import React from 'react'
import styles from "./explorePage.module.css"
import digitalmarketingicon from "../../assets/digitalmarketing.png"
import containerbottom from "../../assets/containerbottomicon.png"
import ExploreCard from '../../components/exploreCard/ExploreCard'
import seo from "../../assets/seo.png"
import semailIcon from "../../assets/semail.png"
import ppc from "../../assets/ppc.png"
import ytIcon from "../../assets/ytkids.png"
const ExplorePage = () => {
  return (
    <section>
      <div className={styles.explorePageContainer}>
        <div className={styles.exploreText}>
        <h1 className={styles.exploreHeading}>Explore our Service</h1>
        <p className={styles.explorePara}>Explore our service and discover solutions designed to meet your 
          unique needs. With a focus on quality and innovation, we turn your vision into reality.</p>
          <button>Book an appointment</button>
      </div>
      <div className={styles.exploreCardSection}>
        <div>
          <img src={digitalmarketingicon} alt="digital-marketing"  height={50} width={50}/>
          <span>Digitial Marketing</span>
          <p>Keep your lawn in top shape without lifting a finger and boost the appearance of your property.</p>
        </div>
        <div className={styles.exploreCardContainer}>
        <ExploreCard
            title="Seo"
            subtitle="Search Engine Optimization"
            appointments="240k+ Appointment Booked Today"
            services="Technical SEO | On-Page SEO | Off-Page SEO | Local SEO"
            image={seo}
            bgGradient="linear-gradient(89.92deg, #667EEA 0.08%, #764BA2 99.93%)"
          />
          <ExploreCard
            title="Social"
            subtitle="Media Marketing"
            appointments="240k+ Appointment Booked Today"
            services="Facebook | Instagram | X | LinkedIn | Pinterest"
            image={semailIcon}
            bgGradient="linear-gradient(89.92deg, #4B6CB7 0.08%, #243B55 99.93%)"
          />
          <ExploreCard
            title="PPC"
            subtitle="Pay Per Click"
            appointments="240k+ Appointment Booked Today"
            services="Search Ads | Display Ads | Demand Gen PMax Ads | Video Ads | Lead Generation"
            image={ppc}
            bgGradient="linear-gradient(89.92deg, #141E30 0.08%, #243B55 99.93%)"

          />
          <ExploreCard
            title="YouTube"
            subtitle="Marketing"
            appointments="240k+ Appointment Booked Today"
            services="Channel SEO | Skip/Non-Skippable Ads | Increase Subscriber & Views"
            image={ytIcon}
            bgGradient="linear-gradient(89.92deg, #FF00FF 0.08%, #FF6600 99.93%)"

          />
        </div>
        <div>
          <img src={containerbottom} alt="container-bottom" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default ExplorePage
