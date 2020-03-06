import React, { useState } from 'react'
import Form from './components/Form/Form'
import Cards from './components/Card/Cards'
import styled from 'styled-components/macro'
import TimeRemaining from './components/TimeRemaining'

function App() {
  const [activities, setActivities] = useState([
    { category: 'Professional time', name: 'Work', hours: 6 },
    { category: 'Obligatory time', name: 'Sleep', hours: 8 },
    { category: 'Obligatory time', name: 'Eat', hours: 2 },
  ])
  const categories = [
    'Professional time',
    'Obligatory time',
    'Personal time',
    'Self time',
    'Non-productive time',
  ]

  return (
    <>
      <HeaderStyled>Add your activities</HeaderStyled>
      <Form
        stateActivities={activities}
        categories={categories}
        setActivities={setActivities}
      />
      <TimeRemaining activities={activities} />
      <Cards activities={activities} categories={categories} />
    </>
  )
}

export default App

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 21px;
`
