import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  isLoop: false,
}

export const storeLoop = createSlice({
  name: 'loop',
  initialState,
  reducers: {
    loopStatus: (state, { payload }) => {
      state.isLoop = !state.isLoop
    },
    clear: (state) => {
      state.isLoop = false
    },
  },
})

export const { loopStatus, clear } = storeLoop.actions
export default storeLoop.reducer
