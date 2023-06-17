import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
  user: {
    fullName: string
    pin: string
    villageId: number
    userType: string
    agriculturalLandId: number
  }
}

const initialState: IUserState = {
  user: {
    fullName: '',
    pin: '',
    villageId: 0,
    userType: '',
    agriculturalLandId: 0,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: IUserState) => {
      state.user = action.payload.user
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice
