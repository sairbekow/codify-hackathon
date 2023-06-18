import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IEvent {
  id: 0
  title: string
  content: string
  image: string
}

interface IEventState {
  eventList: IEvent[]
}

const initialState: IEventState = {
  eventList: [],
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventData: (state: IEventState, action: PayloadAction<IEventState>) => {
      state.eventList = action.payload.eventList
    },
  },
})

export const { setEventData } = eventSlice.actions

export default eventSlice
