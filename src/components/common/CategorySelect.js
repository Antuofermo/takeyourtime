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
  width: 250px;
  height: 48px;
  padding: 10px;
  font-size: 10px;
  appearance: none;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right white;
  background-position-x: 215px;
`

const OptionStyled = styled.option`
  font-size: 14px;
  background: white;
  text-decoration: none;
`
