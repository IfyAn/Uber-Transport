import React, { useEffect }  from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaWZ5YW4iLCJhIjoiY2t5bXlrbXdyM2tldTJvcDg0Nzh4Z3B4NiJ9.5oDGkFcJ2N63LeKKxUksUA';


 const Map = (props) => {
    
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      //center: [12.550343, 55.665957],
      center: [9.072264,  7.491302],
      zoom: 3
      });
      if(props.pickup){
        addToMap(map, props.pickup)
      }
      if(props.dropoff){
        addToMap(map, props.dropoff)
      }
      if(props.pickup && props.dropoff){
          map.fitBounds([
            props.pickup,
            props.dropoff
          ],{
            padding:60
          })
      }
    },[props.pickup, props.dropoff]);
    
    const addToMap=(map, coordinates)=>{
      const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }

    

  return <Wrapper id='map'></Wrapper>        ;
};

export default Map
const Wrapper = tw.div`
 flex-1 h-1/2
`