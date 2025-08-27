import React, { useState } from 'react'

function Bai6() {
    const [text, setText] = useState (``);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
  return (
    <>
    <textarea placeholder='Nhap noi dung can dem' onChange={handleInput}> </textarea>
    <p>So ki tu : {text.length}</p>
    </>
  )
}

export default Bai6