import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'

const IndiTimer = () => {
  const [value, setValue] = useState(0)
  const [que, setQue] = useState(null)
  const [some, setSome] = useState([])
  const [search, setSearch] = useState(null)
  const addSome = () =>{
    if (some.includes(que) !== true)
      setSome([...some, que])
    else
      alert("group already in queue!")
  }
  let random = false;
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const removeFirst = async () => {
    some.shift()
    alert("Bye bye team!")
  }
  const searchElement = () => {
    if (some.includes(search) === true)
      alert("the group is in "+(some.indexOf(search)+1)+" th place in the queue")
    else
      alert("group not in the queue")
  }
  const queueLength = () => {
    alert("the length of the queue is " + some.length)
  }
  const addFront = () => {
    if (some.includes(que) !== true){
      some.unshift(que)}
    else
      alert("group already in queue!")
  }
  const removeElement = () => {
    if (some.includes(search) === true) {
      let j = some.indexOf(search)
      some.splice(j,j)
      }
    else
      alert("group not in queue!")
  }

  const withSpaces = some.join(' ');

  return (
    <div className={"" + (random ? 'bg-red-500' : '')}>
    <div className="flex flex-row p-2">
      <div className="px-10 py-20">
        <input
          className="appearance-none block max-w-min max-h-min text-2xl text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text" placeholder="Name of component"
        />
      </div>
      <div className="px-10 py-20">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number" placeholder="time in minutes" onChange={event => setValue(Number(event.target.value))}/>
      </div>
      {value !== 0 &&
        <CountdownCircleTimer
          isPlaying
          duration={value*60}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[40, 20, 10, 0]}
          onComplete={removeFirst}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>}
      <div className="px-10 py-20">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="number" placeholder="queue element" onChange={event => (Number(event.target.value) === 0 ? null : setQue(Number(event.target.value)))}/>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <button className="bg-yellow-400 max-w-min p-1 rounded whitespace-nowrap" onClick={addSome}>add element</button>
        </div>
        <div>
          <button className="bg-yellow-400 max-w-min p-1 rounded whitespace-nowrap" onClick={removeFirst}>remove first element</button>
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number" placeholder="search / remove" onChange={event => (Number(event.target.value) === 0 ? null : (setSearch(Number(event.target.value))))}/>
            <button className="bg-yellow-400 max-w-min p-1 rounded whitespace-nowrap" onClick={searchElement}>search</button>
            <button className="bg-yellow-400 max-w-min p-1 rounded whitespace-nowrap" onClick={removeElement}>remove</button>
          </div>
        </div>
        <div>
          <button className="bg-yellow-400 max-w-min p-1 rounded whitespace-nowrap" onClick={queueLength}>queue length</button>
        </div>
        <div>
          <button className="bg-yellow-400 max-w-min p-1 rounded whitespace-nowrap" onClick={addFront}>add to front of queue</button>
        </div>
      </div>
    </div>
      <hr/>
    <div>
      {withSpaces}
    </div>
    <hr/>
  </div>
  )
}

export default IndiTimer;