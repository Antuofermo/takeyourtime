import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CategoryList from '../../components/Card/CategoryList'
export default {
  title: 'Components/Card/CategoryList',
  decorators: [withKnobs],
  component: CategoryList,
}

const categories = [
  'Professional time',
  'Obligatory time',
  'Personal time',
  'Self time',
  'Non-productive time',
]

const initialData = [
  { category: 'Professional time', name: 'Work', hours: 8 },
  { category: 'Obligatory time', name: 'Sleep', hours: 7 },
  { category: 'Obligatory time', name: 'Cook & eat', hours: 2 },
  {
    category: 'Personal time',
    name: 'Read 1984',
    hours: 1,
  },
  {
    category: 'Self time',
    name: 'Go to the gym',
    hours: 1,
  },
  { category: 'Self time', name: 'Meditation', hours: 1 },
  { category: 'Unproductive time', name: 'Netflix', hours: 1 },
]

export const CategoryCards = () => (
  <CategoryList categories={categories} activities={initialData} />
)
