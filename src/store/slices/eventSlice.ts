import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IEvent {
  id: 0
  title: string
  content: string
  image: string
}

interface IEventState {
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
  },
})

export const { setEventData, setCurrentEvent } = eventSlice.actions

export default eventSlice
