import React from 'react'
import styled from 'styled-components/macro'

export default function AppDescription() {
  return (
    <Description>
      <p>
        Take your Time helps you schedule and categorize your daily activities.
        You can finally do what you never thought you had time for!
      </p>
      <p>
        Learn to play an instrument, read that book, plan your next trip, create
        a new business idea and so many other things you always wanted to do.
      </p>
      <p>Check below the different categories:</p>
    </Description>
  )
}

const Description = styled.div`
  padding: 0 20px;
`
