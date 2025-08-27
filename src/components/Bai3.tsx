import React, { useState } from 'react'
   
function Bai3() {
     const [color, setColor] = useState(`black`);
    const handleChange = () => {
        setColor(prev=>(prev === `black` ? `red`: `black`)) 
    }
  return (
    <>
    <p style={{color : color}}>Tieu de van ban</p>

    <button onClick={handleChange}>Thay doi mau</button>
    </>
  )
}

export default Bai3