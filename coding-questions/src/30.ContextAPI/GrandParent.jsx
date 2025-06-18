import React from 'react'
import Parent from './Parent';

const GrandParent = () => {
    return (
        <>
            <h6>I am from Grand Parent</h6>
            <div style={{ width: "800px", height: "480px", border: "2px solid blue", margin: "auto" }}>
                <Parent />
            </div>
        </>
    )
}

export default GrandParent;
