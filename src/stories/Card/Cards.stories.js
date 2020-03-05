import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Card from '../../components/Card/Cards'
export default {
  title: 'Components/Card/Cards',
  decorators: [withKnobs],
  component: Card,
}

const categories = [
  'Professional time',
  'Obligatory time',
  'Personal time',
  'Self time',
  'Non-productive time',
]

export const SaveBtn = () => <Card categories={categories} />
