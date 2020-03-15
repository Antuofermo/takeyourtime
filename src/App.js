import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components/macro'
import CategoryList from './components/Card/CategoryList'
import categories from './components/common/categories'
import InitialData from './components/common/InitialData'
import ModalForm from './components/Form/ModalForm'
import TimeRemaining from './components/TimeRemaining'
import { loadActivities, save } from './utils'
import Header from './components/Header'
import OpenModal from './components/OpenModal'

Modal.setAppElement(document.getElementById('root'))

function App() {
  const [activities, setActivities] = useState(loadActivities() || InitialData)
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <AppGrid>
      <Header />

      <ScrollContainer>
        <OpenModal setIsOpen={setIsOpen} />
        <TimeRemaining activities={activities} />

        <CategoryList
          activities={activities}
          categories={categories}
          setActivities={setActivities}
          deleteActivity={deleteActivity}
        />
      </ScrollContainer>

      <Footer></Footer>

      <ModalForm
        modalIsOpen={modalIsOpen}
        categories={categories}
        activities={activities}
        setActivities={setActivities}
        setIsOpen={setIsOpen}
      />
    </AppGrid>
  )

  function deleteActivity(activity) {
    const index = activities.indexOf(activity)
    const newActivities = [
      ...activities.slice(0, index),
      ...activities.slice(index + 1),
    ]
    setActivities(newActivities)
    save(newActivities)
  }
}

const AppGrid = styled.section`
  display: grid;
  grid-template-rows: 48px auto 18px;
  height: 100vh;
`

const ScrollContainer = styled.main`
  overflow-y: scroll;
`

const Footer = styled.section`
  background: #1a1919;
  height: 100%;
`

export default App
