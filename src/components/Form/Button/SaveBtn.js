import React from 'react'
import styled from 'styled-components/macro'

export default function SaveBtn() {
  return <SaveBtnStyled>Save</SaveBtnStyled>
}

const SaveBtnStyled = styled.button`
  padding: 10px 50px;
  font-size: 16px;
  color: #e4c026;
  background: #1a1919;
  border-radius: 50px;
  box-shadow: 2px 2px 4px grey;
  border: 1px solid #1a1919;
  cursor: pointer;

  :hover {
    box-shadow: none;
  }
`
