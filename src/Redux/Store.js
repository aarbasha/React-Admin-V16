import { configureStore } from '@reduxjs/toolkit'
// import CounterReducer from "./Reducers/CounterReducer"
import ScreenReducer from './Reducers/ScreenReducer'
export const store = configureStore({
    reducer: {
      ScreenReducer
    },
})