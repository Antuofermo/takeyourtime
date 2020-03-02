import React, { useState } from 'react'
import Form from './components/Form'
import Card from './components/Card/Card'

function App() {
  const [activities, setActivities] = useState(['Learn React', 'Read 1982'])
  return (
    <>
      <Card activities={activities} />
      <Form activities={activities} setActivities={setActivities} />
    </>
  )
}

export default App
