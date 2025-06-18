import React from 'react';

const DisplayDynamicData = () => {

    const users = [
  {
    name: "Jeswanth K",
    email: "jeswanth@example.com",
    gender: "Male",
    mobile: "9876543210"
  },
  {
    name: "Anjali Sharma",
    email: "anjali.sharma@example.com",
    gender: "Female",
    mobile: "9123456780"
  },
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    gender: "Male",
    mobile: "9988776655"
  },
  {
    name: "Priya Mehta",
    email: "priya.mehta@example.com",
    gender: "Female",
    mobile: "9090909090"
  },
  {
    name: "Arun Das",
    email: "arun.das@example.com",
    gender: "Male",
    mobile: "9812345678"
  }
];

  return (
    <div style={{display: "flex", marginLeft: "120px", marginTop: "20pxha "}}>
      {users.map((val, index) => (
        <div style={{border:"1px solid blue", width: "250px", height: "200px", }} key={index}>
            <h4>{val.name}</h4>
            <p>{val.email}</p>
            <h6>{val.gender}</h6>
            <h6>{val.mobile}</h6>
        </div>
      ))}
    </div>
  )
}


export default DisplayDynamicData;
