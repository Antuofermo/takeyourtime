import React from 'react'
import styled from 'styled-components/macro'
import SaveBtn from './common/SaveBtn'

export default function Form({ activities, setActivities }) {
  return (
    <FormStyled onSubmit={handleSubmit} data-testid="form">
      <InputStyled
        autoFocus
        type="text"
        name="activities"
        maxLength="100"
        placeholder="ex. Learn React"
      />
      <SaveBtn />
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
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px 40px;
`
