import { action } from '@storybook/addon-actions'
import React from 'react'
import Form from '../../components/Form/Form'

export default {
  title: 'Components/Form/Form',
  decorators: [
    renderForm => (
      <div
        style={{
          padding: 40,
        }}
      >
        {renderForm()}
      </div>
    ),
  ],
  component: Form,
}

const categories = [
  'Personal time',
  'Self time',
  'Professional time',
  'Obligatory time',
  'Unproductive time',
]

export const FormDefault = () => (
  <Form categories={categories} onSave={action('Save')} />
)
