import React from 'react'

const layout = () => {
  return (
    <div style={{
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center'
    }}  >
      <div style={{ backgroundColor: 'red', width: '500px', height: "500px" }}><span>Titulo</span><span>Subtitulo</span></div>
    </div>
  )
}

export default layout
