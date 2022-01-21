import React, { useState, useEffect } from 'react';
import tw from "tailwind-styled-components"
import  { carList }  from '../data/carList'

const RideSelector = ({pickup, dropoff}) => {
     const [duration, setDuration] = useState(0)

     useEffect(() => {
        duration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${dropoff[0]},${dropoff[1]}?access_token=pk.eyJ1IjoiaWZ5YW4iLCJhIjoiY2t5bXlrbXdyM2tldTJvcDg0Nzh4Z3B4NiJ9.5oDGkFcJ2N63LeKKxUksUA`)
          .then(response=>response.json())
          .then(data=>{
               setDuration(data.routes && data.routes[0].duration/100);
          })
     },[pickup, dropoff]);
     
     // useEffect(() => {
     //      duration = fetch(
     //        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${dropoff[0]},${dropoff[1]}?access_token=pk.eyJ1IjoiaWZ5YW4iLCJhIjoiY2t5bXlrbXdyM2tldTJvcDg0Nzh4Z3B4NiJ9.5oDGkFcJ2N63LeKKxUksUA`
     //      )
     //        .then(res => res.json())
     //        .then(data => {
     //          setDuration(data.routes[0].duration / 100)
     //        })
     //    }, [pickup, dropoff])

  return (
    <Wrapper>
        <Title>Choose a ride or swipe up for more</Title>
        <CarList>
              {carList.map((car, index)=>(
                <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>5 min Away</Time>
                    </CarDetails>
                    <Price>{'$' + (duration * car.multiplier).toFixed(2)}</Price>
                 </Car>
                  ))} 
        </CarList>
    </Wrapper>
  )
};

export default RideSelector;


const Wrapper = tw.div`
    flex flex-1 overflow-y-scroll flex-col
`
const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
  overflow-y-scroll
`
const Car = tw.div`
     flex p-4 items-center
`
const CarImage = tw.img`
     h-14 mr-4
`
const CarDetails = tw.div`
     flex-1 
`
const Service = tw.div`
     font-midium 
`
const Time = tw.div`
     text-xs text-blue-500
`
const Price = tw.div`
     text-sm
`
