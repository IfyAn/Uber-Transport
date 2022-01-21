// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import Link from 'next/link'

export default function Home() {

  return (
    <Wrapper>
     <Map />
     <ActionItems>
       <Header>
         <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' alt='logo' />
         <Profile>
           <Name>Mike</Name>
           <UserImage src='https://i.ibb.co/YDYMKny/uberxl.png' />
         </Profile>
       </Header>
       <ActionButtonsContainer>
       <Link href="/Search">
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
            Ride
          </ActionButton>
          </Link>
        <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
          Wheels
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src=' https://i.ibb.co/5RjchBg/uberschedule.png' />
          Reserve
        </ActionButton>
       </ActionButtonsContainer>
       <InputButton>
          Where to?
       </InputButton>
     </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`
const ActionItems = tw.div`
 flex-1 p-4
`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
 h-28
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-4 w-20
`
const UserImage= tw.img`
  w-12 h-12 rounded-full boder border-gray-200 p-px
`
const ActionButtonsContainer = tw.div`
  flex m-4 
`
const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col rounded-lg justify-center transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
 h-3/5
`
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 items-center flex mt-8
`