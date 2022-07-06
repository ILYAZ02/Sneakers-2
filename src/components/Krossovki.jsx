import React from 'react'
import { useState } from 'react'
import styles from '../components/Krossovki.module.scss'
import likeImg from '../img/like.svg'
import likedImg from '../img/liked.svg'
import plusImg from '../img/plus.svg'
import plusedImg from '../img/plused.svg'
const Krossovki = ({ demon }) => {

  const [like, setLike] = useState(false)
  const [plus, setPlus] = useState(false)

 
  function amClick() {
    setPlus(!plus)
  }
  function anClick() {
    setLike(!like)
    
  }
  return (
    <div className={styles.kros}>
      <div className={styles.kross}>
        <img src={demon.image} />
        <h3>{demon.name}</h3>
        <div className={styles.flex}>
          <h4>{demon.id}</h4>
          <h5>{demon.price}</h5>
          <div className={styles.like}>
            <img
              style={{ width: '32px' }}
              onClick={anClick}
              src={like ? likedImg : likeImg}
              alt="like" />

          </div>
          <div className={styles.plus}>
            <img style={{ width: '32px' }}
            onClick={amClick}
            src={plus ? plusedImg : plusImg}
            alt="plus"/>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Krossovki