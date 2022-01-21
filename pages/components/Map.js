import React, { useEffect }  from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaWZ5YW4iLCJhIjoiY2t5bXlrbXdyM2tldTJvcDg0Nzh4Z3B4NiJ9.5oDGkFcJ2N63LeKKxUksUA';


 const Map = () => {
    
  useEffect(() => {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',

    center: [9.072264,  7.491302],
    zoom: 3
    });
    });

    // const map = new mapboxgl.Map({
  //   container: 'YOUR_CONTAINER_ELEMENT_ID',
  //   style: 'mapbox://styles/mapbox/streets-v11'
  //   });
  return <Wrapper id='map'></Wrapper>        ;
};

export default Map
const Wrapper = tw.div`
 flex-1
`