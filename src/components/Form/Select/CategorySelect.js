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
  border-radius: 50px;
  padding: 13px 40px;
  margin-bottom: 20px;
  width: 250px;
  height: 48px;
  font-size: 14px;
  line-height: 14px;
  color: black;
  appearance: none;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right white;
  background-position-x: 215px;
`

const OptionStyled = styled.option`
  background: white;
  text-decoration: none;
  font-size: 12px;
  color: black;
`
