import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const {name, value} = e.target

    setUser((prev) => ({
      ...prev, [name]: value
    }))
  };

  const saveLocalStorage = () => {
    const updateUsers = [...users, user]
    localStorage.setItem("newUsers", JSON.stringify(updateUsers))
    setUsers(updateUsers)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    saveLocalStorage()
    // redirect to Login page
    navigate("login"); 
  };

  return (
    <div>
      <form>
        <label htmlFor="">First Name :</label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Last Name :</label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email :</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Password :</label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Confirm Password :</label>
        <input
          type="text"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
