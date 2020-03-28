import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import ActivityInput from '../../../components/Form/Inputs/ActivityInput'
export default {
  title: 'Components/Form/ActivityInput',
  decorators: [
    renderActivityInput => (
      <div
        style={{
          padding: 40,
        }}
      >
        {renderActivityInput()}
      </div>
    ),
  ],
  component: ActivityInput,
}

export const Activity = () => (
  <ActivityInput
    label={text('Label', 'submit')}
    onSubmit={action('send')}
    disabled={boolean('Disabled', false)}
    maxLength="60"
    placeholder="ex. Learn React"
    autoFocus
  />
)
