import React from 'react'
import logo from '../img/logo.svg'
import icon from '../img/Iconka.svg'
import serdech from '../img/Vector.svg'
import cont from '../img/Union.svg'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className={styles.menu}>
      <img src={logo} />
      <div className={styles.stoim}>
        <NavLink to='basket'>
          <img src={icon} />
        </NavLink>
        <p>2000</p>
        <span>сом</span>
        <div className={styles.icon}>
          <img src={serdech} />
          <img src={cont} />
        </div>

      </div>
      <div className={styles.hr}></div>
    </div>

  )
}

export default Header