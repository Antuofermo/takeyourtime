import React from 'react'
import styled from 'styled-components/macro'

export default function Form({ activities, setActivities }) {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled autoFocus type="text" name="activities" />
      <SaveStyled>Save</SaveStyled>
    </FormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setActivities([...activities, event.target.activities.value])
    const form = event.target
    form.reset()
    form.focus()
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const InputStyled = styled.input`
  color: #e4c026;
  background: #1a1919;
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px 40px;
`
const SaveStyled = styled.button`
  padding: 10px 50px;
  font-size: 16px;
  color: #e4c026;
  background: #1a1919;
  border-radius: 8px;
  box-shadow: 2px 2px 4px grey;
  border: 1px solid #1a1919;

  :hover {
    box-shadow: none;
  }
`
