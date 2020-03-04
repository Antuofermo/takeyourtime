import React from 'react'
import Activity from './Activity'
import styled from 'styled-components/macro'
import Category from './Category'

export default function Cards({ activities, categories }) {
  return categories.map(category => (
    <CardStyled key={category}>
      <Category category={category} />
      <ActivitySection>
        {activities
          .filter(activity => activity.category === category)
          .map(activity => (
            <Activity activity={activity} />
          ))}
      </ActivitySection>
    </CardStyled>
  ))
}

const ActivitySection = styled.div`
  overflow-y: scroll;
`
const CardStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  border: 1px solid black;
  margin: 30px 0;
  height: 150px;
  border-radius: 8px;
`
