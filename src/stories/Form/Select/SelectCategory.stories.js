import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Select from '../../../components/Form/Select/CategorySelect'
export default {
  title: 'Components/Form/Select',
  decorators: [withKnobs],
  component: Select,
}

const categories = [
  'Professional time',
  'Obligatory time',
  'Personal time',
  'Self time',
  'Non-productive time',
]

export const CategorySelect = () => <Select categories={categories} />
