import React from 'react'
import { useToggle } from 'react-hooks-lib'
import styled from 'styled-components/macro'
import uid from 'uid'
import Activity from './Activity'
import CategoryHeading from './CategoryHeading'

export default function Card({ activities, deleteActivity, category }) {
  const { on, toggle } = useToggle(false)

  const hoursSum =
    sumHoursByCategory(activities, category) % 1 !== 0
      ? sumHoursByCategory(activities, category).toFixed(1)
      : sumHoursByCategory(activities, category)

  return (
    <CardStyled onClick={toggle}>
      <CategoryHeading category={category} hoursSum={hoursSum} />
      {on && (
        <ActivityStyled>
          {activities
            .filter(activity => activity.category === category)
            .map(activity => (
              <Activity
                activity={activity}
                key={uid(32)}
                deleteActivity={deleteActivity}
              />
            ))}
        </ActivityStyled>
      )}
    </CardStyled>
  )

  function sumHoursByCategory(activities, category) {
    const sum = activities.reduce(
      (sum, activityItem) =>
        activityItem.category === category ? sum + activityItem.hours : sum,
      0
    )
    return sum
  }
}

const CardStyled = styled.div`
  margin: 19px 48px;
  background: #fff;
`

const ActivityStyled = styled.div`
  overflow-y: scroll;
  border-radius: 0 0 2px 2px;
  border: 1px solid var(--color-dark);
  box-shadow: 0 1px 2px grey;
`
