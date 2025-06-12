import React, { useState } from 'react'

const ValidationForm = () => {
    const [user, setUser] = useState({
        fName: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
      const {name, value} = e.target

      setUser((usr) => ({
        ...usr, [name]: value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
    }

  return (
    <div>
      <form>
        <label htmlFor="">Full Name</label>
        <input type="text" name='fName' value={user.fName} onChange={handleChange} /> <br />
        <label htmlFor="">Age</label>
        <input type="text" name='age' value={user.age} onChange={handleChange}/> <br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={user.email} onChange={handleChange}/> <br />
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default ValidationForm;


