import React from 'react'
import styled from 'styled-components/macro'

export default function SaveBtn({ disabled }) {
  return <SaveBtnStyled disabled={disabled}>Save</SaveBtnStyled>
}

const SaveBtnStyled = styled.button`
  padding: 10px 50px;
  font-size: 18px;
  color: #e4c026;
  background: White;
  border-radius: 50px;
  box-shadow: 2px 2px 4px grey;
  border: 1px solid white;
  cursor: pointer;

  :hover {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.6;
    box-shadow: none;
  }
`
