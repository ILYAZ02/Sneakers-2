import React from 'react'
import styles from './Sneakers.module.scss'
const Sneakers = ({ setValue, value }) => {
  return (
    <div className={styles.poisk}>
      <h1>Все кроссовки</h1>
      <input type='text'
        placeholder='Поиск...'
        value={value}
        onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

export default Sneakers