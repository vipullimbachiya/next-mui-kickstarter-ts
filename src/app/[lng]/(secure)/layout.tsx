'use client'
import { Box } from '@mui/material'
import { redirect } from 'next/navigation'
import AppHeader from '../_components/header'
import { GetToken } from '@/utils/helper'

export default function Layout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  const token = GetToken()

  if (!token) {
    redirect(`/${lng}/account/login`)
  }
  return (
    <div>
      <AppHeader lng={lng} />
      <Box sx={SxStyle.container}>{children}</Box>
    </div>
  )
}

const SxStyle = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
  },
}
