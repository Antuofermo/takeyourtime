import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components/macro'
import { save } from '../../utils'
import categories from '../common/categories'
import Form from './Form'

export default function ModalForm({
  modalIsOpen,
  setIsOpen,
  activities,
  setActivities,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <CloseModal data-cy="close-form" onClick={closeModal}>
        &times;
      </CloseModal>
      <Form categories={categories} onSubmit={addActivity} />
    </Modal>
  )

  function closeModal() {
    setIsOpen(false)
  }

  function addActivity(activity) {
    const newActivities = [activity, ...activities]
    setActivities(newActivities)
    save(newActivities)
  }
}

const CloseModal = styled.button`
  border: none;
  background: var(--color-dark);
  color: grey;
  font-size: 18px;
  position: absolute;
  left: 88%;
  top: 2%;
  cursor: pointer;

  :hover {
    color: white;
  }
`

const customStyles = {
  content: {
    top: '95%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'var(--color-dark)',
  },
}
