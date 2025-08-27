import React, { useState } from "react";

function Bai8() {
  const [check, setCheck] = useState<string[]>([]);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheck([...check, value]);
    }
  };

  return (
    <>
      <p>Sở thích: {check.join(" ")}</p>

      <label>
        <input type="checkbox" value="Đi chơi" onChange={handleCheck} /> Đi chơi
      </label>
      <br />
      <label>
        <input type="checkbox" value="Học code" onChange={handleCheck} /> Học code
      </label>
      <br />
      <label>
        <input type="checkbox" value="Bơi lội" onChange={handleCheck} /> Bơi lội
      </label>
      <br />
      <label>
        <input type="checkbox" value="Nhảy dây" onChange={handleCheck} /> Nhảy dây
      </label>
    </>
  );
}

export default Bai8;
