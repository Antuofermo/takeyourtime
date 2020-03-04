import React from 'react'
import styled from 'styled-components/macro'

export default function Activity({ activity }) {
  return (
    <ListStyled>
      <ActivityStyled key={activity.name}>{activity.name}</ActivityStyled>
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  padding: 0;
`

const ActivityStyled = styled.li`
  list-style: none;
  padding-left: 50px;
  font-size: 16px;
`
