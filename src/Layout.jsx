import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Nav'
import Banner from './components/Banner/Banner'
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
        <Background/>
        <Navbar visib='hidden'/>
        <Banner/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default Layout