import React from 'react'
import styled from 'styled-components/macro'

export default function CategoryHeading({ category, hoursSum }) {
  return (
    <CategoryStyled>
      <span>{category}</span>
      <SpanStyled>
        {hoursSum ? hoursSum : '0'} {hoursSum < 1 ? 'min' : 'h'}
      </SpanStyled>
    </CategoryStyled>
  )
}

const CategoryStyled = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 18px;
  height: 48px;
  margin: 0;
  background: #1a1919;
  color: white;
  box-shadow: 0 3px 2px goldenrod;
  border-radius: 4px 4px 0 0;
  user-select: none;
  cursor: pointer;
`

const SpanStyled = styled.span`
  font-size: 14px;
`
