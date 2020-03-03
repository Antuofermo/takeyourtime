import React from 'react'
import Activity from './Activity'

export default function Card({ activities }) {
  return (
    <div>
      <Activity activities={activities} />
    </div>
  )
}
