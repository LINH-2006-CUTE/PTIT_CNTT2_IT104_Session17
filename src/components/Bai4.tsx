import React, { useState } from 'react'

function Bai4() {
    const [hide, setHide] = useState<string | null> ("Tieu de van ban");// hide có thể là string | null -> khai báo kiểu rõ ràng cho useState
    const toggleHide = () => {
        setHide(prev => (prev ? null : "Tieu de van ban"));
    }
  return (
    <>
     <button onClick={toggleHide}>{hide ? `Hien`: `An`}</button>
     <br />
    {hide}
    </>
   
  );
}

export default Bai4