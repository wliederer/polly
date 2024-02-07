# Polly the little widget for polls

A decoupled widget designed to allow voting on a Question with Pick options.

## Installation

```
npm install rolly-polly-polls
```

## Examlpe usage

```javascript
import React from 'react'
import { Rolly } from 'rolly-polly-polls'

const onLoad = (data) => {
  console.log(data)
}
const onPick = (data) => {
  console.log('Pick Made', data)
}

const Example = () => {
  return (
    <Rolly
      title={'Whats your favorite color?'}
      picks={[
        { pickOption: 'Green', count: 0 },
        { pickOption: 'Blue', count: 0 },
        { pickOption: 'Yellow', count: 0 },
        { pickOpion: 'Other', count: 0 },
      ]}
      pickMessage={'Thankyou for your pick!  We have received your feedback!'}
      onLoad={onLoad}
      onPick={onPick}
      theme={'default'}
    />
  )
}
```

## Configuration

Required Props:
`title`
`picks`
`pickMessage`
`onLoad`
`onPick`

## Title

Title displayed on the widget

## Picks

Picks displayed on the widget passed as an array of strings

## Pick Message

Message displayed on a pick

## onLoad

Function called on load with available props passed. Right now it's just the string "rollyLoaded"

## onPick

Function to call on a pick. Data passed will be `{ title, pick }`

## Theme

Theme default

Available Themes:
`default` `drab` `sienna` `royal` `toys` `betsy`
