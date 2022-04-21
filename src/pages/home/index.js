import React from 'react'
import { HomeWrapper, Hero, Heading, Paragraph, Scroll, ScrollButton, ScrollText } from './HomeElements'
import scrollBtn from '../../images/arrow-down.svg'
import DisplayCars from '../../components/DisplayCars'
//redux test
import { useSelector } from 'react-redux'

const Home = () => {
  //redux test
  const isLoggedIn = useSelector(state => state.login.loggedIn)
  const user = useSelector(state => state.login.user)
  console.log(isLoggedIn ? `${user} just logged in` : isLoggedIn)

  return (
    <HomeWrapper>
      <Hero>
        <Heading>
          Rent a car now!
        </Heading>
        <Paragraph>
          Best rentals high quality, low cost, supported by the best insurance companies pick a car and go drive!
        </Paragraph>
        <Scroll>
          <ScrollText>Reserve now!</ScrollText>
          <ScrollButton src={scrollBtn}/>
        </Scroll>
      </Hero>
      <DisplayCars />
    </HomeWrapper>
  )
}

export default Home