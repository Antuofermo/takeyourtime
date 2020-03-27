import React from 'react'
import Card from '../../components/Card/Card'
export default {
  title: 'Components/Card/Card',
  component: Card,
  decorators: [
    renderCard => (
      <div
        style={{
          padding: 40,
        }}
      >
        {renderCard()}
      </div>
    ),
  ],
}

const categories = [
  'Professional time',
  'Obligatory time',
  'Personal time',
  'Self time',
  'Non-productive time',
]

const initialData = [{ category: 'Professional time', name: 'Work', hours: 8 }]

export const Category = () => (
  <Card categories={categories} activities={initialData} />
)
