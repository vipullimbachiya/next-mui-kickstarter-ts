// Use `import React` for component typing
'use client'
import { GetToken } from '@/utils/helper'
import { Box, BoxProps } from '@mui/material'
import { redirect } from 'next/navigation'
import React from 'react'

// Define types for props and state
type LayoutProps = {
  children: React.ReactNode // Use ReactNode for children type
  params: {
    lng: string // Define type for 'lng' param
  }
}

// Use React's function component syntax
function Layout({ children, params: { lng } }: LayoutProps) {
  // Use type for variable
  const token: string | null | undefined = GetToken() // Specify exact type or 'undefined' if optional

  // Type check token before redirect
  if (token) {
    redirect(`/${lng}`)
  }

  // Use types for styles
  const styles: BoxProps['sx'] = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '99vh',
  }

  return <Box sx={styles}>{children}</Box>
}

// Use default export syntax
export default Layout
