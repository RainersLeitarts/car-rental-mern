import React, { useEffect, useState } from 'react'
import useHttp from '../../hooks/useHttp'
import CarCard from '../CarCard'
import { DisplayCarsWrapper, TopButtons, CarsWrapper } from './DisplayCarsElements'

const DisplayCars = () => {

  const {loading, error, sendRequest: fetchCars} = useHttp()
  const [cars, setCars] = useState(null)

  useEffect(()=>{
    const getCars = (carsData) => {
      setCars(carsData)
    }

    fetchCars({url: 'http://127.0.0.1:5000/cars'}, getCars)
  }, [fetchCars])

  return (
    <DisplayCarsWrapper>
      <TopButtons>

      </TopButtons>
      <CarsWrapper>
        {cars?.map(({make, model, seats, doors, transmission, fuel, consumption, ac, images}, id) => {
          return <CarCard key={id} make={make} model={model} seats={seats} doors={doors} transmission={transmission} fuel={fuel} consumption={consumption} ac={ac ? 'yes' : 'no'} image={images}/>
        })}
      </CarsWrapper>
    </DisplayCarsWrapper>
  )
}

export default DisplayCars