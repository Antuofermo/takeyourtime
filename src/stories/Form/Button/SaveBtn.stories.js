import { action } from '@storybook/addon-actions'
import styled from 'styled-components/macro'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Button from '../../../components/Form/Button/SaveBtn'
export default {
  title: 'Components/Form/Button',
  decorators: [withKnobs],
  component: Button,
}

const SaveBtnStyled = styled.button`
  padding: 10px 50px;
  font-size: 16px;
  color: #e4c026;
  background: #1a1919;
  border-radius: 50px;
  box-shadow: 2px 2px 4px grey;
  border: 1px solid #1a1919;
  cursor: pointer;

  :hover {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.6;
    box-shadow: none;
  }
`

export const SaveBtn = () => (
  <Button
    label={text('Label', 'Click')}
    onClick={action('send')}
    style={SaveBtnStyled}
    disabled={boolean('Disabled', false)}
  />
)
