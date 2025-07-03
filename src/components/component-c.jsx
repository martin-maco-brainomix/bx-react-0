// This component updates when the parent component updates.
export const ComponentC = ({ aValue }) => {
  console.log('Component C rendering')
  return (
    <div className="test-component" style={{ backgroundColor: '#616132' }}>
      {`Component C ${aValue * 2}`}
    </div>
  )
}
