import React, { useState } from 'react'

function Bai7() {
    const [content, setContent] = useState (``);
    const selecct = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent (event.target.value)
    }

  return (
    <>
    <select onChange={selecct} value={content}>
        <option value="">Chon thanh pho</option>
        <option value="Ha Noi">Ha Noi</option>
        <option value="Ha Giang">Ha Giang</option>
        <option value="Nam Dinh">Nam Dinh</option>
        <option value="Ninh Binh">Ninh Binh</option>
    </select>
    <p>{content}</p>
    </>
      )
}

export default Bai7