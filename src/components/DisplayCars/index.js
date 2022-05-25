import React, { useEffect, useState } from 'react'
import useHttp from '../../hooks/useHttp'
import CarCard from '../CarCard'
import { DisplayCarsWrapper, TopButtons, CarsWrapper, TopCarsTitle } from './DisplayCarsElements'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { shownCarsActions } from '../../store/shownCars'

const DisplayCars = () => {
  const {loading, error, sendRequest: fetchCars} = useHttp()
  const dispatch = useDispatch()
  const shownCars = useSelector(state => state.shownCars.shownCars)

  useEffect(()=>{
    const getCars = (carsData) => {
      dispatch(shownCarsActions.updateCars(carsData))
    }

    fetchCars({url: 'http://127.0.0.1:5000/cars'}, getCars)
  }, [fetchCars])

  return (
    <DisplayCarsWrapper>
      <TopCarsTitle>Our Top Rentals</TopCarsTitle>
      <TopButtons>

      </TopButtons>
      <CarsWrapper>
        {shownCars?.map(({_id, make, model, seats, doors, transmission, fuel, consumption, ac, dayprice, weekprice, monthprice, images}, index) => {
          return <CarCard key={index} vehicleId={_id} make={make} model={model} seats={seats} doors={doors} transmission={transmission} fuel={fuel} consumption={consumption}
          ac={ac ? 'yes' : 'no'} image={images} dayprice={dayprice} weekprice={weekprice} monthprice={monthprice} />
        })}
      </CarsWrapper>
    </DisplayCarsWrapper>
  )
}

export default DisplayCars