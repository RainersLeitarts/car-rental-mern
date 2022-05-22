import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterWrapper, FormWrapper, FormInput, FormButton, FormTitle,
RegisterLink } from './registerElements'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const navigator = useNavigate()

  const inputHandler = (e, type) => {
    switch(type){
      case 'name':
        setName(e.target.value.trim())
        break
      case 'surname':
        setSurname(e.target.value.trim())
        break
      case 'email':
        setEmail(e.target.value.trim())
        break
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

    axios.post('http://127.0.0.1:5000/users', {
      name : name,
      surname : surname,
      email : email,
      username: username,
      password : password
    }, {headers: {'Content-Type': 'application/json'}}).then(res => {
      console.log(res)
    }).finally(() => {
      navigator('/login')
    })
  }

  return (
    <RegisterWrapper>
      <FormWrapper onSubmit={submitHandler}>
        <FormTitle>Register</FormTitle>
        <FormInput onChange={e => {inputHandler(e, 'name')}} placeholder="Name"/>
        <FormInput onChange={e => {inputHandler(e, 'surname')}} placeholder="Surname"/>
        <FormInput onChange={e => {inputHandler(e, 'email')}} placeholder="E-Mail"/>
        <FormInput onChange={e => {inputHandler(e, 'username')}} placeholder="Username"/>
        <FormInput onChange={e => {inputHandler(e, 'password')}} placeholder="Password" type = "password"/>
        <FormButton>Register</FormButton>
        <RegisterLink onClick={() => {navigator('/login')}}>Already have an account?</RegisterLink>
      </FormWrapper>
    </RegisterWrapper>
  )
}

export default RegisterPage