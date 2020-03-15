import React from 'react'
import logo from './img/logo.png'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <AppName>Take Your Time</AppName>
      <Logo src={logo} />
    </HeaderStyled>
  )
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
  font-size: 19px;
  padding: 12px;
`

const Logo = styled.img`
  position: absolute;
  width: 42px;
`
