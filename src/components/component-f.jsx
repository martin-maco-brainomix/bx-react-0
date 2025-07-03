import { useEffect, useRef, useState } from 'react'

export const ComponentF = () => {
  const [timerValue, setTimerValue] = useState(0) // In milliseconds
  const [isTimerRunning, setIsTimerRunning] = useState(false) // A boolean value
  const timer = useRef(null) // we use a ref to store the timer variable

  // just a simple function to convert milliseconds to a string
  const getFractionatedTime = (time) =>
    `${Math.floor(time / 100)}:${time % 100 < 10 ? '0' : ''}${time % 100}`

  useEffect(() => {
    if (isTimerRunning) {
      timer.current = setInterval(() => {
        // This will not work, because at the time of creating this `setInterval` function body, the `timerValue` is 0.
        // It will always be remembered as 0.
        // setTimerValue(timerValue + 1) // - THIS WILL NOT WORK

        // The useState also offers us the previous (very recent) value as an argument of a callback function.
        // We are going to use that to update the value instead.
        setTimerValue((prev) => prev + 1) // - THIS WILL WORK

        // Another way how to achieve the same thing is to use the `useRef` hook.
        // We can define the new `useRef` variable outside the `useEffect` function (like at row 7) and we call it timerRef.
        // Then, we can use the `current` property to access the value of the variable.
        // timerRef.current = timerRef.current + 1 // - THIS WILL WORK
      }, 10)
    }
  }, [isTimerRunning])

  // This useEffect runs when the component is mounted.
  useEffect(() => {
    console.log('Component F mounted')

    // This is our cleanup function. It runs when the component is unmounted.
    // If we want to clean up some resources, we can do it here.
    // If this useEffect does not return anything, then it will not run when the component is unmounted.
    // Usually, cleanup functions are optional things.
    return () => {
      console.log('Component F unmounted')

      if (timer.current) {
        console.log('Clearing timer, because it is still running')
        clearInterval(timer.current)
      }
    }
  }, [])

  const handleOnButtonClick = () => {
    const newValue = !isTimerRunning // flipping the value
    setIsTimerRunning(newValue)

    // if we used the `isTimerRunning` here, it would still be holding its previous value (because it is async).
    if (!newValue) {
      clearInterval(timer.current)
      setTimerValue(0) // set to 0, so when we start the timer again, it will start from 0 (otherwise it would just resume)
    }
  }

  console.log('Component F rendering')

  return (
    <div
      className="test-component"
      style={{ backgroundColor: '#bb7a02', display: 'flex', flexDirection: 'column' }}>
      <p>Component F</p>
      {isTimerRunning && <p>Timer is {getFractionatedTime(timerValue)}</p>}
      {/* instead of timerValue, we can also use the timerRef.current variable, if we decided to go that way */}
      <button onClick={handleOnButtonClick}>{`${isTimerRunning ? 'Stop' : 'Start'} timer`}</button>
    </div>
  )
}
