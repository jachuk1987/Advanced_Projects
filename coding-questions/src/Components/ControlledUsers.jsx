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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <label htmlFor="">Name</label>
      <input type="text" name='name' value={user.name} onChange={handleChange} /> <br />
      <label htmlFor="">Age</label>
      <input type="text" name='age' value={user.age} onChange={handleChange} /><br />
      <label htmlFor="">Gender</label>
      <input type="text" name='gender' value={user.gender} onChange={handleChange} /> <br />
      <label htmlFor="">Mobile</label>
      <input type="text" name='mobile' value={user.mobile} onChange={handleChange} />  <br />

      <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ControlledUsers;
