import React, { useState } from 'react'
import Form from './components/Form/Form'
import Cards from './components/Card/Cards'
import styled from 'styled-components/macro'
import TimeRemaining from './components/TimeRemaining'
import Modal from 'react-modal'
import logo from './components/img/logo.png'

Modal.setAppElement(document.getElementById('root'))

function App() {
  const [activities, setActivities] = useState([
    { category: 'Professional time', name: 'Work', hours: 8 },
    { category: 'Obligatory time', name: 'Sleep', hours: 8 },
    { category: 'Obligatory time', name: 'Eat', hours: 2 },
    { category: 'Self time', name: 'Go to the gym', hours: 1 },
    { category: 'Obligatory time', name: 'Prepare & commute', hours: 1 },
    { category: 'Non-productive time', name: 'Watch Netflix', hours: 1 },
    { category: 'Personal time', name: 'Read 1984', hours: 1 },
    { category: 'Personal time', name: 'Meet friends', hours: 1 },
  ])

  const [modalIsOpen, setIsOpen] = useState(false)

  const categories = [
    'Professional time',
    'Obligatory time',
    'Personal time',
    'Self time',
    'Non-productive time',
  ]

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
        <Cards activities={activities} categories={categories} />
      </ScrollContainer>

      <Footer></Footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseModal onClick={closeModal}>x</CloseModal>
        <Form categories={categories} onSubmit={addActivity} />
      </Modal>
    </AppGrid>
  )

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function addActivity(activity) {
    setActivities([activity, ...activities])
  }
}

const AppGrid = styled.section`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`

const HeaderStyled = styled.section`
  background: #1a1919;
  color: white;
  height: 48px;
  width: 100vw;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`

const AppName = styled.h1`
  position: absolute;
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
  color: white;
  height: 48px;
  display: flex;
  padding-left: 12px;
  align-items: center;
  font-size: 20px;
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

const CloseModal = styled.button`
  border: none;
  background: #1a1919;
  color: grey;
  font-size: 18px;
  position: absolute;
  left: 88%;
  top: 2%;

  :hover {
    color: white;
  }
`

const customStyles = {
  content: {
    top: '95%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: '#1a1919',
  },
}

const AddStyled = styled.button`
  border: 3px solid black;
  background-color: #fff;
  font-size: 16px;
  height: 4em;
  width: 4em;
  border-radius: 999px;
  position: relative;

  :after,
  :before {
    content: '';
    display: block;
    background-color: black;
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
    border: 2px solid goldenrod;

    :after,
    :before {
      background-color: goldenrod;
    }
  }
`

export default App
