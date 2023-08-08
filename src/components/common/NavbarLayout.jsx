import React from 'react'
import Navbar from './Navbar'
import BottomLine from './BottomLine'

const NavbarLayout = ({children}) => {
  return (
    <div className=" py-7 px-5 sm:px-8 md:px-20">
        <Navbar/>
        {children}
        <BottomLine/>
    </div>
  )
}

export default NavbarLayout