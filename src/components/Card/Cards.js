import React from 'react'
import Activity from './Activity'
import styled from 'styled-components/macro'
import Category from './Category'
import { uid } from 'react-uid'

export default function Cards({ activities, categories }) {
  return categories.map(category => (
    <CardStyled key={uid(category)}>
      <Category category={category} />
      <ActivitySection>
        {activities
          .filter(activity => activity.category === category)
          .map(activity => (
            <Activity activity={activity} key={uid(activity)} />
          ))}
      </ActivitySection>
    </CardStyled>
  ))
}

const ActivitySection = styled.div`
  overflow-y: scroll;
  border-top: 1px solid black;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 1px 2px pink inset;
`
const CardStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  border: 1px solid black;
  margin: 30px 0;
  height: 180px;
  border-radius: 8px;
`
