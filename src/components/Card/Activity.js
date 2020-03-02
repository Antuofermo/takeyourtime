import React from 'react'
import styled from 'styled-components/macro'

export default function Activity({ activities }) {
  return (
    <CardStyled>
      <ListStyled>
        {activities.map(activity => (
          <ActivityStyled>{activity}</ActivityStyled>
        ))}
      </ListStyled>
    </CardStyled>
  )
}

const ListStyled = styled.ul`
  padding: 0;
`

const ActivityStyled = styled.li`
  list-style: none;
`
const CardStyled = styled.div`
  display: flex;
  justify-content: center;
`
