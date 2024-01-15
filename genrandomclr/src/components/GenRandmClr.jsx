import React, { useState } from 'react'

const GenRandmClr = () => {
    const [colorType, setColorType] = useState("hex")
    const [color, setColor] = useState("#000")
  return (
    <div style={{
        height: "100vh",
        width: "100vw",
        background:color
    }}>
        <h1>Genrate Random Color</h1>
        <button>Gen HEX Color</button>
        <button>Gen RGBColor</button>
        <button>Gen Ramdom Color</button>
    </div>
  )
}

export default GenRandmClr