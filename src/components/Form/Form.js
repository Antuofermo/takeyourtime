import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SaveBtn from './Button/SaveBtn'
import ActivityInput from './Inputs/ActivityInput'
import TimeInput from './Inputs/TimeInput'
import CategorySelect from './Select/CategorySelect'

export default function Form({ stateActivities, setActivities, categories }) {
  const [disable, setDisable] = useState(true)
  return (
    <FormStyled onSubmit={handleSubmit}>
      <ActivityInput onChange={handleChange} />
      <CategorySelect categories={categories} />
      <TimeInput />
      <SaveBtn disable={disable} />
    </FormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    setActivities([
      ...stateActivities,
      {
        name: form.activities.value,
        category: form.categories.value,
        hours: Number(form.hours.value),
      },
    ])
    form.reset()
    form.focus()
  }

  function handleChange(event) {
    event.target.value === '' ? setDisable(true) : setDisable(false)
    console.log(event.target.value)
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
