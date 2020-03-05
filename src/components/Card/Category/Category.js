import React from 'react'
import styled from 'styled-components/macro'

export default function Category({ category }) {
  return (
    <CategoryStyled>
      <TitleStyled>{category}</TitleStyled>
    </CategoryStyled>
  )
}

const TitleStyled = styled.span`
  position: absolute;
  z-index: 1;
`
const CategoryStyled = styled.h1`
  padding: 12px 30px;
  font-size: 18px;
  margin: 0;
  background: #1a1919;
  color: white;
`
