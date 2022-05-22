import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/user'
import { RegisterWrapper, FormWrapper, FormInput, FormButton, FormTitle, RegisterLink } from '../register/registerElements'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const navigator = useNavigate()

  const inputHandler = (e, type) => {
    switch (type) {
      case 'username':
        setUsername(e.target.value.trim())
        break
      case 'password':
        setPassword(e.target.value.trim())
        break
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post('http://127.0.0.1:5000/users/login', {
      "username": username,
      "password": password
    }, {withCredentials: true}).then(res => {
      console.log(res.data)
      dispatch(userActions.setUser({username: res.data.username, role: res.data.role, accessToken: res.data.accessToken}))
      navigator('/')
    })
  }

  return (
    <RegisterWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <FormTitle>Login</FormTitle>
        <FormInput onChange={e => { inputHandler(e, 'username') }} placeholder="Username" />
        <FormInput onChange={e => { inputHandler(e, 'password') }} placeholder="Password" type="password" />
        <FormButton >Login</FormButton>
        <RegisterLink onClick={() => {navigator('/register')}}>Don't have an account yet?</RegisterLink>
      </FormWrapper>
    </RegisterWrapper>
  )
}

export default LoginPage