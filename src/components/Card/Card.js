import React from 'react'
import uid from 'uid'
import styled from 'styled-components/macro'
import { useToggle } from 'react-hooks-lib'
import Activity from './Activity'
import Category from './CategoryHeading'

export default function Card({ activities, deleteActivity, category }) {
  const { on, toggle } = useToggle(false)
  return (
    <CardStyled key={uid(32)} onClick={toggle}>
      <Category
        category={category}
        hoursSum={
          sumHoursByCategory(activities, category) % 1 !== 0
            ? sumHoursByCategory(activities, category).toFixed(1)
            : sumHoursByCategory(activities, category)
        }
      />
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
        activityItem.category === category
          ? (sum = sum + activityItem.hours)
          : sum,
      0
    )
    return sum
  }
}

const ActivityStyled = styled.div`
  overflow-y: scroll;
  border-top: 1px solid black;
  border-radius: 0 0 2px 2px;
  border: 1px solid black;
`
const CardStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  margin: 19px 48px;
`
