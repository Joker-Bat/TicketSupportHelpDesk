import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <TicketHome>
        <div className='container'>
          <Title>
            <h3>What do you need help with ?</h3>
            <p>Please choose an option from the Below</p>
          </Title>
          <ButtonOptions>
            <Link to='/new-ticket'>
              <Button className='button1'>
                <FaQuestionCircle />
                Create a New Ticket
              </Button>
            </Link>
            <Link to='/tickets'>
              <Button className='button2'>
                <FaTicketAlt />
                Check Ticket Status
              </Button>
            </Link>
          </ButtonOptions>
        </div>
      </TicketHome>
    </>
  )
}

export default Home

const TicketHome = styled.div`
  background-color: #f4f4f4;
  height: calc(100vh - 60px);
  width: 100vw;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0rem;
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`

const ButtonOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }
  .button1:hover {
    color: #f4f4f4;
    background-color: #000;
  }
  .button2:hover {
    color: #f4f4f4;
    background-color: #000;
  }
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 300px;
  height: 100px;
  background-color: #f4f4f4;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
`
