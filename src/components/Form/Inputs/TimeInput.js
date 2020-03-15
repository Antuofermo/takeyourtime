import React from 'react'
import styled from 'styled-components'

export default function TimeInput({ onChange, value }) {
  return (
    <InputStyled
      value={value}
      name="hours"
      onChange={onChange}
      placeholder="0.0"
      id="hours-input"
      type="number"
      step="0.50"
      min="0.50"
      max="24"
    />
  )
}

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 50px;
  padding: 15px 40px;
  margin-bottom: 20px;
  width: 200px;
  height: 48px;
  font-size: 15px;

  ::placeholder {
    text-align: center;
  }
`
