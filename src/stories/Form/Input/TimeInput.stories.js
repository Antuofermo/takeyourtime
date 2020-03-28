import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import React from 'react'
import TimeInput from '../../../components/Form/Inputs/TimeInput'
export default {
  title: 'Components/Form/TimeInput',
  decorators: [
    renderTimeInput => (
      <div
        style={{
          padding: 40,
        }}
      >
        {renderTimeInput()}
      </div>
    ),
  ],
  component: TimeInput,
}

export const Time = () => (
  <TimeInput
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
