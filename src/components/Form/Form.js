import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import logo from '../img/logo.png'
import SaveBtn from './Button/SaveBtn'
import ActivityInput from './Inputs/ActivityInput'
import TimeInput from './Inputs/TimeInput'
import CategorySelect from './Select/CategorySelect'
import initialState from '../../utils'
import Confirmation from './Confirmation'

export default function Form({ categories, onSubmit }) {
  const [inputValues, setInputValues] = useState(initialState)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => setShowConfirmation(false), 500)
      return () => clearTimeout(timer)
    }
  }, [showConfirmation])

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Logo />
      <ActivityInput
        name="name"
        onChange={handleChange}
        value={inputValues.name}
      />
      <CategorySelect
        name="category"
        onChange={handleChange}
        value={inputValues.category}
        categories={categories}
      />
      <TimeInput
        name="hours"
        onChange={handleChange}
        value={inputValues.hours}
      />
      <SaveBtn disabled={!isValidInput()} />
      {showConfirmation && <Confirmation />}
    </FormStyled>
  )

  function handleChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    if (isValidInput()) {
      onSubmit({ ...inputValues, hours: Number(inputValues.hours) })
      setInputValues(initialState)
      form[0] && form[0].focus()
      setShowConfirmation(true)
    }
  }

  function isValidInput() {
    const { name, category, hours } = inputValues
    return name !== '' && category !== 'Choose category' && hours !== ''
  }
}

function Logo() {
  return <img src={logo} alt="" />
}
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding-top: 10px;
  width: 100vw;

  img {
    position: absolute;
    z-index: -1;
    width: 200px;
    height: 200px;
  }
`
