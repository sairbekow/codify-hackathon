import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import eventSlice from './slices/eventSlice'
import irrigationSlice from './slices/irrigationSlice'

const rootReducer = combineReducers({
  userState: userSlice.reducer,
  eventState: eventSlice.reducer,
  irrigationState: irrigationSlice.reducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
