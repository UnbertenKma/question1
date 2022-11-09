import React from 'react'
import styled from '../scss/Sidebar.module.scss'

const Sidebarr = () => {
  return (
    <div className={styled.main}>
      <div className={styled.card}>
        <div className={styled.item}>
            <span className={styled.text}>Home</span>
        </div>
      </div>

      <div className={styled.card}>
        <div className={styled.item}>
            <span className={styled.text}>Service</span>
        </div>
      </div>

      <div className={styled.card}>
        <div className={styled.item}>
            <span className={styled.text}>News</span>
        </div>
      </div>

      <div className={styled.card}>
        <div className={styled.item}>
            <span className={styled.text}>Blog</span>
        </div>
      </div>

      <div className={styled.card}>
        <div className={styled.item}>
            <span className={styled.text}>Contact</span>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebarr
