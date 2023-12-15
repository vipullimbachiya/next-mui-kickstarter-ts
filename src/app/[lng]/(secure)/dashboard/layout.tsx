import { Box } from '@mui/material'

export default Layout

function Layout({ children }: { children: React.ReactNode }) {
  return <Box>{children}</Box>
}
