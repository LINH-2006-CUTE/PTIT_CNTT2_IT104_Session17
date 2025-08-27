import React, {useState}from 'react'

function Bai5() {
    const [content, setContent] = useState (``);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => { //định kiểu rõ ràng cho event khi xử lý sự kiện thay đổi như onChange( )
        setContent (event.target.value)
    }   
  return (
   <>
   <form action="">
    <input onChange={handleInput} type="text" placeholder='Nhap noi dung' />
   </form>
   <p>{content}</p>
   </>
  )
}

export default Bai5