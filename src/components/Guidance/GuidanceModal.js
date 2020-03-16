import React from 'react'
import Modal from 'react-modal'
import CategoryHeading from '../Card/CategoryHeading'

export default function GuidanceModal({ modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <CategoryHeading />
      <ul>
        'You gain money', "You can't say no", 'your hobbies', 'Stay healthy:
        body and mind', "It doesn't give you anything",
      </ul>
    </Modal>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: '#1a1919',
  },
}
