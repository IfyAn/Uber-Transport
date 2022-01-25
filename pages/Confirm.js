import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components"
import Image from 'next/image'
import Map from "./components/Map"
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
  const router = useRouter();
  const {pick, drop} = router.query

  const [pickup, setPickup] = useState([0,0]);
  const [dropoff, setDropoff] = useState([0,0]);

  const getPickUpCoordinate=(pick)=>{
  
      fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pick}.json?` + 
      new URLSearchParams({
        access_token:"pk.eyJ1IjoiaWZ5YW4iLCJhIjoiY2t5bXlrbXdyM2tldTJvcDg0Nzh4Z3B4NiJ9.5oDGkFcJ2N63LeKKxUksUA",
        limit:1
      })
    )
    .then(response=>response.json())
    .then(data=>{
      setPickup(data.features[0].center);
    })
  }
  const getDropoffCoordinate=(drop)=>{
    
      fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${drop}.json?` + 
      new URLSearchParams({
        access_token:"pk.eyJ1IjoiaWZ5YW4iLCJhIjoiY2t5bXlrbXdyM2tldTJvcDg0Nzh4Z3B4NiJ9.5oDGkFcJ2N63LeKKxUksUA",
        limit:1
      })
    )
    .then(response=>response.json())
    .then(data=>{
      setDropoff(data.features[0].center);
    })
  }

  useEffect(()=>{
    getPickUpCoordinate(pick)
    getDropoffCoordinate(drop)
  },[pick, drop])
  return(
    <Wrapper>
       <ButtonContainer>
        <Link href='/Search'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
        <Map pickup={pickup} dropoff={dropoff} />
        <RideContainer>
          <RideSelector pickup={pickup} dropoff={dropoff} />
          <ConfirmButtonContainer>
                <ConfirmButton>
                  Confirm UberX
                </ConfirmButton>
          </ConfirmButtonContainer>
        </RideContainer>
    </Wrapper>
  ) 
};

export default Confirm;

const Wrapper = tw.div`
    flex flex-col h-screen
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 text-center text-xl
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`