import React from 'react'

const layout = () => {
  return (
    <div style={{
      display: "flex",
      flex: 1,
      flexDirection: 'column'
    }}>
      <div style={{ backgroundColor: 'white', flex: 1, }}>Div 1</div>
      <div style={{ backgroundColor: 'blue', flex: 1, }}>Div 2</div>
      <div style={{ backgroundColor: 'red', flex: 1, }}>Div 3</div>
    </div>
  )
}

export default layout
