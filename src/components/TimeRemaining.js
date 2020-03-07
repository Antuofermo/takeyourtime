import React from 'react'
import styled from 'styled-components'

export default function TimeRemaining({ activities }) {
  return remainingHours(activities) !== 0 ? (
    <PStyled>
      You still have {remainingHours(activities).toFixed(1)}{' '}
      {remainingHours(activities) === 1 ? 'hour' : 'hours'} to add to your day,
      use {remainingHours(activities) === 1 ? 'it' : 'them'} wisely!
    </PStyled>
  ) : (
    <PStyled>You don't have any hours remaining</PStyled>
  )

  function remainingHours(activities) {
    const sum = activities.reduce((sum, activityItem) => {
      return sum + activityItem.hours
    }, 0)
    return 24 - sum
  }
}

const PStyled = styled.p`
  margin-top: 50px;
  text-align: center;
`
