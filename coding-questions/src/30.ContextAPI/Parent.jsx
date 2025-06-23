import React from 'react'
import Child from './Child';

const Parent = () => {
    return (
        <>
            <h6>I am from Parent</h6>
            <div style={{ width: "700px", height: "420px", border: "2px solid blue", margin: "auto", backgroundColor:"lightpink" }}>
                <Child />
            </div>
        </>
    )
}

export default Parent;
