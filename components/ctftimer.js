import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'

const CtfTimer = (count) => {
  const [value, setValue] = useState(0)
  const array = Array.from(Array(count.count).keys())
  const duration = []
  return(
    <div className="m-2">
      {duration}
      {Array.from(Array(count.count).keys()).map((i,index) => (
        <div className="flex flex-row p-2">
          <div className="p-20">
            <input
              className="appearance-none block max-w-min max-h-min bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text" placeholder="Name of component"
            />
          </div>
          <div className="p-20">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number" placeholder="time in minutes" onChange={event => setValue(Number(event.target.value))}/>
            {duration.push(value)}
          </div>
          {duration[i] &&
            <CountdownCircleTimer
              isPlaying
              duration={duration[i]*60}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          }
        </div>
        ))}
    </div>
  )
}

export default CtfTimer;