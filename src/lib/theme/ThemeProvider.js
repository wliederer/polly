import React from 'react'
import { jss, JssProvider, ThemeProvider as JSSThemeProvider } from 'react-jss'
import { buildTheme } from './theme'

const ThemeProvider = ({ theme = 'default', children }) => {
  const setupTheme = buildTheme(theme)
  return (
    <div id="rolly-ui">
      <JSSThemeProvider theme={setupTheme}>
        <JssProvider jss={jss}>{children}</JssProvider>
      </JSSThemeProvider>
    </div>
  )
}

export { ThemeProvider as default }
