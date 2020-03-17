import React from 'react'
import styled from 'styled-components'

export default function TimeRemaining({ activities }) {
  const timeRemaining = remainingHours(activities)

  return timeRemaining >= 1 ? (
    timeLeft()
  ) : timeRemaining === 0 ? (
    <NoTimeLeftStyled>
      Day full! You don't have any hours remaining.
    </NoTimeLeftStyled>
  ) : (
    <RemovehoursStyled>
      You added too many hours to your day! Remove {hourOverflow(activities)}{' '}
      hours or more before adding a new activity.
    </RemovehoursStyled>
  )

  function timeLeft() {
    return (
      <TimeLeftStyled>
        You still have{' '}
        {timeRemaining % 1 !== 0 ? timeRemaining.toFixed(1) : timeRemaining}{' '}
        {timeRemaining === 1 ? 'hour' : 'hours'} to add to your day, use{' '}
        {timeRemaining === 1 ? 'it' : 'them'} wisely!
      </TimeLeftStyled>
    )
  }

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

const TimeLeftStyled = styled.p`
  margin-top: 50px;
  text-align: center;
  margin: 30px;
  user-select: none;
`

const NoTimeLeftStyled = styled.p`
  margin-top: 50px;
  text-align: center;
  margin: 30px;
  color: black;
  user-select: none;
`

const RemovehoursStyled = styled.div`
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
