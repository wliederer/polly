import React, { useState } from 'react'
import App from './App'
import ThemeProvider from './theme/ThemeProvider'
// import { buildTheme } from './theme/theme'

const Rolly = ({ title, picks, pickMessage, onLoad, theme, onPick }) => {
  //   const [theme, setTheme] = useState(buildTheme('default')) custom themes someday

  return (
    <ThemeProvider theme={theme}>
      <App
        title={title}
        picks={picks}
        pickMessage={pickMessage}
        onLoad={onLoad}
        onPick={onPick}
      />
    </ThemeProvider>
  )
}

export default Rolly
