import React from 'react'
import Content from '../components/Content';
import Sneakers from '../components/Sneakers';
import Krossovki from '../components/Krossovki';
import { useState } from 'react';
import s from './Homepage.module.scss'
const Homepage = ({ jso }) => {
    const [value, setValue] = useState('')
    const allData = jso.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    return (
        <div>
            <Content />
            <Sneakers setValue={setValue} value={value} />
            <div className={s.block}>
            {allData.map(demon => (
                <Krossovki demon={demon} key={demon.id} />
            ))}
            </div>

        </div>
    )
}

export default Homepage