import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setCurrentUser } from '../../utils/cookie'

interface IUserState {
  user: {
    fullname: string
    pin: string
    villageId: number
    userType: string
    agriculturalLandId: number
  },
  isLoggedIn: boolean
}

const initialState: IUserState = {
  user: {
    fullname: '',
    pin: '',
    villageId: 0,
    userType: '',
    agriculturalLandId: 0,
  },
  isLoggedIn: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state: IUserState, action: PayloadAction<IUserState>) => {
      state.user = action.payload.user
      console.log(action.payload.user)
      setCurrentUser(action.payload.user.fullname);
      state.isLoggedIn = action.payload.isLoggedIn
    },
    setUserLoggedIn: (state: IUserState) => {
      state.isLoggedIn = true
    }
  },
})

export const { setUserData, setUserLoggedIn } = userSlice.actions

export default userSlice
