import React, { useState } from 'react'
import Form from './components/Form'
import Card from './components/Card/Card'
import styled from 'styled-components/macro'

function App() {
  const [activities, setActivities] = useState([])
  return (
    <>
      <Header>Add your activities</Header>
      <Form activities={activities} setActivities={setActivities} />
      <Card activities={activities} />
    </>
  )
}

export default App

const Header = styled.h1`
  text-align: center;
  font-size: 21px;
`
