import React, { useEffect, useState } from 'react'
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
import useAdminCheck from '../../hooks/useAdminCheck'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const axiosPrivate = useAxiosPrivate()

  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.user.user.accessToken)
  console.log(accessToken)
  const userRole = useSelector(state => state.user.user.role) === 'admin' ? true : false

  const toggleOpen = () => {
    setOpen(!open)
  }

  //put this in a hook
  // useEffect(async () => {
  //   // const response = await axiosPrivate.get('/users/isAdmin')

  //   // setIsAdmin(response.status === 204)
  // }, [isAdmin])


  const logoutHandler = () => {
    axios.get('http://127.0.0.1:5000/users/logout', { withCredentials: true })
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
          {userRole && <Link to='/add_vehicle'>Add Vehicle</Link>}
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