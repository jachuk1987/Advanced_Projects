// ParentComponent.js
import React, { useState } from 'react';
import Table from './2.Table';

const ParentComponent = () => {
  const users = [
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

  return (
    <div>
      <h2>Sending props to child and create table there then display in Parent Component</h2>
      <Table users={users}/>
    </div>
  );
};

export default ParentComponent;
