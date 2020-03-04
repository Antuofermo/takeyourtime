import React, { useState } from 'react'
import Form from './components/Form'
import Card from './components/Card/Cards'
import styled from 'styled-components/macro'

function App() {
  const [activities, setActivities] = useState([])
  const categories = [
    'Professional time',
    'Obligatory time',
    'Personal time',
    'Self time',
    'Non-productive time',
  ]
  let activity = [
    { category: 'Professional Time', name: 'Work' },
    { category: 'Obligatory time', name: 'Sleep' },
  ]
  return (
    <>
      <HeaderStyled>Add your activities</HeaderStyled>
      <Form
        activities={activities}
        categories={categories}
        setActivities={setActivities}
      />
      <Card activities={activities} categories={categories} />
    </>
  )
}

export default App

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 21px;
`
