import React, { useState } from 'react'
import styled from 'styled-components/macro'
import guidance from './img/guidance.png'
import logo from './img/logo.png'
import ModalGuide from './Guide/ModalGuide'

export default function Header() {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <HeaderStyled>
      <AppName>Take Your Time</AppName>
      <Logo src={logo} />
      <Help src={guidance} onClick={openGuide} />
      <ModalGuide modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </HeaderStyled>
  )

  function openGuide(event) {
    event.stopPropagation()
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
}

const HeaderStyled = styled.section`
  background: var(--color-dark);
  color: white;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`

const AppName = styled.h1`
  font-size: 18px;
  padding: 12px;
  user-select: none;
`

const Logo = styled.img`
  position: absolute;
  width: 38px;
`

const Help = styled.img`
  color: var(--color-gold);
  position: absolute;
  height: 25px;
  right: 5%;
  cursor: pointer;
`
