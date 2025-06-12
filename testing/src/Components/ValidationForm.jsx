import React, { useEffect, useState } from 'react'

const ValidationForm = () => {
  const [user, setUser] = useState({
    fName: "",
    age: "",
    email: "",
  });

  const [listUsers, setListUsers] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser((usr) => ({
      ...usr, [name]: value
    }))
  }

  useEffect(()=>{FetchData()},[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUser()
    await FetchData()

    if (!user.fName || !user.age || !user.email) {
      setError('All fields are required');
      return;
    }

    if (user.age.length < 2) {
      setError('Age should be 2 digits')
    }

    if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      setError("Invalid email format");
      return;
    }

    setError('')
  }

  const createUser = async () => {
    await fetch("http://localhost:3000/Jeswanth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
  }

  const FetchData = async () => {
    const response = await fetch("http://localhost:3000/Jeswanth")
    const data = await response.json()
    setListUsers(data)
  }

  return (
    <div>
      <form>
        <label htmlFor="">Full Name</label>
        <input type="text" name='fName' value={user.fName} onChange={handleChange} /> <br />
        <label htmlFor="">Age</label>
        <input type="text" name='age' value={user.age} onChange={handleChange} /> <br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={user.email} onChange={handleChange} /> <br />
        {error && <p style={{color: 'red'}}>{error}</p> }
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((usrd, index) => (
            <tr key={index}>
              <td>{usrd.fName}</td>
              <td>{usrd.age}</td>
              <td>{usrd.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ValidationForm;


