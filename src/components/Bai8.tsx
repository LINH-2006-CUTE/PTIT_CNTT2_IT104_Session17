import React from 'react'

function Bai8() {
    const [check, setCheck] = useState ([])
    const checkArr = ["di choi", "hoc code", "boi loi", "nhay day"];
    const handleCheck = (event : React.ChangeEvent<HTMLInputElement>) => {
        setCheck (event.target.value)
    }
  return (
    <>
    <p>So thich : {check}</p>
        <label >
            <input type="checkbox" value={Di choi}/> Di choi
            <input type="text" name="" id="" value={Hoc code}/> Hoc code
            <input type="text" name="" id="" value={{Nhay day}}/>Nhay day
            <input type="text" name="" id="" value={Da bong} />Da bong
            <input type="text" name="" id="" value={Boi loi}/>Boi loi


        </label>
    </>
  )
}

export default Bai8