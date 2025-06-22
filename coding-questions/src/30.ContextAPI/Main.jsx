import React, { useState } from 'react'
import GrandParent from './GrandParent';
import { UserContextInfoProvider } from './UserContext';

const Main = () => {
    const [fruits, setFruits] = useState([
        "Apple",
        "Orange",
        "Grapes",
        "Pineapple",
        "Strawberry",
        "Watermelon",
    ])

    return (
        <div style={{ width: "900px", height: "660px", border: "2px solid blue", margin: "auto", backgroundColor:"blueviolet" }}>
            <UserContextInfoProvider value={fruits} >
                <GrandParent />
            </UserContextInfoProvider>
            
        </div>
    )
}

export default Main;
