import React, { useEffect, useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  button: {
    margin: '4px',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: `1px solid ${theme.colors.border}`,
    cursor: ({ disabled }) => (disabled ? 'not-allowed' : 'pointer'),
    transition: 'background-color 0.3s ease',
    backgroundColor: ({ selected }) =>
      selected ? theme.colors.picked : theme.colors.notPicked,
    '&:hover': {
      backgroundColor: ({ disabled }) =>
        disabled ? null : theme.colors.picked,
    },
    '&:active': {
      // backgroundColor: '#a0a0a0',
    },
  },

  text: {
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
  },
}))

const PickButton = ({ onClick, children, disabled }) => {
  const [selected, setSelected] = useState(false)
  const styleProps = { selected, disabled }
  const theme = useTheme()
  const classes = useStyles({ ...styleProps, theme })

  return (
    <button
      className={classes.button}
      onClick={() => {
        onClick(children)
        setSelected(true)
      }}
      disabled={selected ? false : disabled}
    >
      <div className={classes.text}>{children}</div>
    </button>
  )
}

export default PickButton
