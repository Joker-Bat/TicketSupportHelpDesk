import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <div className='brand'>
          <Link to='/'>SupportDesk</Link>
        </div>
        <div className='links'>
          <Link to='/login'>
            <FaSignInAlt />
            Login
          </Link>
          <Link to='/register'>
            <FaUser />
            Register
          </Link>
          <Link to='/logout'>
            <FaSignOutAlt />
            Logout
          </Link>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
const HeaderContainer = styled.header`
  background-color: #333;
  width: 100%;
  height: 60px;
  padding: 1rem;
  color: #fff;
  padding: 1rem 2rem;
  box-sizing: border-box;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .brand {
    font-size: 1.5rem;
    font-weight: 700;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .links {
    display: flex;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 1rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
      }
    }
  }
`
