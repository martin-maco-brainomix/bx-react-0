import { useCallback, useEffect, useState } from 'react'
import { ComponentA } from './components/component-a.jsx'
import { ComponentB } from './components/component-b.jsx'
import { ComponentC } from './components/component-c.jsx'
import { ComponentD } from './components/component-d.jsx'
import { ComponentE } from './components/component-e.jsx'
import { ComponentF } from './components/component-f.jsx'

import './App.scss'

function App() {
  // Please note that we are storing the value of ComponentA and ComponentB in the state here, but also componentsA and componentsB.
  // This is a bit unusual.
  // Normally, if we needed those values in the parent component, we would pass them as props into the componentA and B.
  // If we store the valueA in componentA and also here, then we have to be very careful about them being in sync.
  // If the componentA (or B) didn't have `onChange` props, they would update themselves, but the parent would not know about it.
  // That would mean that the componentC and D (which are using the valueA and B) would be out of sync.
  const [aValue, setAValue] = useState(0)
  const [bValue, setBValue] = useState(0)
  const [showTimer, setShowTimer] = useState(false)

  useEffect(() => {
    console.log('This is first time the app is rendered')
  }, [])

  useEffect(() => {
    console.log(`A has been changed into ${aValue}`)
  }, [aValue])

  useEffect(() => {
    console.log(`B has been changed into ${bValue}`)
  }, [bValue])

  // Theoretically, you can put anything in the dependency array, and that will trigger the useEffect.
  // Note that the valueA or valueB are present in more than one useEffect.
  // If any of those values change, then the respective useEffects will run.
  useEffect(() => {
    console.log(`Either A or B has been changed ...`)
  }, [aValue, bValue])

  // This is a normal handler function.
  const handleOnValueChangeA = (newValue) => {
    setAValue(newValue)
  }

  // This is a special handler function - it actually is a `useCallback` hook.
  // We use this because the ComponentB is wrapped in a `memo`.
  const handleOnValueChangeB = useCallback((newValue) => {
    setBValue(newValue)
  }, [])

  const handleOnButtonClick = () => {
    setShowTimer(!showTimer)
  }

  console.log('App rendering')

  return (
    <div>
      <p>Hello from app</p>
      <ComponentA onChange={handleOnValueChangeA} />
      <ComponentB onChange={handleOnValueChangeB} />
      <ComponentC aValue={aValue} />
      <ComponentD aValue={aValue} bValue={bValue} />
      <ComponentE />
      <button onClick={handleOnButtonClick}>{`${showTimer ? 'Close' : 'Open'} timer`}</button>
      {/* Note that ComponentF only shows when the showTimer is true.  */}
      {/* The line below resolves as a conditional expression (true && something)  */}
      {showTimer && <ComponentF />}
    </div>
  )
}

export default App
