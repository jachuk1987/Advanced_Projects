import React, { useEffect } from 'react';

const ChildCompo = ({ users, arrayData }) => {
    const names = [
        "Jeswanth K",
        "Anjali Sharma",
        "Ravi Kumar",
        "Priya Mehta",
        "Arun Das",
    ];

    useEffect(() => {
        arrayData(names)
    },[names]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((val, index) => (
                        <tr key={index}>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.gender}</td>
                            <td>{val.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ChildCompo;
