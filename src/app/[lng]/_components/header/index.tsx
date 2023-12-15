import React, { useContext, useState } from 'react'
import { userLogout } from '@/utils/helper'
import {
  AppBar,
  Button,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import { ThemeContext } from '@/utils/ThemeContext'
import { languages } from '@/app/i18n/settings'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppDispatch } from '@/lib/hooks'

// Define type for language
type Language = keyof typeof languages

const AppHeader = ({ lng }: { lng: string }) => {
  // Add type annotation to props
  const dispatch = useAppDispatch() // Change from useAppDispatch to useDispatch from react-redux
  const { toggleTheme } = useContext(ThemeContext)
  const pathname = usePathname()

  const Logout = () => {
    userLogout(dispatch, lng)
  }

  const [lngState, setLngState] = useState<string>(lng) // Use state for selected language

  const replaceFirstName = (path: string, replacement: Language) => {
    let array = path.split('/')
    array[1] = replacement.toString()
    return array.join('/')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Menu/Logo
        </Typography>
        <Button color="inherit" onClick={() => toggleTheme()}>
          Theme toggle
        </Button>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lngState} // Use state for selected language
          label="Language"
          //  onChange={changeLanguage}
        >
          {languages.map((l: any, index) => {
            const newPath = replaceFirstName(pathname, l)
            return (
              <MenuItem value={l} key={l}>
                <Link href={newPath}>
                  <Typography>{l}</Typography>
                </Link>
              </MenuItem>
            )
          })}
        </Select>
        <Button color="inherit" onClick={Logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
