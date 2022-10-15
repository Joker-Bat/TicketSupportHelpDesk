import React, { useState } from 'react'
import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const { name, email, password, password2 } = formData
  const dispatch = useDispatch()
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }
  return (
    <>
      <RegisterContainer>
        <RegisterForm onSubmit={onSubmit}>
          <RegisterTitle>
            <FaUserAlt />
            Register {user}
          </RegisterTitle>
          <RegisterDescription>
            Register to create your account
          </RegisterDescription>
          <RegisterInput
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
            placeholder='Name'
            required
          />
          <RegisterInput
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
            placeholder='Email'
            required
          />
          <RegisterInput
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
            placeholder='Password'
            required
          />
          <RegisterInput
            type='password'
            name='password2'
            id='password2'
            value={password2}
            onChange={onChange}
            placeholder='Confirm Password'
            required
          />
          <RegisterButton onSubmit={onSubmit}>Register</RegisterButton>
        </RegisterForm>
      </RegisterContainer>
    </>
  )
}

export default Register

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  background: #f5f5f5;
`

const RegisterForm = styled.form`
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

const RegisterDescription = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const RegisterTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`

const RegisterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: #333;
  }

  &::placeholder {
    color: #999;
  }
`

const RegisterButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;

  background: #333;
  color: #fff;
  cursor: pointer;
`
