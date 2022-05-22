import React, { useState } from 'react'
import {
  NavWrapper, NavContents, LogoWrapper, LinksWrapper, Link, Logo,
  HamburgerContainer, Hamburger
} from './NavbarElements'
import logo from '../../images/logo.svg'
import { useNavigate } from 'react-router-dom'
//redux test
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/user'
import axios from 'axios'

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.user.user.accessToken)
  const isAdmin = useSelector(state => state.user.user.role) === 'admin' ? true : false

  const toggleOpen = () => {
    setOpen(!open)
  }

  const logoutHandler = () => {
    axios.get('http://127.0.0.1:5000/users/logout', {withCredentials: true}).finally(res => {
      
    })
    dispatch(userActions.removeUser())
  }


  return (
    <NavWrapper>
      <NavContents>
        <LogoWrapper onClick={() => navigate('/')}>
          <Logo src={logo} />
          CarRent
        </LogoWrapper>
        <LinksWrapper>
          <Link to='/'>Vehicles</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contacts</Link>
          {accessToken && <Link to='/me'>My Account</Link>}
          {isAdmin && <Link to='/add_vehicle'>Add Vehicle</Link>}
          {accessToken ? <Link onClick={logoutHandler} to='/'>Logout</Link> : <Link to='/login'>Sign in</Link>}
          <HamburgerContainer onClick={toggleOpen} open={open}>
            <Hamburger open={open} />
          </HamburgerContainer>
        </LinksWrapper>
      </NavContents>
    </NavWrapper>
  )
}

export default Navbar