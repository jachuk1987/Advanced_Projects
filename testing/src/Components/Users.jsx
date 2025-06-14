import React, { useEffect, useState } from 'react';

const Users = () => {

    const [listUsers, setListUsers] = useState([]);
    useEffect(()=> {FetchData()},[])
    const FetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            setListUsers(data.users)
        } catch (err) { console.log("Error Fetching Data", err) }

    }
    return (
        <div>
            <table style={{border: "1px solid blue"}}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map((usr, index) => (
                        <tr key={index}>
                            <td>{usr.firstName}</td>
                            <td>{usr.age}</td>
                            <td>{usr.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Users;
