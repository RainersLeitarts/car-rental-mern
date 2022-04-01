import React from 'react'
import CarCard from '../CarCard'
import { DisplayCarsWrapper, TopButtons, CarsWrapper } from './DisplayCarsElements'

const DisplayCars = () => {
  return (
    <DisplayCarsWrapper>
      <TopButtons>

      </TopButtons>
      <CarsWrapper>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />

        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </CarsWrapper>
    </DisplayCarsWrapper>
  )
}

export default DisplayCars