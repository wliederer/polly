import React, { useEffect, useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  '@keyframes growRight': {
    from: { width: 0 },
    to: { width: ({ result }) => `${result}%` },
  },
  button: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    margin: '4px',
    width: '100%',
    padding: '0',
    overFlow: 'hidden',
    borderRadius: '8px',
    border: `1px solid ${theme.colors.border}`,
    cursor: ({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer'),
  },
  bar: {
    backgroundColor: theme.colors.picked,
    height: '28px',
    animation: `$growRight 1s ease;`,
    width: ({ result }) => `${result}%`,
    borderRadius: '8px',
  },

  text: {
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
    left: '10%',
    position: 'absolute',
  },
}))

const PickButton = ({ onClick, children, isDisabled, count, totalCount }) => {
  const [selected, setSelected] = useState(false)
  const [pickCount, setPickCount] = useState(count)
  const styleProps = {
    selected,
    isDisabled,
    result: (pickCount / totalCount) * 100,
  }
  const theme = useTheme()
  const classes = useStyles({ ...styleProps, theme })

  return (
    <button
      id={children}
      className={classes.button}
      onClick={(e) => {
        e.preventDefault()
        const but = document.getElementById(children)
        but.setAttribute('disabled', true)
        onClick({ pickOption: children, count: pickCount + 1 })
        setSelected(true)
        setPickCount(pickCount + 1)
      }}
      disabled={isDisabled}
    >
      {selected ? <div className={classes.bar}></div> : null}
      <div className={classes.text}>{children}</div>
    </button>
  )
}

export default PickButton
