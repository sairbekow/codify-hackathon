import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
  isLoading: boolean
}

const initialState: IUserState = {
  isLoading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoading: (state: IUserState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setUserLoading } = userSlice.actions

export default userSlice
