import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IIrigation {
  ownerFullname: string
  ownerPin: string
  areaTitle: string
  startDate: string
  status: number
}

interface IIrigationState {
  irrigationList: IIrigation[] | []
}

const initialState: IIrigationState = {
  irrigationList: [],
}

const irrigationSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setIrrigationData: (
      state: IIrigationState,
      action: PayloadAction<IIrigationState>
    ) => {
      state.irrigationList = action.payload.irrigationList
    },
  },
})

export const { setIrrigationData } = irrigationSlice.actions

export default irrigationSlice
