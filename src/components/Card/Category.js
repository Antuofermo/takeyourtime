import React from 'react'
import styled from 'styled-components/macro'
import Total from './Total'

export default function Category({ category, hoursSum }) {
  return (
    <CategoryStyled>
      <span>{category}</span>
      <SpanStyled>sum: {hoursSum ? hoursSum : 0}</SpanStyled>
    </CategoryStyled>
  )
}

const CategoryStyled = styled.h1`
  display: flex;
  justify-content: space-around;
  padding-top: 12px;
  font-size: 18px;
  margin: 0;
  background: #1a1919;
  color: white;
`

const SpanStyled = styled.span`
  font-size: 14px;
`
