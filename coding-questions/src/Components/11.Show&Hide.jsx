import React, { useState } from 'react';

function ToggleComponent() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? 'Hide' : 'Show'} Message
      </button>

      {show && <p>This message is conditionally shown</p>}
    </div>
  );
}

export default ToggleComponent;
