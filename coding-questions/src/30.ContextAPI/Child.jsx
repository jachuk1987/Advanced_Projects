import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <>
    <h6>I am from Child</h6>
    <div style={{width: "600px", height: "300px", border: "2px solid blue" , margin: "auto", backgroundColor:"yellowgreen"}}>
      <GrandChild />
    </div>
    </>
  )
}

export default Child
