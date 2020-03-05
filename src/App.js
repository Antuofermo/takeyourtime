import React, { useState } from 'react'
import Form from './components/Form/Form'
import Cards from './components/Card/Cards'
import styled from 'styled-components/macro'

function App() {
  const [activities, setActivities] = useState([
    { category: 'Professional time', name: 'Work' },
    { category: 'Obligatory time', name: 'Sleep' },
    { category: 'Obligatory time', name: 'Eat' },
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
      <Cards activities={activities} categories={categories} />
    </>
  )
}

export default App

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 21px;
`
