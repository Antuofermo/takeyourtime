import React from 'react'
import styled from 'styled-components/macro'
import SaveBtn from './common/SaveBtn'
import CategoryBtn from './common/CategorySelect'
import ActivityInput from './common/ActivityInput'

export default function Form({ activities, setActivities, categories }) {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <ActivityInput />
      <CategoryBtn categories={categories} />
      <SaveBtn />
    </FormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    setActivities([
      ...activities,
      { name: form.activities.value, category: form.categories.value },
    ])
    form.reset()
    form.focus()
    console.log(activities)
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
