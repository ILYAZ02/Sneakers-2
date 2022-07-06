import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import styles from './App.module.scss'
import Hompage from './components/Hompage'
import Basket from './components/Basket';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [jso,setJso] = useState([])
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json')
      const data = await resp.json()
      setJso(data)
    }
    fetchData()
  }, [])
  return (
    <BrowserRouter>
      <div className={styles.child}>
        <Header />
        <Routes>
          <Route path='/' element={<Hompage jso={jso} />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App;
