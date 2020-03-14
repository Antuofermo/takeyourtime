import React from 'react'
import Card from './Card'

export default function CategoryList({
  activities,
  categories,
  deleteActivity,
}) {
  return categories.map(category => (
    <Card
      key={category}
      activities={activities}
      category={category}
      deleteActivity={deleteActivity}
    />
  ))
}
