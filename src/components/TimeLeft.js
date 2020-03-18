import React from 'react'
import styled from 'styled-components/macro'

export default function TimeLeft({ timeRemaining }) {
  return (
    <TimeLeftStyled>
      You still have{' '}
      {timeRemaining % 1 ? timeRemaining.toFixed(1) : timeRemaining}{' '}
      {timeRemaining === 1 ? 'hour' : 'hours'} to add to your day, use{' '}
      {timeRemaining === 1 ? 'it' : 'them'} wisely!
    </TimeLeftStyled>
  )
}

const TimeLeftStyled = styled.p`
  margin-top: 50px;
  text-align: center;
  margin: 30px;
  user-select: none;
`
