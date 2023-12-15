'use client'
import { useSelector } from 'react-redux'
import { UserState, setToken } from '../lib/features/user/userSlice'
import { redirect } from 'next/navigation'
import { Dispatch } from '@reduxjs/toolkit'

// Replace `any` with actual type of token
export const SetToken = (dispatch: Dispatch<any>, token: string) => {
  localStorage.setItem('token', token)
  dispatch(setToken(token))
}

// Define interface for UserState.token type
export const GetToken = (): string | null => {
  const tokenFromState = useSelector(
    (state: { user: UserState }) => state.user.token
  )
  return tokenFromState || localStorage.getItem('token')
}

export const RemoveToken = (dispatch: Dispatch<any>) => {
  localStorage.removeItem('token')
  dispatch(setToken(null))
}
export const clearLocalStorage = () => localStorage.clear()

export const userLogout = (dispatch: Dispatch<any>, lng: string) => {
  RemoveToken(dispatch)
  //redirect(`/${lng}/account/login`)
  window.location.replace(`/${lng}`)
}
