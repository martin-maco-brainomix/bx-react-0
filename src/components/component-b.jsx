import { useState, memo } from 'react'

// This component only re-renders when the value of the counter-changes.
// It does not re-render when its parent is updated. Unless the parent changes the `onChange` function.
// Note that we wrapped the component in a `memo` to avoid re-rendering the component when the parent changes.
export const ComponentB = memo(({ onChange }) => {
  const [counter, setCounter] = useState(0)

  const handleOnChange = () => {
    const newValue = counter + 1
    setCounter(newValue)
    onChange(newValue)
  }

  console.log('Component B rendering')

  return (
    <div
      className="test-component interactive"
      style={{ backgroundColor: '#306330' }}
      onClick={handleOnChange}>
      {`Component B ${counter}`}
    </div>
  )
})
// Since the ComponentB is wrapped in a `memo` we need to set the displayName.
// Otherwise, the name will be `memo(ComponentB)`
ComponentB.displayName = 'ComponentB'
