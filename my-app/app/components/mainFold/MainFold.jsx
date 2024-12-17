import React from 'react'
import Login from './login/Login'
import Main_Carousel from './main_carousel/Main_Carousel'

const MainFold = () => {
  return (
    <div className=' flex items-center justify-center flex-col custom_margin'>
        <Login />
        <Main_Carousel />
    </div>
  )
}

export default MainFold