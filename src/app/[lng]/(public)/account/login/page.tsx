'use client'

import { useAppDispatch } from '@/lib/hooks'
import { SetToken } from '@/utils/helper'
import { Button } from '@mui/material'

export default Login

function Login() {
  const dispatch = useAppDispatch()
  const submitData = () => {
    SetToken(dispatch, 'dummyToken')
  }
  return (
    <Button variant="contained" onClick={submitData}>
      Click here to login
    </Button>
  )
}
