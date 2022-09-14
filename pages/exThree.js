import React from 'react'

const layout = () => {
  return (
    <div style={{
      display: "flex",
      flex: 1,
      flexDirection: 'column'
    }}>
      <div style={{ backgroundColor: 'gray', height: "100px", }}>Header</div>
      <div style={{ backgroundColor: 'white', flex: 1, alignItems: 'center',
      justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'red', width: '500px', height: "500px" }}><span>Titulo</span><span>Subtitulo</span></div>
      </div>
      <div style={{ backgroundColor: 'green', height: "150px", }}>Footer</div>
    </div>
  )
}

export default layout
