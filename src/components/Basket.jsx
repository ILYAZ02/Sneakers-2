import React from 'react'
import styles from './Basket.module.scss'
import zakaz from '../img/zakaz.png'
import st from '../img/strel.png'
import { NavLink } from 'react-router-dom'
const Basket = () => {
  return (
    <div className={styles.zakaz}>
      <img src={zakaz} />
      <div className={styles.a}>
        <NavLink to='/'>
          <button><img src={st} alt="" />Вернуться назад</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Basket