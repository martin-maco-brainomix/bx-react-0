import { useState } from 'react'

// This component updates when the parent component updates.
// It also re-renders when the value of the counter-changes.
export const ComponentA = ({ onChange }) => {
  const [counter, setCounter] = useState(0)

  const handleOnChange = () => {
    // we need to create a new value for the counter.
    const newValue = counter + 1

    setCounter(newValue)

    // The `setCounter` function is async, which means that the value of the counter is not updated yet.
    // Therefore, we need to do the computation manually (hence the `newValue` variable)
    onChange(newValue) // we are informing the parent that the value has changed
  }

  console.log('Component A rendering')

  return (
    <div
      className="test-component interactive"
      style={{ backgroundColor: '#8a2e2e' }}
      onClick={handleOnChange}>
      {`Component A ${counter}`}
    </div>
  )
}
