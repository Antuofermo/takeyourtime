import React from 'react'
import Select from '../../../components/Form/Select/CategorySelect'
export default {
  title: 'Components/Form/Select',
  decorators: [
    renderSelect => (
      <div
        style={{
          padding: 40,
        }}
      >
        {renderSelect()}
      </div>
    ),
  ],
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
