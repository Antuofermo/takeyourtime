import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Card from '../../components/Card/Card'
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

const initialData = [{ category: 'Professional time', name: 'Work', hours: 8 }]

export const Categories = () => (
  <Card categories={categories} activities={initialData} />
)
