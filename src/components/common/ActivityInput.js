import React from 'react'
import styled from 'styled-components/macro'

export default function Input() {
  return (
    <InputStyled
      autoFocus
      type="text"
      name="activities"
      maxLength="60"
      placeholder="ex. Learn React"
    />
  )
}

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px 40px;
`
