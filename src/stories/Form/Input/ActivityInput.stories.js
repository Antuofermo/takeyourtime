import { action } from '@storybook/addon-actions'
import styled from 'styled-components/macro'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Input from '../../../components/Form/Inputs/ActivityInput'
export default {
  title: 'Components/Form/Input',
  decorators: [withKnobs],
  component: Input,
}

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 50px;
  padding: 15px 40px;
  margin-bottom: 20px;
  width: 250px;
  height: 48px;

  ::placeholder {
    color: black;
    font-size: 14px;
  }
`

export const ActivityInput = () => (
  <Input
    label={text('Label', 'submit')}
    onSubmit={action('send')}
    style={InputStyled}
    disabled={boolean('Disabled', false)}
    maxLength="60"
    placeholder="ex. Learn React"
    autoFocus
  />
)
