import React from 'react'
import { Rolly } from 'rolly-polly-polls'

const onLoad = (data) => {
  console.log(data)
}
const Test = () => {
  return (
    <Rolly
      title={'What kind of stickers do you like?'}
      picks={['video game', 'random', 'anime']}
      pickMessage={'Thankyou for your pick!'}
      onLoad={onLoad}
      theme={'royal'}
    />
  )
}

export default Test
