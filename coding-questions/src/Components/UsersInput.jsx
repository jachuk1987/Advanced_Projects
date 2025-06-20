import React, { useState } from 'react'

const UsersInput = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [submitData, setSubmitData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData({name, age, email})
    }
  return (
    <div>
      
    </div>
  )
}

export default UsersInput
