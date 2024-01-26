import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  button: {
    margin: '4px',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: '#e0e0e0', // Lighter color
    '&:hover': {
      backgroundColor: '#c0c0c0', // Darker color on hover
    },
    '&:active': {
      backgroundColor: '#a0a0a0', // Even darker color on click
    },
  },
})

const PickButton = ({ onClick, children }) => {
  const classes = useStyles()
  const [selected, setSelected] = useState(false)

  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default PickButton
