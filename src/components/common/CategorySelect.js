import React from 'react'
import styled from 'styled-components/macro'

export default function CategorySelect({ categories }) {
  return (
    <SelectStyled name="categories" id="category-select">
      {categories.map(category => (
        <OptionStyled value={category} key={category}>
          {category}
        </OptionStyled>
      ))}
    </SelectStyled>
  )
}

const SelectStyled = styled.select`
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px 40px;
  appearance: none;
`

const OptionStyled = styled.option`
  font-size: 14px;
  background: white;
  text-decoration: none;
`
