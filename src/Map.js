import React from 'react';
import WorldMap from './world.svg';

const Map = () => {
  return (
    <div style={{width : '100%', margin: '0 auto', fill: '#006284'}}>
      <h2>World Map</h2>
      <svg
      width="100%"
      height="auto"
      viewBox="0 0 2000 857"
      xmlns="http://www.w3.org/2000/svg"
      >
        <image href={WorldMap} width="100%" height="100%" fill='#006284'/>
      </svg>
    </div>
  );
};

export default Map;
