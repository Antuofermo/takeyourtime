import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Select from '../../../components/Form/Select/CategorySelect'
export default {
  title: 'Components/Form/Select',
  decorators: [withKnobs],
  component: Select,
}

const categories = [
  'Personal time',
  'Self time',
  'Professional time',
  'Obligatory time',
  'Unproductive time',
]

export const CategorySelect = () => <Select categories={categories} />
