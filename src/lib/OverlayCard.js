import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(() => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure the overlay is on top
  },
}))

const OverlayCard = ({ title, description, toggle }) => {
  const classes = useStyles()

  return (
    <div className={classes.overlay}>
      <button className={classes.closeButton} onClick={toggle}>
        X
      </button>
      OVERLAY
    </div>
  )
}

export default OverlayCard
