import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Form from '../../components/Form/Form'
export default {
  title: 'Components/Form/Form',
  decorators: [withKnobs],
  component: Form,
}

const categories = [
  'Professional time',
  'Obligatory time',
  'Personal time',
  'Self time',
  'Non-productive time',
]

export const SaveBtn = () => <Form categories={categories} />
