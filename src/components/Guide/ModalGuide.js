import React from 'react'
import AppDescription from './AppDescription'
import CategoryDescriptions from './CategoryDescriptions'
import logo from '../img/logo.png'
import Modal from 'react-modal'
import styled from 'styled-components/macro'

export default function ModalGuide({ modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      data-cy="guide-modal"
    >
      <AppName>Take Your Time</AppName>
      <Logo src={logo} />
      <AppDescription />
      <CategoryDescriptions />
      <FooterModal>
        <CloseModal data-cy="close-guide" onClick={closeModal}>
          Got it!
        </CloseModal>
      </FooterModal>
    </Modal>
  )
}
const customStyles = {
  content: {
    top: '0%',
    left: '50%',
    right: 'auto',
    height: '100vh',
    marginRight: '-50%',
    transform: 'translate(-50%)',
    border: 'none',
    background: 'var(--color-dark)',
    color: 'var(--color-white)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

const FooterModal = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  background: var=(--color-dark);
`

const CloseModal = styled.button`
  margin-bottom: 20px;
  padding: 8px;
  font-size: 16px;
  color: var=(--color-black);
  background: var=(--color-white);
  border-radius: 4px;
  border: 1px solid black;
  width: 70px;
  cursor: pointer;
  align-self: flex-end;
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
