import React, { useState } from 'react'

const ArrayOfObjects = () => {
    const optionsListed = [
    { id: 1, label: "JavaScript" },
    { id: 2, label: "Python" },
    { id: 3, label: "Java" }
  ];

  const [selected, setSelected] = useState("");

  return (
    <>
    <h3>Select Language</h3>
    <select value={selected} onChange={(e)=>{setSelected(e.target.value)}}>
        <option value="">Select</option>
        {optionsListed.map((opt)=>(
            <option value={opt.label} key={opt.id}>{opt.label}</option>
        ))}
    </select>
    <p>You have selected: {selected}</p>
    </>
  )
}

export default ArrayOfObjects;
