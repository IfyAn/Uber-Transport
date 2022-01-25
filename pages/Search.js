import React, { useState } from 'react';
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Image from 'next/image'

const Search = () => {

    const [pick, setPick] = useState('')
    const [drop, setDrop] = useState('')
    console.log(pick);
  return(
    <Wrapper>
        <BackButtonContainer>
            <Link href="/">
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </Link>
        </BackButtonContainer>
        <InputContainer>
            <FromToIcons>
                <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
            </FromToIcons>
            <InputBoxes>
                <InputBox placeholder='Enter Pickup Location' value={pick} onChange={e=>setPick(e.target.value)} />
                <InputBox placeholder='Where To' value={drop} onChange={e=>setDrop(e.target.value)} />
            </InputBoxes>
            <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
        </InputContainer>
        <SavedPlaces>
            <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
            SavedPlaces
        </SavedPlaces>
        <Link
          href={{
            pathname: "/Confirm",
            query: {
              pick:pick, 
              drop:drop
            },
          }}
        >
         <ConfirmButtonContainer>
            Confirm Location
        </ConfirmButtonContainer>
      </Link>
    </Wrapper>
  ) 
};

export default Search;

const Wrapper = tw.div`
  bg-gray-200 h-screen
`
const BackButtonContainer = tw.div`
  bg-white px-4
`
const BackButton = tw.img`
    h-12 cursor-pointer
`
const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
    h-2.5 w-2.5
`
const Line = tw.img`
    h-10
`
const Square = tw.img`
    h-3 w-3
`
const InputBoxes = tw.div`
    flex flex-1 flex-col 
`
const InputBox = tw.input`
    bg-gray-200 h-10 my-2 p-2 rounded-2 outline-none border-none
`
const PlusIcon = tw.img`
    bg-gray-200 h-10 w-10 rounded-full ml-3
`
const SavedPlaces = tw.div`
bg-white flex items-center px-4 py-2
`
const StarIcon = tw.img`
    bg-gray-400 h-10 w-10 rounded-full p-2
`
const ConfirmButtonContainer = tw.div`
bg-black text-white text-center px-4 py-3 text-2xl mt-2 mx-4 cursor-pointer
`
