import React, { useEffect, useState } from "react";
import Table from "./Table";

const StudentData = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(()=>{fetchData()},[])

    const fetchData = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()
        setListUsers(data)
    }

    return (
        <div>
            <Table listUsers={listUsers}/>
        </div>
    )
};

export default StudentData;
