# Polly the little widget for polls

A decoupled widget designed to allow voting on a Question with Pick options.

## Installation

```
npm install ai-speak
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
      picks={['Green', 'Blue', 'Yellow', 'Other']}
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
`title` Title displayed on the widget
`picks` Picks displayed on the widget passed as an array of strings
`pickMessage` Message displayed on a pick
`onLoad` Function called on load with available props passed. Right now its just the string "rollyLoaded"
`onPick` Function to call on a pick data passed will be `{ title, pick }`
