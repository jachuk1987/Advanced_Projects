import React, { useState } from 'react'

const ControlledUsers = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser((preview) => ({
      ...preview, [name]: value 
    }))
  }
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" name='name' value={user.name} onChange={handleChange} />
      <label htmlFor="">Age</label>
      <input type="text" name='age' value={user.age} onChange={handleChange}/>
      <label htmlFor="">Gender</label>
      <input type="text" name='gender' value={user.gender} onChange={handleChange}/>
      <label htmlFor="">Mobile</label>
      <input type="text" name='mobile' value={user.mobile} onChange={handleChange}/>
    </div>
  )
}

export default ControlledUsers;
