import React from 'react'
import styled from 'styled-components/macro'

export default function Confirmation() {
  return (
    // <Message>
    <Success>Added successfully!</Success>
    //   {/* <AddNew onClick={addNew}>Add new activity</AddNew>
    //   <ShowCat>Show categories</ShowCat> */}
    // {/* </Message> */}
  )
}

// const AddNew = styled.button`
//   cursor: pointer;
// `
// const ShowCat = styled.button`
//   cursor: pointer;
// `

// const Message = styled.div`
//   position: absolute;
//   text-align: center;
//   padding: 15px;
//   visibility: visible;
//   border: 2px solid var(--color-gold);
//   border-radius: 50px;
//   width: 300px;
//   height: 48px;
//   font-size: 15px;
//   color: var(--color-gold);
//   font-size: 18px;
//   background-color: var(--color-white);
// `

const Success = styled.p`
  position: absolute;
  visibility: hidden;
  text-align: center;
  margin: 0;
  padding: 15px;
  border: 2px solid var(--color-gold);
  border-radius: 50px;
  width: 300px;
  height: 48px;
  font-size: 15px;
  color: var(--color-gold);
  font-size: 18px;
  background-color: var(--color-white);
  animation: 2s ease-in confirmation;

  @keyframes confirmation {
    0% {
      visibility: visible;
    }
    100% {
      visibility: hidden;
    }
  }
`
