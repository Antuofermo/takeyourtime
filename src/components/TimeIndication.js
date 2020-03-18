import React from 'react'
import styled from 'styled-components'
import TimeLeft from './TimeLeft'

export default function TimeIndication({ activities }) {
  const timeRemaining = remainingHours(activities)

  return timeRemaining >= 0.5 ? (
    <TimeLeft timeRemaining={timeRemaining} />
  ) : timeRemaining === 0 ? (
    <NoTimeLeftStyled>
      Day full! You don't have any hours remaining.
    </NoTimeLeftStyled>
  ) : (
    <HourOverflow>
      You added too many hours to your day! Remove at least{' '}
      {hourOverflow(activities)} hours before adding a new activity.
    </HourOverflow>
  )

  function remainingHours(activities) {
    const sum = activities.reduce((sum, activityItem) => {
      return sum + activityItem.hours
    }, 0)
    return 24 - sum
  }

  function hourOverflow() {
    return timeRemaining * -1 + 1
  }
}

const NoTimeLeftStyled = styled.p`
  margin-top: 50px;
  text-align: center;
  margin: 30px;
  color: black;
  user-select: none;
`

const HourOverflow = styled.div`
  padding: 15px;
  border: 1px solid #b20238;
  border-radius: 4px;
  position: relative;
  z-index: 1;
  background: white;
  margin-top: 50px;
  text-align: center;
  margin: 30px;
  color: #b20238;
  user-select: none;
`
