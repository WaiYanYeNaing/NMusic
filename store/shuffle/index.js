import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  isShuffle: false,
}

export const storeShuffle = createSlice({
  name: 'shuffle',
  initialState,
  reducers: {
    shuffleStatus: (state, { payload }) => {
      state.isShuffle = !state.isShuffle
    },
    clear: (state) => {
      state.isShuffle = false
    },
  },
})

export const { shuffleStatus, clear } = storeShuffle.actions
export default storeShuffle.reducer
