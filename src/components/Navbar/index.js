import React, { useState } from 'react'
import { NavWrapper, NavContents, LogoWrapper, LinksWrapper, Link, Logo,
HamburgerContainer, Hamburger} from './NavbarElements'
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom'
//redux test
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { loginActions } from '../../store/auth'

const Navbar = () => {
  //redux test
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.login.loggedIn)

  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
    //console.log(open)
  }

  const loginHandler = () => {
    dispatch(loginActions.setTrue({user: 'Test User'}))
  } 

  const logoutHandler = () => {
    dispatch(loginActions.setFalse())
  }

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
          {isLoggedIn ? 
            <Link to='/' onClick={logoutHandler}>Logout</Link>
            :
            <Link to='/' onClick={loginHandler}>Login</Link>
          }
          <HamburgerContainer onClick={toggleOpen} open={open}>
            <Hamburger open={open}/>
          </HamburgerContainer>
        </LinksWrapper>
      </NavContents>
    </NavWrapper>
  )
}

export default Navbar