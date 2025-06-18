// ParentComponent.js
import React, { useState } from 'react';
import ChildCompo from './3.ChildCompo';

const ParentCompo = () => {
  const users = [
  {
    name: "Aarav Patel",
    email: "aarav.patel@example.com",
    gender: "Male",
    mobile: "9876543210"
  },
  {
    name: "Sanya Kapoor",
    email: "sanya.kapoor@example.com",
    gender: "Female",
    mobile: "9123456781"
  },
  {
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    gender: "Male",
    mobile: "9988776655"
  },
  {
    name: "Ishita Verma",
    email: "ishita.verma@example.com",
    gender: "Female",
    mobile: "9090909090"
  },
  {
    name: "Karan Singh",
    email: "karan.singh@example.com",
    gender: "Male",
    mobile: "9812345678"
  },
  {
    name: "Neha Joshi",
    email: "neha.joshi@example.com",
    gender: "Female",
    mobile: "9345678901"
  },
  {
    name: "Dev Sharma",
    email: "dev.sharma@example.com",
    gender: "Male",
    mobile: "9001122334"
  },
  {
    name: "Tanya Rao",
    email: "tanya.rao@example.com",
    gender: "Female",
    mobile: "9900112233"
  },
  {
    name: "Arjun Nair",
    email: "arjun.nair@example.com",
    gender: "Male",
    mobile: "9822334455"
  },
  {
    name: "Meera Pillai",
    email: "meera.pillai@example.com",
    gender: "Female",
    mobile: "9887766554"
  }
];

const [data, setData] = useState([]);

const arrayData = () => {

}

  return (
    <div>
      <ChildCompo users={users}/>
    </div>
  );
};

export default ParentCompo;
