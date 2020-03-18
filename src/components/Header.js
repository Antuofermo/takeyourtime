import React, { useState } from 'react'
import logo from './img/logo.png'
import guidance from './img/guidance.png'
import styled from 'styled-components/macro'

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
    </HeaderStyled>
  )
  function openGuidance(event) {
    event.stopPropagation()
    setIsOpen(true)
  }
}

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
  user-select: none;
`

const Logo = styled.img`
  position: absolute;
  width: 38px;
`

const Help = styled.img`
  color: goldenrod;
  position: Absolute;
  height: 25px;
  right: 5%;
  cursor: pointer;
`
