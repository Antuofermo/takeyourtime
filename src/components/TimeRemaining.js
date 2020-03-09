import React from 'react'
import styled from 'styled-components'

export default function TimeRemaining({ remainingHours }) {
  return remainingHours >= 1 ? (
    <TimeLeftStyled>
      You still have{' '}
      {remainingHours % 1 !== 0 ? remainingHours.toFixed(1) : remainingHours}{' '}
      {remainingHours === 1 ? 'hour' : 'hours'} to add to your day, use{' '}
      {remainingHours === 1 ? 'it' : 'them'} wisely!
    </TimeLeftStyled>
  ) : (
    <TimeLeftStyled>You don't have any hours remaining</TimeLeftStyled>
  )
}

const TimeLeftStyled = styled.p`
  margin-top: 50px;
  text-align: center;
`
