import React, { useState } from 'react'

const ValidationForm = () => {
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        email: "",
    });

    function handlechange = (e) => {}
  return (
    <div>
      <form>
        <label htmlFor="">First Name</label>
        <input type="text" name='fName' value={user.fName} /> <br />
        <label htmlFor="">Last Name</label>
        <input type="text" name='lName' value={user.lName}/> <br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={user.email}/>
      </form>
    </div>
  )
}

export default ValidationForm
