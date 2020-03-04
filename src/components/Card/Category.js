import React from 'react'
import styled from 'styled-components/macro'

export default function Category({ category }) {
  return (
    <CategoryStyled>
      <TitleStyled>{category}</TitleStyled>
    </CategoryStyled>
  )
}

const TitleStyled = styled.div`
  padding: 0;
`
const CategoryStyled = styled.h1`
  padding-left: 30px;
  color: Black;
  font-size: 12px;
`
