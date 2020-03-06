import React from 'react'
import styled from 'styled-components/macro'
import SaveBtn from './Button/SaveBtn'
import ActivityInput from './Inputs/ActivityInput'
import TimeInput from './Inputs/TimeInput'
import CategorySelect from './Select/CategorySelect'

export default function Form({ stateActivities, setActivities, categories }) {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <ActivityInput />
      <CategorySelect categories={categories} />
      <TimeInput />
      <SaveBtn />
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
        hours: form.hours.value,
      },
    ])
    form.reset()
    form.focus()
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
