import React from 'react'
import styled from 'styled-components/macro'

export default function CategoryDescriptions() {
  return (
    <Categories>
      <Description>
        <Category>Personal time</Category>
        <span>
          Pack your hobbies and that bullet point from your bucket list
        </span>
      </Description>
      <Description>
        <Category>Self time</Category>
        <span>
          Whatever is good for your body and mind which helps you to feel happy
          and relaxed.
        </span>
      </Description>

      <Description>
        <Category>Obligatory time </Category>
        <span>
          Everything that is mandatory. This is your morning routing, your
          commute, eat, sleep etc.
        </span>
      </Description>

      <Description>
        <Category>Professional time</Category>
        <span>Time is money: which activities are you paid for?</span>
      </Description>

      <Description>
        <Category>Unproductive time</Category>
        <span>
          Netflix and chill is obviously one of them! This includes scrolling
          social media, watching TV, listening to music...
        </span>
      </Description>
    </Categories>
  )
}

const Categories = styled.ul`
  padding: 0 20px;
`
const Description = styled.li`
  display: inline-block;
  z-index: 2;
  border: 1px solid var(--color-gold);
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 6px;
`
const Category = styled.h1`
  font-size: 16px;
  margin: 0;
  padding-bottom: 10px;
`
