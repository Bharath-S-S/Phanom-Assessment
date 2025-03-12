import React from 'react'
import logo from "../../assets/logo.png"
import styles from "./navbar.module.css"
import frame1 from "../../assets/frame1.png"
import menu from "../../assets/menu.png"
const Navbar = () => {
  return (
    <>
    
    
      <nav className={styles.nav}>
        <div>
          <img src={logo} alt="logo" height={40} width={180}/>
          <img
            src={menu}
            alt="menu"
            className={styles.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div>
          <ul className={styles.list}>
            <li>Service</li>
            <li>Hire Indian Talent</li>
            <li>Our portfolio</li>
            <li>Case Study</li>
            <li><button>Book an appointment</button></li>
            <li> <img src={frame1} alt="frame1"  className={styles.frame1}/></li>
          </ul>
         
        </div>
      </nav>
    </>
  )
}

export default Navbar
