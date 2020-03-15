import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components/macro'
import CategoryList from './components/Card/CategoryList'
import categories from './components/common/categories'
import InitialData from './components/common/InitialData'
import ModalForm from './components/Form/ModalForm'
import logo from './components/img/logo.png'
import TimeRemaining from './components/TimeRemaining'
import { loadActivities, save } from './utils'

Modal.setAppElement(document.getElementById('root'))

function App() {
  const [activities, setActivities] = useState(loadActivities() || InitialData)
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <AppGrid>
      <HeaderStyled>
        <AppName>Take Your Time</AppName>
        <Logo src={logo} />
      </HeaderStyled>

      <ScrollContainer>
        <TitleStyled>Add your activities</TitleStyled>
        <OpenModal>
          <AddStyled onClick={openModal}></AddStyled>
        </OpenModal>

        <TimeRemaining activities={activities} />
        <CategoryList
          activities={activities}
          categories={categories}
          setActivities={setActivities}
          deleteActivity={deleteActivity}
          setIsopen={setIsOpen}
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

  function openModal() {
    setIsOpen(true)
  }

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

const HeaderStyled = styled.section`
  background: #1a1919;
  color: white;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`

const AppName = styled.h1`
  z-index: 1;
  font-size: 19px;
  padding: 12px;
`

const Logo = styled.img`
  position: absolute;
  width: 42px;
`

const ScrollContainer = styled.main`
  overflow-y: scroll;
`

const Footer = styled.section`
  background: #1a1919;
  height: 100%;
`

const TitleStyled = styled.h1`
  margin: 32px 0 24px 0;
  text-align: center;
  font-size: 21px;
`

const OpenModal = styled.button`
  background: white;
  border: none;
  display: block;
  margin: auto;
`

const AddStyled = styled.div`
  border: 3px solid goldenrod;
  background-color: #fff;
  font-size: 16px;
  height: 4em;
  width: 4em;
  border-radius: 999px;
  position: relative;
  cursor: pointer;

  :after,
  :before {
    content: '';
    display: block;
    background-color: goldenrod;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    height: 2em;
    width: 0.3em;
  }

  &:after {
    height: 0.3em;
    width: 2em;
  }

  :hover  {
    border: 3px solid black;

    :after,
    :before {
      background-color: goldenrod;
      animation-name: cross;
      animation-fill-mode: forwards;
      animation-duration: 0.2s;
    }

    @keyframes cross {
      from {
        background-color: goldenrod;
      }
      to {
        background-color: black;
      }
    }
  }
`

export default App
