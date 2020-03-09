import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SaveBtn from './Button/SaveBtn'
import ActivityInput from './Inputs/ActivityInput'
import TimeInput from './Inputs/TimeInput'
import CategorySelect from './Select/CategorySelect'
import logo from '../img/logo.png'

export default function Form({ categories, onSubmit }) {
  const [values, setValues] = useState({
    name: '',
    category: 'Choose category',
    hours: '',
  })
  const [timeLeft, setTimeLeft] = useState(6)

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Logo src={logo} />
      <ActivityInput name="name" onChange={handleChange} value={values.name} />
      <CategorySelect
        name="category"
        onChange={handleChange}
        value={values.category}
        categories={categories}
      />
      <TimeInput name="hours" onChange={handleChange} value={values.hours} />
      <SaveBtn disabled={!isValidInput()} />
    </FormStyled>
  )

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    if (isValidInput()) {
      onSubmit({ ...values, hours: Number(values.hours) })
      setValues({ name: '', category: 'Choose category', hours: '' })
      form[0] && form[0].focus()
    }
  }

  function isValidInput() {
    const { name, category, hours } = values
    return name !== '' && category !== 'Choose category' && hours !== ''
  }

  function remainingHours(activities) {
    const sum = activities.reduce((sum, activityItem) => {
      return sum + activityItem.hours
    }, 0)
    return 24 - sum
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding-top: 10px;
  width: 100vw;
`

const Logo = styled.img`
  position: absolute;
  z-index: -1;
  width: 200px;
  height: 200px;
`
