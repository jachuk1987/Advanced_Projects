import React, { useState } from 'react'

const ValidationForm = () => {
    const [user, setUser] = useState({
        fName: "",
        age: "",
        email: "",
    });

    function handlechange = (e) => {}
  return (
    <div>
      <form>
        <label htmlFor="">Full Name</label>
        <input type="text" name='fName' value={user.fName} /> <br />
        <label htmlFor="">Age</label>
        <input type="text" name='lName' value={user.age}/> <br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={user.email}/>
      </form>
    </div>
  )
}

export default ValidationForm
