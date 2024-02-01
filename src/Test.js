import React from 'react'
import { Rolly } from 'rolly-polly-polls'

const onLoad = (data) => {
  console.log(data)
}
const onPick = (data) => {
  console.log('Pick Made', data)
}
const Test = () => {
  return (
    <Rolly
      title={'What kind of stickers do you like?'}
      picks={['video game', 'random', 'anime']}
      pickMessage={'Thankyou for your pick!  We have received your feedback!'}
      onLoad={onLoad}
      onPick={onPick}
      theme={'betsy'}
    />
  )
}

export default Test
