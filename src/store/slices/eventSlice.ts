import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type EventId = number

export interface IEvent {
  id: number
  title: string
  content: string
  image: string
}

export interface IEventState {
  eventList: IEvent[]
  currentEvent: IEvent
}

const initialState: IEventState = {
  eventList: [],
  currentEvent: {
    id: 0,
    title: '',
    content: '',
    image: '',
  },
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventData: (state: IEventState, action: PayloadAction<IEventState>) => {
      state.eventList = action.payload.eventList
    },
    setCurrentEvent: (state: IEventState, action: PayloadAction<IEvent>) => {
      state.currentEvent = action.payload
    },
    removeEvent: (state: IEventState, action: PayloadAction<EventId>) => {
      state.eventList = state.eventList.filter(event => event.id != action.payload)
    }
  },
})

export const { setEventData, setCurrentEvent, removeEvent } = eventSlice.actions

export default eventSlice
