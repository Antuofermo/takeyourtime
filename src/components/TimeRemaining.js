import React from 'react'
import styled from 'styled-components'

export default function TimeLeft({ activities }) {
  return (
    <PStyled>
      You still have {remainingHours(activities)} hours to add to your day, use
      it wisely!
    </PStyled>
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
