import React from 'react'
import Dropdown4 from './Dropdown'

import { Link,NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-nav-img bg-cover ">
      <div className=" mx-auto flex flex-wrap p-3 justify-between backdrop-blur-sm bg-black bg-opacity-30 flex-row">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src='/logo.png' className=" ml-10 ssm:ml-0 w-20 h-20 text-black p-2 " viewBox="0 0 24 24"/>
          <span className="ml-3 text-xl font-poppins font-bold text-white">SHUNYA LAB</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mmd:hidden text-white">
          <NavLink to="/" className={({isActive})=>`mr-5 hover:text-green-300 font-medium duration-500  ${isActive ? " text-green-300":""}`}>HOME</NavLink>
          <NavLink to="/team" className={({isActive})=>`mr-5 hover:text-green-300 font-medium duration-500  ${isActive ? " text-green-300":""}`}>TEAM</NavLink>
          <NavLink to="/publications" className={({isActive})=>`mr-5 hover:text-green-300 font-medium duration-500  ${isActive ? " text-green-300":""}`}>PUBLICATIONS</NavLink>
          <NavLink to="/contact" className={({isActive})=>`mr-5 hover:text-green-300 font-medium duration-500  ${isActive ? " text-green-300":""}`}>CONTACT</NavLink>
        </nav>
        <Dropdown4/>
      </div>
      
    </header>
  )
}

export default Navbar