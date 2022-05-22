import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MeWrapper, MeContent, UserSpec } from './MeElements'

const Me = () => {
  const [user, setUser] = useState()
  const axiosPrivate = useAxiosPrivate()

  useEffect(()=>{
    let isMounted = true
    const controller = new AbortController()

    const getMe = async () => {
      try {
        const response = await axiosPrivate.get('/users/me',
        {signal: controller.signal})
        console.log(response.data)
        isMounted && setUser(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getMe()

    return () => {
      isMounted = false
      controller.abort()
    }
  },[])

  return (
    <MeWrapper>
      <MeContent>
        {user && Object.keys(user).map(key => {
          return <UserSpec>{key + ' : ' + user[key]}</UserSpec>
        })}
      </MeContent>
    </MeWrapper>
  )
}

export default Me