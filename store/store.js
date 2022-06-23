import { configureStore } from '@reduxjs/toolkit'
import musicReducer from './music/index'
import shuffleReducer from './shuffle/index'
import loopReducer from './loop/index'

export const store = configureStore({
  reducer: { musics: musicReducer, shuffle: shuffleReducer, loop: loopReducer },
})
