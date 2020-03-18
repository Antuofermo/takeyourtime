import React from 'react'
import styled from 'styled-components/macro'

export default function AddActivity({ setIsOpen }) {
  return (
    <>
      <TitleStyled>Add your activities</TitleStyled>
      <OpenModal>
        <AddStyled onClick={openModal}></AddStyled>
      </OpenModal>
    </>
  )

  function openModal() {
    setIsOpen(true)
  }
}

const TitleStyled = styled.h1`
  margin: 32px 0 24px 0;
  text-align: center;
  font-size: 21px;
  user-select: none;
  color: var(--color-dark);
`

const OpenModal = styled.button`
  background: var(--body-background);
  border: none;
  display: block;
  margin: auto;
`

const AddStyled = styled.div`
  border: 3px solid var(--color-gold);
  background-color: var(--body-background);
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
    background-color: var(--color-gold);
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
      background-color: var(--color-gold);
      animation-name: cross;
      animation-fill-mode: forwards;
      animation-duration: 0.2s;
    }

    @keyframes cross {
      from {
        background-color: var(--color-gold);
      }
      to {
        background-color: black;
      }
    }
  }
`
