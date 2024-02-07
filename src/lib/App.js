import React, { useEffect, useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import PickButton from './PickButton'
import OverlayCard from './OverlayCard'

const useStyles = createUseStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    border: `2px solid ${theme.colors.border}`,
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: theme.shadows.shadow3,
    transition: 'transform 0.2s ease-in-out',
    position: 'relative',
    background: theme.colors.background,
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center',
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
  },
  count: {
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
    width: '100%',
    display: 'flex',
    justifyContent: 'right',
  },
}))

const App = ({ title, picks, pickMessage, onLoad, onPick }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [selectedPick, setSelectedPick] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [totalCount, setTotalCount] = useState(
    picks.reduce((total, pick) => total + pick.count, 0),
  )
  const theme = useTheme()
  const classes = useStyles({ theme })

  useEffect(() => {
    if (!title || !picks || !onLoad || !onPick) {
      throw new Error('Missing props')
    }
    onLoad('rollyLoaded')
  }, [])

  const onClick = (pick) => {
    setTotalCount(totalCount + 1)
    onPick({ title, pick })
    setIsDisabled(true)
    if (pick) setSelectedPick(pick)
  }
  return (
    <div className={classes.card}>
      <div className={classes.title}>{title}</div>
      {picks && totalCount >= 0
        ? picks.map((p, i) => (
            <PickButton
              key={i}
              isDisabled={isDisabled}
              onClick={onClick}
              count={p.count}
              totalCount={totalCount}
            >
              {p.pickOption}
            </PickButton>
          ))
        : null}
      {showOverlay ? (
        <OverlayCard
          toggle={() => {
            console.log('toggled')
            setShowOverlay(!showOverlay)
            setIsDisabled(true)
          }}
          pick={selectedPick}
          pickMessage={pickMessage}
        />
      ) : null}

      <div className={classes.count}>Total Votes {totalCount}</div>
    </div>
  )
}

export default App
