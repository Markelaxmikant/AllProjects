import React, { useState } from "react";

const GenRandmClr = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length){
      return Math.floor(Math.random()*length)
  }
  function handleRamdomHexColor() {
    // #125466

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i=0; i<6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor)
    setColor(hexColor)
  }
  function handleRamdomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
    console.log(`rgb(${r},${g},${b})`)


  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
      }}
    >
      <h1>Genrate Random Color</h1>
      <button onClick={() => setColorType("hex")}>Gen HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Gen RGBColor</button>
      <button
        onClick={
          colorType === "hex" ? handleRamdomHexColor : handleRamdomRgbColor
        }
      >
        Gen Ramdom Color
      </button>
      <div style={{
        display: 'flex',
        justifyContent : "center",
        alignItems : "center",
        color:"#fff",
        fontSize:"50px",
        marginTop:"50px",
        flexDirection:"column",
        gap:'20px'
      }}>
        <h2>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h2>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default GenRandmClr;
