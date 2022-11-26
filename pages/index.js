import { useState } from 'react'
import CtfTimer from '../components/ctftimer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import IndiTimer from '../components/individual_timer'

export default function Home() {
  const [value, setValue] = useState(0)
  const something = Number(value)

  return (
    <div>
      <h1 className="mx-3 text-4xl">CTF_queue_timer</h1>
      <hr className="my-4" />
      <div>
        <IndiTimer />
        <IndiTimer />
        <IndiTimer />
        <IndiTimer />
        <IndiTimer />
        <IndiTimer />
        <IndiTimer />
        <IndiTimer />
      </div>
      {/*<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">*/}
      {/*  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">*/}
      {/*    Number of Components*/}
      {/*  </label>*/}
      {/*  <input*/}
      {/*    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"*/}
      {/*    type="number" placeholder="number input" onChange={event => setValue(event.target.value)}/>*/}
      {/*</div>*/}
      {/*{Array.from(Array(something.count).keys()).map((i) => (*/}
      {/*  <div><*/}
      {/*    CtfTimer count={something} />*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
}
