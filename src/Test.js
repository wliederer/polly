import React, { useEffect, useState } from 'react'
import { Rolly } from 'rolly-polly-polls'

const Test = () => {
  const [poll, setPoll] = useState(null)
  const onLoad = (data) => {
    console.log(data)
  }
  const onPick = async (data) => {
    console.log('Pick Made', data)
    let body = poll
    //update pick
    for (const pick of body.picks) {
      if (data.pick.pickOption == pick.pickOption) {
        pick.count = data.pick.count
      }
    }
    await fetch(`http://localhost:8080/polls/${poll._id}`, {
      method: 'PUT',
      headers: {
        'X-API-KEY': 'wills-world',
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
      body: JSON.stringify({
        _id: body._id,
        question: body.question,
        picks: body.picks,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Data received:', data)
        setPoll(data)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }
  useEffect(() => {
    fetch('http://localhost:8080/polls', {
      headers: {
        'X-API-KEY': 'wills-world',
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Data received:', data)
        setPoll(data[0])
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }, [])
  return (
    <>
      {poll ? (
        // <Rolly
        //   title={'What kind of stickers do you like?'}
        //   picks={[
        //     { pickOption: 'random', count: 0 },
        //     { pickOption: 'video game', count: 0 },
        //   ]}
        //   pickMessage={
        //     'Thankyou for your pick!  We have received your feedback!'
        //   }
        //   onLoad={onLoad}
        //   onPick={onPick}
        //   theme={'betsy'}
        // />
        <Rolly
          title={poll.question}
          picks={poll.picks}
          pickMessage={
            'Thankyou for your pick!  We have received your feedback!'
          }
          onLoad={onLoad}
          onPick={onPick}
          theme={'betsy'}
        />
      ) : (
        <div>waiting on request</div>
      )}
    </>
  )
}

export default Test
