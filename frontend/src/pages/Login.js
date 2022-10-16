import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const dispatch = useDispatch()
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const onChange = (e) => {
    console.log(e.target.value)
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }
  return (
    <>
      <LoginContainer>
      <LoginForm onSubmit={onSubmit}>
          <LoginTitle>
            <FaSignInAlt />
            Login
          </LoginTitle>
          <LoginDescription>
            Login to your account to access your dashboard
          </LoginDescription>
          <LoginInput
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
            placeholder='Email'
            required
          />
          <LoginInput
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
            placeholder='Password'
            required
          />

          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </>
  )
}

export default Login

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  background: #f5f5f5;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  padding: 3rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LoginInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`

const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background: #333;
  color: #fff;
  cursor: pointer;
`

const LoginDescription = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`
