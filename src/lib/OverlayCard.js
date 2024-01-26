import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import closex from './svg/closex.svg'

const useStyles = createUseStyles(() => ({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    marginBottom: -50,
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
    outline: 'none',
  },
  overlayContent: {
    background: 'white',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  message: {
    padding: 8,
  },
}))

const OverlayCard = ({ pickMessage, toggle, pick }) => {
  const classes = useStyles()

  return (
    <div className={classes.overlay}>
      <div className={classes.overlayContent}>
        <button className={classes.closeButton} onClick={toggle}>
          <img src={closex} alt="close" />
        </button>
        <div className={classes.message}>
          <div>{pickMessage}</div>
          <div>{pick}</div>
        </div>
      </div>
    </div>
  )
}

export default OverlayCard
