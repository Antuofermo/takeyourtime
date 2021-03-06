import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ onChange, value }) {
  return (
    <InputStyled
      value={value}
      name="name"
      onChange={onChange}
      autoFocus
      type="text"
      maxLength="60"
      minLength="3"
      placeholder="ex. Learn React"
    />
  )
}

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 50px;
  padding: 15px 40px;
  margin-bottom: 20px;
  width: 300px;
  height: 48px;
  font-size: 15px;

  ::placeholder {
    color: black;
    font-size: 14px;
  }
`
