import React, { useState } from 'react'

const ControlledUsers = () => {
  const [user, setUser] = useState({
    name:"",
    age:"",
    gender:"",
    mobile:""
  })
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" name='name' value={user.name}/>
      <label htmlFor="">Age</label>
      <input type="text" name='age' value={user.age}/>
      <label htmlFor="">Gender</label>
      <input type="text" name='gender' value={user.gender}/>
      <label htmlFor="">Mobile</label>
      <input type="text" name='mobile'value={user.mobile}/>
    </div>
  )
}

export default ControlledUsers;
