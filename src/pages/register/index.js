import React, { useState } from 'react'
import { RegisterWrapper, FormWrapper, FormInput, FormButton } from './registerElements'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  const inputHandler = (e, type) => {
    switch(type){
      case 'name':
        setName(e.target.value)
        break
      case 'surname':
        setSurname(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'username':
        setUsername(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
    }    
  }

  return (
    <RegisterWrapper>
      <FormWrapper>

        <FormInput onChange={e => {inputHandler(e, 'name')}} placeholder="Name"/>
        <FormInput onChange={e => {inputHandler(e, 'surname')}} placeholder="Surname"/>
        <FormInput onChange={e => {inputHandler(e, 'email')}} placeholder="E-Mail"/>
        <FormInput onChange={e => {inputHandler(e, 'username')}} placeholder="Username"/>
        <FormInput onChange={e => {inputHandler(e, 'password')}} placeholder="Password"/>
        <FormButton>Register</FormButton>
      </FormWrapper>
    </RegisterWrapper>
  )
}

export default RegisterPage