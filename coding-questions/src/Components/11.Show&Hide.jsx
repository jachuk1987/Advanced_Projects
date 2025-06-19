// import React, { useState } from 'react';

// function ToggleComponent() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(prev => !prev)}>
//         {show ? 'Hide' : 'Show'} Message
//       </button>

//       {show && <p>This message is conditionally shown</p>}
//     </div>
//   );
// }

// export default ToggleComponent;

const HideData = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
        <button onClick={()=>{setIsVisible(!isVisible)}}>{isVisible ? "Hide" : "Show"}</button>

        {isVisible && (
            <div>
                <p>Secret Data</p>
                <p>This is the data shown conditionally based on the button click</p>
            </div>
        )}
    </div>
  )
}

export default HideData;