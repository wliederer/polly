import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  button: {
    margin: '4px',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: ({ selected }) => (selected ? '#fcba03' : '#e0e0e0'),
    '&:hover': {
      backgroundColor: '#c0c0c0', // Darker color on hover
    },
    '&:active': {
      backgroundColor: '#a0a0a0', // Even darker color on click
    },
  },
}))

const PickButton = ({ onClick, children, disabled }) => {
  const [selected, setSelected] = useState(false)
  const styleProps = { selected }
  const classes = useStyles({ ...styleProps })
  console.log(disabled)
  return (
    <button
      className={classes.button}
      onClick={() => {
        onClick(children)
        setSelected(true)
      }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default PickButton
