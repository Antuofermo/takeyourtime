import React from 'react'
import Card from './Card'

export default function Cards({ activities, categories, deleteActivity }) {
  return categories.map(category => (
    <Card
      key={category}
      activities={activities}
      category={category}
      deleteActivity={deleteActivity}
    />
  ))
}
