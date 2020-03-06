import React from 'react'
import styled from 'styled-components/macro'

export default function Activity({ activity }) {
  return (
    <ListStyled>
      <NameStyled>{activity.name}</NameStyled>
      <SpanStyled>({activity.hours} hours)</SpanStyled>
    </ListStyled>
  )
}

const ListStyled = styled.ul`
  display: flex;
  padding: 0;
`

const NameStyled = styled.li`
  list-style: none;
  padding-left: 50px;
  font-size: 16px;
`

const SpanStyled = styled.span`
  padding-left: 10px;
`
