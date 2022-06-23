import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  value: 3,
  items: [],
}

export const storeCart = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value += 1
      let currentItems = current(state.items)
      let hasItem = currentItems.find((f) => f.id == payload.id)
      if (hasItem) {
        currentItems.forEach((v, i) => {
          if (v.id === payload.id) {
            state.items[i].count += 1
          }
        })
      } else {
        state.items.unshift(payload)
      }
    },
    decrement: (state, { payload }) => {
      state.value -= 1
      state.items.forEach((v, i) => {
        if (v.id === payload) {
          if (state.items[i].count > 1) {
            state.items[i].count -= 1
          } else {
            state.items.splice(i, 1)
          }
        }
      })
    },
    clear: (state) => {
      state.value = 0
      state.items = []
    },
  },
})

export const { increment, decrement, clear } = storeCart.actions
export default storeCart.reducer
