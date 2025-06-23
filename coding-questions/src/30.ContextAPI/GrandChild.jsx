import React from 'react'
import { UserContextInfo, UserContextInfoConsumer } from './UserContext';

const GrandChild = () => {
  return (
    <>
    <h6>I am from Grand Child</h6>
    <div style={{width: "500px", height: "180px", border: "2px solid blue" , margin: "auto", backgroundColor:"lightseagreen"}}>
      <UserContextInfoConsumer>
        {(data)=>(
            <ul>
                {data.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        )}
      </UserContextInfoConsumer>
    </div>
    </>
  )
}

export default GrandChild;
