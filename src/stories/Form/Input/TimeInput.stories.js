import { action } from '@storybook/addon-actions'
import styled from 'styled-components/macro'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Input from '../../../components/Form/Inputs/TimeInput'
export default {
  title: 'Components/Form/Input/TimeInput',
  decorators: [withKnobs],
  component: Input,
}

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 50px;
  padding: 15px 40px;
  margin-bottom: 20px;
  width: 200px;
  height: 48px;
  font-size: 15px;

  ::placeholder {
    text-align: center;
  }
`
export const TimeInput = () => (
  <InputStyled
    label={text('Label', 'submit')}
    onSubmit={action('send')}
    name="hours"
    placeholder="0.0"
    id="hours-input"
    type="number"
    step="0.50"
    min="0.50"
    max="24"
  />
)
