// This component updates when the parent component updates.
export const ComponentD = ({ aValue, bValue }) => {
  console.log('Component D rendering')
  return (
    <div className="test-component" style={{ backgroundColor: 'purple' }}>
      {`Component D ${aValue + bValue}`}
    </div>
  )
}
