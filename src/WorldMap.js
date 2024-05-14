import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Link } from 'react-router-dom'; // Import Link from React Router
import countriesData from './maps/custom.geo (1).json'


const WorldMap = () => {
  // Your map data here
  return (
    <ComposableMap>
      <Geographies geography={ countriesData }>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => {
                window.location.href = `/`;
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;
