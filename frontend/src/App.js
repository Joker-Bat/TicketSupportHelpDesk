import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import styled from 'styled-components'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <ToastContainer
          autoClose={1000}
          bodyStyle={{
            fontSize: '1.2rem',
          }}
        />
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  background-color: #f4f4f4;
  height: 100vh;
  position: relative;

  width: 100vw;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-weight: 700;
  // short cut for display: flex; justify-content: center; align-items: center;

  display: grid;
  place-items: start center;
  box-sizing: border-box;
`
