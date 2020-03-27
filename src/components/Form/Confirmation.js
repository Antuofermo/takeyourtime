import React from 'react'
import styled from 'styled-components/macro'

export default function Confirmation() {
  return <Success>Added successfully!</Success>
}

const Success = styled.p`
  position: absolute;
  visibility: hidden;
  text-align: center;
  margin: 0;
  padding: 15px;
  border: 2px solid var(--color-gold);
  border-radius: 50px;
  width: 300px;
  height: 48px;
  font-size: 15px;
  color: var(--color-gold);
  font-size: 18px;
  background-color: var(--color-white);
  animation: 1s ease-in confirmation;

  @keyframes confirmation {
    0% {
      visibility: visible;
    }
    100% {
      visibility: hidden;
    }
  }
`
