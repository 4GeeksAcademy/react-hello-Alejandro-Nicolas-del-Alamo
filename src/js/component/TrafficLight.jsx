import React, { useState } from 'react';
import './index.css';

const TrafficLight = () => {
  const [activarLuz, setActivarLuz] = useState(null);

  const Click = (color) => {
    setActivarLuz(color);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => Click('red')}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => Click('yellow')}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => Click('green')}
      ></div>
    </div>
  );
};

export default TrafficLight;