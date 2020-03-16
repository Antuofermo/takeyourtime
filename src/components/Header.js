import React, { useState } from 'react'
import logo from './img/logo.png'
import styled from 'styled-components/macro'
import guidance from './img/guidance.png'
import Modal from 'react-modal'

export default function Header({ closeModal }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <HeaderStyled>
      <AppName>Take Your Time</AppName>
      <Logo src={logo} />
      <Help
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={guidance}
        onClick={openGuidance}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <AppName>Take Your Time</AppName>
        <Logo src={logo} />
        <Description>
          Take Your Time helps to categorize daily activities and to check how
          much time you spend on them. With this app you can finally do what you
          always thought you never had time for.
        </Description>
        <ul>
          <Category>Professional time</Category>
          <Category>You can't say no</Category>
          <Category>your hobbies</Category>
          <Category>Stay healthy</Category>
          <Category>The less the better</Category>
        </ul>
        <CloseModal onClick={closeModal}>Got it!</CloseModal>
      </Modal>
    </HeaderStyled>
  )
  function openGuidance(event) {
    event.stopPropagation()
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
}

const Category = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 3px;
  font-size: 18px;
  height: 48px;
  margin: 0;
  background: #1a1919;
  color: white;
  border: 1px solid white;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: '#1a1919',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
}

const Description = styled.p`
  padding: 0 15px;
`
const CloseModal = styled.button`
  padding: 8px;
  font-size: 16px;
  color: black;
  background: White;
  border-radius: 4px;
  border: 1px solid white;
  width: 70px;
  cursor: pointer;
  align-self: flex-end;
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
  font-size: 18px;
  padding: 12px;
`

const Logo = styled.img`
  position: absolute;
  width: 38px;
`

const Help = styled.img`
  color: goldenrod;
  position: Absolute;
  height: 30px;
  right: 5%;
`
