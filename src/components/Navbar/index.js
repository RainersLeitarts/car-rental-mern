import React from 'react'
import { NavWrapper, NavContents, LogoWrapper, LinksWrapper, Link, Logo, NavBackground } from './NavbarElements'
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <NavWrapper>
      <NavContents>
        <LogoWrapper onClick={()=> navigate('/')}>
          <Logo src={logo}/>
          CarRent
        </LogoWrapper>
        <LinksWrapper>
          <Link to='/'>Vehicles</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contacts</Link>
          <Link to='/add_vehicle'>Add Vehicle</Link>
        </LinksWrapper>
      </NavContents>
    </NavWrapper>
  )
}

export default Navbar