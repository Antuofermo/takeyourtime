import React from 'react'
import Activity from './Activity'
import styled from 'styled-components/macro'
import Category from './Category'

export default function Cards({ activities, categories }) {
  return categories.map(category => (
    <CardStyled key={category}>
      <Category category={category} />
      {activities
        .filter(activity => activity.category === category)
        .map(activity => (
          <Activity activity={activity} />
        ))}
    </CardStyled>
  ))
}

const CardStyled = styled.div`
  border: 1px solid black;
  overflow-y: scroll;
  margin-top: 30px;
  height: 150px;
  border-radius: 8px;
`
