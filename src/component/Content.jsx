import React from 'react'
import styled from '../scss/Content.module.scss'
import logoNCC from '../img/logo.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'

import Footer from './Footer'


const Content = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.main}>

        <div className={styled.top}>
            <img className={styled.logo} src={logoNCC} alt="" />
        </div>
    
        <div className={styled.gr1}>
          <div className={styled.text}>
              <h1>Lorem ipsum dolor sit asmet?</h1>
          </div>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
          </span>
        </div>

        <div className={styled.container_gr}>
            <div className={styled.gr2}>
              <div className={styled.text}>
                  <h1>Lorem ipsum dolor sit amet</h1>
              </div>
              <div className={styled.container_text_img}>
                  <img src={img1} alt="" />
                  <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at 
                  </span>
              </div>
              <span>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</span>
            </div>

            <div className={styled.gr2}>
              <div className={styled.text}>
                  <h1>Lorem ipsum dolor sit amet</h1>
              </div>
              <div className={styled.container_text_img}>
                  <img src={img2} alt="" />
                  <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at  
                  </span>
              </div>
              <span>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</span>
            </div>

            <div className={styled.gr2}>
              <div className={styled.text}>
                  <h1>Lorem ipsum dolor sit amet</h1>
              </div>
              <div className={styled.container_text_img}>
                  <img src={img3} alt="" />
                  <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at 
                  </span>
              </div>
              <span>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</span>
            </div>
            
        </div>
        
      </div>

      <Footer/>

    
    </div>

  )
}

export default Content
