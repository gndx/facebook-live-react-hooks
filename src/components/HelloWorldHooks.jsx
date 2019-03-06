import React, { useState } from 'react';

const HelloWorldHooks = () => {

  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Ocultar
      </button>
      {active &&
        <h1>Hola Mundo Cruel</h1>
      }
    </div>
  );
}

export default HelloWorldHooks;