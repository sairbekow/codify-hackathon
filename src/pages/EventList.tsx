import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { http } from '../utils/axios'
import { QueryPath } from '../data/consts'
import { setEventData } from '../store/slices/eventSlice'
import Event from '../components/Card'

const Wrapper = styled.div`
  padding: 30px;
`

const Title = styled.h2`
  font-size: 20px;
`

const Ul = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 25px;
`

const EventList = () => {
  const eventList = useAppSelector((state) => state.eventState.eventList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    try {
      http.get(QueryPath.GET_ALL_EVENTS).then(({ data }) => {
        console.log(data);
        dispatch(setEventData({ eventList: data }))
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Wrapper>
      <Title>Негизги иш-чаралар</Title>
      <Ul>
        {eventList &&
          eventList.map((item) => (
            <li key={item.id}>
              <Event {...item} />
            </li>
          ))}
      </Ul>
    </Wrapper>
  )
}

export default EventList
