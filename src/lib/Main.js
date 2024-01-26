import React, { useState } from 'react'
import App from './App'
import ThemeProvider from './theme/ThemeProvider'
// import { buildTheme } from './theme/theme'

const Rolly = ({ title, picks, pickMessage, onLoad }) => {
  //   const [theme, setTheme] = useState(buildTheme('default')) custom themes someday

  return (
    <ThemeProvider>
      <App
        title={title}
        picks={picks}
        pickMessage={pickMessage}
        onLoad={onLoad}
      />
    </ThemeProvider>
  )
}

export default Rolly
