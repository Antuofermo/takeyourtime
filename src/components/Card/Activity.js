import React from 'react'
import styled from 'styled-components/macro'

export default function Activity({ activity, deleteActivity }) {
  return (
    <ListStyled>
      <NameStyled>
        {activity.name}
        <SpanStyled>
          ({activity.hours < 1 ? activity.hours * 60 : activity.hours}
          {activity.hours < 1
            ? ' min'
            : activity.hours === 1
            ? ' hour'
            : ' hours'}
          )
        </SpanStyled>
        <BtnDelete data-cy="delete-activity" onClick={handleDelete}>
          &times;
        </BtnDelete>
      </NameStyled>
    </ListStyled>
  )

  function handleDelete(event) {
    event.stopPropagation()
    deleteActivity(activity)
  }
}

const ListStyled = styled.ul`
  display: flex;
  padding: 0;
  user-select: none;
`

const NameStyled = styled.li`
  list-style: none;
  padding: 0 25px;
  font-size: 16px;
`

const SpanStyled = styled.span`
  padding-left: 10px;
`

const BtnDelete = styled.span`
  padding-left: 10px;
  color: grey;
  cursor: pointer;

  :hover {
    color: black;
  }
`
