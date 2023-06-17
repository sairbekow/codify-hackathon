import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Wrapper = styled.div``

const Title = styled.h2`
  font-size: 20px;
`

const Ul = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 30fr 30fr 30fr;
  grid-gap: 25px;
`

const EventList = () => {
  const cards = [1, 2, 3, 4, 5, 6]
  return (
    <Wrapper>
      <Title>Негизги иш-чаралар</Title>
      <Ul>
        {cards.map((item) => (
          <li key={item}>
            <Card />
          </li>
        ))}
      </Ul>
    </Wrapper>
  )
}

export default EventList
