import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Form from '../../components/Form/Form'
export default {
  title: 'Components/Form/Form',
  decorators: [withKnobs],
  component: Form,
}

const categories = [
  'Personal time',
  'Self time',
  'Professional time',
  'Obligatory time',
  'Unproductive time',
]

export const Form = () => <Form categories={categories} />
