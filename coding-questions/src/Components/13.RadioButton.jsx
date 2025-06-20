import React, { useState } from 'react'

const RadioButton = () => {
    const [selectColor, setSelectColor] = useState("");
    const colors = ["Green" ,"Red", "Blue"];

  return (
    <div>
      <label htmlFor="">Select Color</label>
      {colors.map((val, index) => (
        <label key={index} style={{marginRight:"10px"}}>
            <input type="radio" name='color' value={val} checked={selectColor === val} onChange={(e)=>{setSelectColor(e.target.value)}} />
            {val}
        </label>
      ))}

      <p>Selected: {selectColor}</p>
    </div>
  )
};

export default RadioButton;
