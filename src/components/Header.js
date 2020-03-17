import React, { useState } from 'react'
import logo from './img/logo.png'
import styled from 'styled-components/macro'
import guidance from './img/guidance.png'
import Modal from 'react-modal'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

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
        <AppDescription>
          Take Your Time helps you to categorize daily activities and to check
          how much time you spend on them. You can finally do what you always
          thought you'd never have time for! <br />
          <br />
          Check below the different categories:
        </AppDescription>

        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <Category>Professional time</Category>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <CategoryDescription>
                This is where you add all activities that make you gain money
              </CategoryDescription>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <Category>Obligatory time</Category>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <CategoryDescription>
                This is where you add activities that you have to do...
              </CategoryDescription>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <Category>Personal time</Category>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <CategoryDescription>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </CategoryDescription>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <Category>Self time</Category>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <CategoryDescription>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </CategoryDescription>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <Category>Non-productive time</Category>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <CategoryDescription>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </CategoryDescription>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

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

const CategoryDescription = styled.p`
  margin: 15px;
`

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 3px;
  font-size: 18px;
  height: 48px;
  margin-bottom: 10px;
  background: #1a1919;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
`

const customStyles = {
  content: {
    zIndex: '2',
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

const AppDescription = styled.p`
  padding: 0 20px;
`
const CloseModal = styled.button`
  margin-top: 10px;
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
  height: 20px;
  right: 5%;
  cursor: pointer;
`
