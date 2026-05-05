import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/index.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})