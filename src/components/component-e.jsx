import { useState } from 'react'

export const ComponentE = () => {
  const [counter, setCounter] = useState(0)

  const handleOnChange = () => {
    setCounter(counter + 1)
    // Note that we are not informing the parent that the value has changed.
    // That means that the parent will not re-render.
  }

  console.log('Component E rendering')

  return (
    <div
      className="test-component interactive"
      style={{ backgroundColor: 'brown' }}
      onClick={handleOnChange}>
      {`Component E ${counter}`}
    </div>
  )
}
