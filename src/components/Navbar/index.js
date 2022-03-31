import React from 'react'
import { NavWrapper, NavContents, LogoWrapper, LinksWrapper, Link, Logo, NavBackground } from './NavbarElements'
import logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <NavWrapper>
      
      <NavContents>
        <LogoWrapper>
          <Logo src={logo}/>
          CarRent
        </LogoWrapper>
        <LinksWrapper>
          <Link to='/'>Vehicles</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contacts</Link>
        </LinksWrapper>
      </NavContents>
    </NavWrapper>
  )
}

export default Navbar