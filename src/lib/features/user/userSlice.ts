import { STORE_LANGUAGE_KEY } from '@/utils/constant'
import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  token: string | null
  [STORE_LANGUAGE_KEY]: string
}
const initialState = {
  token: null,
  [STORE_LANGUAGE_KEY]: '',
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, actions) => {
      return {
        ...state,
        token: actions.payload,
      }
    },
    setLanguage: (state, actions) => {
      return {
        ...state,
        [STORE_LANGUAGE_KEY]: actions.payload,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setLanguage } = userSlice.actions

export default userSlice.reducer
