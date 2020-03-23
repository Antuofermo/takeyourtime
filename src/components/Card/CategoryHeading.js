import React from 'react'
import styled from 'styled-components/macro'
import expandLess from '../img/expandLess.png'
import expandMore from '../img/expandMore.png'

export default function CategoryHeading({ category, hoursSum, expand }) {
  return (
    <CategoryStyled data-cy="category">
      <Arrow src={expand ? expandMore : expandLess} />
      <span>{category}</span>
      <SpanStyled>
        {hoursSum < 1 ? hoursSum * 60 : hoursSum}
        {hoursSum < 1 ? ' min' : ' h'}
      </SpanStyled>
    </CategoryStyled>
  )
}

const Arrow = styled.img`
  height: 10px;
`

const CategoryStyled = styled.h1`
  display: grid;
  grid-template-columns: 25px auto 45px;
  align-items: center;
  padding: 0 10px;
  font-size: 18px;
  height: 48px;
  margin: 0;
  background: var(--color-dark);
  color: white;
  box-shadow: 0 3px 2px goldenrod;
  border-radius: 4px 4px 0 0;
  user-select: none;
  cursor: pointer;
`

const SpanStyled = styled.span`
  font-size: 14px;
`
