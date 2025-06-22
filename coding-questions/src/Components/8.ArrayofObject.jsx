import React, { useState } from 'react';

const ArrayOfObject = () => {
  const Optionslist = ["React", "Next.js", "Angular"];

  const [selected, setSelected] = useState("")

  return (
    <>
    <label htmlFor="">Select Course</label><br />
    <select value={selected} onChange={(e)=>{setSelected(e.target.value)}}>
        <option value="">Select Course</option>
        {Optionslist.map((item, index)=>(
            <option value={item} key={index}>{item}</option>
        ))}
    </select>
    <p>selected: {selected}</p>
    </>
  )
};

export default ArrayOfObject;