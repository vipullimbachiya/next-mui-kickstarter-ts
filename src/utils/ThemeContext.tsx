// ThemeContext.ts
'use client'
import { createContext, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '@/assets/style/theme'

// Define theme type
type Theme = typeof lightTheme | typeof darkTheme

// Context interface
interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  currentTheme: Theme
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  toggleTheme: () => {},
  currentTheme: lightTheme,
})

const ThemeProviderContext = ({ children }: React.PropsWithChildren<any>) => {
  const defaultTheme = (): Theme => {
    let theme = lightTheme
    if (typeof window !== 'undefined') {
      // ️ can use localStorage here
      theme = localStorage.getItem('mode') === 'dark' ? darkTheme : lightTheme
    }
    return theme
  }
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme)
  const {
    palette: { mode },
  } = currentTheme

  const toggleTheme = () => {
    if (mode === 'light') {
      localStorage.setItem('mode', 'dark')
      setCurrentTheme(darkTheme)
    } else {
      localStorage.setItem('mode', 'light')
      setCurrentTheme(lightTheme)
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export { ThemeContext, ThemeProviderContext }
