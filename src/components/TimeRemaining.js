import React from 'react'
import styled from 'styled-components'

export default function TimeRemaining({ activities }) {
  return remainingHours(activities) >= 1 ? (
    <TimeLeftStyled>
      You still have{' '}
      {remainingHours(activities) % 1 !== 0
        ? remainingHours(activities).toFixed(1)
        : remainingHours(activities)}{' '}
      {remainingHours(activities) === 1 ? 'hour' : 'hours'} to add to your day,
      use {remainingHours(activities) === 1 ? 'it' : 'them'} wisely!
    </TimeLeftStyled>
  ) : (
    <TimeLeftStyled>You don't have any hours remaining</TimeLeftStyled>
  )
  function remainingHours(activities) {
    const sum = activities.reduce((sum, activityItem) => {
      return sum + activityItem.hours
    }, 0)
    return 24 - sum
  }
}

const TimeLeftStyled = styled.p`
  margin-top: 50px;
  text-align: center;
`
