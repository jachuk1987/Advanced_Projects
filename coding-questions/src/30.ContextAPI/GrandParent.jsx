import React from 'react'
import Parent from './Parent';

const GrandParent = () => {
    return (
        <>
            <h6>I am from Grand Parent</h6>
            <div style={{ width: "800px", height: "540px", border: "2px solid blue", margin: "auto", backgroundColor:"lightgreen" }}>
                <Parent />
            </div>
        </>
    )
}

export default GrandParent;
