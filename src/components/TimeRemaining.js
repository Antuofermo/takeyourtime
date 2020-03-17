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
  ) : remainingHours(activities) === 0 ? (
    <NoTimeLeftStyled>
      Day full! You don't have any hours remaining.
    </NoTimeLeftStyled>
  ) : (
    <RemovehoursStyled>
      You added too many hours to your day! Remove {hourOverflow(activities)}{' '}
      hours or more before adding a new activity.
    </RemovehoursStyled>
  )

  function remainingHours(activities) {
    const sum = activities.reduce((sum, activityItem) => {
      return sum + activityItem.hours
    }, 0)
    return 24 - sum
  }

  function hourOverflow(activities) {
    const sum = activities.reduce((sum, activityItem) => {
      return sum + activityItem.hours
    }, 0)
    return sum - 24 + 1
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
  border-radius: 4px;
  position: relative;
  z-index: 1;
  background: black;
  margin-top: 50px;
  text-align: center;
  margin: 30px;
  color: #b20238;
  user-select: none;
`
