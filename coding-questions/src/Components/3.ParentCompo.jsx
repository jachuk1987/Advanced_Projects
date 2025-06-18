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

    ];

    const [data, setData] = useState([]);

    const arrayData = (datafromchild) => {
        setData(datafromchild)
    }

    return (
        <div>
            <ChildCompo users={users} arrayData={arrayData} />

            <h2>Data from child as props and display in Parent Component</h2>
            {data.map((val, index) => (
                <ul key={index}>
                    <li>{val}</li>
                </ul>
            ))}
        </div>
    );
};

export default ParentCompo;
