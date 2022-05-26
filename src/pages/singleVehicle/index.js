import React, { forwardRef, useState } from 'react'
import {
  VehiclePageWrapper, ContentWrapper, LeftCol, RightCol,
  LeftDescriptionWrapper, Make, Model, Year, Title, Specifications,
  SpecsIcon, SpecsText, SpecsContainer, SpecsItem, ReservationWrapper,
  ReservationItemsWrapper, ReservationColumn, LocationInput,
  CustomDateInputButton, TimeInput, DatePickerWrapper,
  DateWrapperFlex, ReservationLabel, ReservationHeading,
  InsuranceOptions, InsuranceOption, InsuranceOptionText,
  InsuranceOptionSmallText, ExtrasContainer, ExtrasTitle, ExtrasValue,
  TotalPrice, RentButton
} from './SingleVehicleElements'
import { useNavigate, useParams } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';
import { useSelector } from 'react-redux'
import seatsIcon from '../../images/CarCardIcons/seats.svg'
import doorsIcon from '../../images/CarCardIcons/doors.svg'
import transmissionIcon from '../../images/CarCardIcons/transmission.svg'
import fuelIcon from '../../images/CarCardIcons/fuel.svg'
import consumptionIcon from '../../images/CarCardIcons/consumption.svg'
import acIcon from '../../images/CarCardIcons/ac.svg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//timepicker

import TimeField from 'react-simple-timefield';

const SingleVehiclePage = () => {
  let { id } = useParams();
  const navigator = useNavigate()
  const vehicle = useSelector(state => state.shownCars.shownCars).find(veh => veh._id == id)
  const isLoggedIn = useSelector(state => state.user.user.accessToken)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(setMinimumDays(startDate, 2));
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('08:00');

  //empty onChange() because otherwise value causes error
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <CustomDateInputButton value={value} onChange={() => { }} className="example-custom-input" onClick={onClick} ref={ref}>

    </CustomDateInputButton>
  ));

  //Make it so that you cant get negative date
  var difference = endDate.getTime() - startDate.getTime();
  var reservationDays = Math.ceil(difference / (1000 * 3600 * 24));

  function setMinimumDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const safetyPayment = 200

  const tripOptions = {
    1: { option: 1, optionName: '100 km/day', price: 5 },
    2: { option: 2, optionName: '200 km/day', price: 7 },
    3: { option: 3, optionName: '500 km/day', price: 13 },
    4: { option: 4, optionName: 'Unlimited', price: 15 },
  }

  const insuranceOptions = {
    1: { option: 1, optionName: 'Basic Package', price: 20 },
    2: { option: 2, optionName: 'Extra Safety', price: 35 },
    3: { option: 3, optionName: 'Premium Package', price: 120 },
    4: { option: 4, optionName: 'I NEVER crash', price: 0 },
  }

  const [activeDistanceOption, setActiveDistanceOption] = useState(tripOptions[1])
  const [activeInsuranceOption, setActiveInsuranceOption] = useState(insuranceOptions[1])


  const changeActiveOption = (type, option) => {
    if (type === 'trip') {
      //console.log(e.target.children[0]?.innerText)
      switch (option) {
        case 1:
          setActiveDistanceOption(tripOptions[1])
          break
        case 2:
          setActiveDistanceOption(tripOptions[2])
          break
        case 3:
          setActiveDistanceOption(tripOptions[3])
          break
        case 4:
          setActiveDistanceOption(tripOptions[4])
          break
      }
    } else if (type === 'insurance') {
      switch (option) {
        case 1:
          setActiveInsuranceOption(insuranceOptions[1])
          break
        case 2:
          setActiveInsuranceOption(insuranceOptions[2])
          break
        case 3:
          setActiveInsuranceOption(insuranceOptions[3])
          break
        case 4:
          setActiveInsuranceOption(insuranceOptions[4])
          break
      }
    }
  }

  const rentNowHandler = () => {
    if(!isLoggedIn){
      navigator('/login')
    }
  }

  return (
    <VehiclePageWrapper>
      <ContentWrapper>
        <LeftCol>
          <ImageSlider images={vehicle.images}>

          </ImageSlider>

          <LeftDescriptionWrapper>
            <Title>
              <Make>{vehicle.make} {vehicle.model}</Make>
              <Year>{vehicle.year}</Year>
            </Title>
            <Specifications>
              <SpecsContainer>
                <SpecsItem>
                  <SpecsIcon img={seatsIcon} />
                  <SpecsText>{vehicle.seats} seats</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={doorsIcon} />
                  <SpecsText>{vehicle.doors} doors</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={transmissionIcon} />
                  <SpecsText>{vehicle.transmission}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={fuelIcon} />
                  <SpecsText>{vehicle.fuel}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={consumptionIcon} />
                  <SpecsText>{vehicle.consumption}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={acIcon} />
                  <SpecsText>{vehicle.ac}</SpecsText>
                </SpecsItem>
              </SpecsContainer>
            </Specifications>
            <ExtrasContainer>
              <ExtrasTitle>Safety Payment: ${safetyPayment}</ExtrasTitle>
              <ExtrasValue>This will be returned</ExtrasValue>
              <ExtrasTitle>Vehicle rent: ${vehicle.dayprice * reservationDays}</ExtrasTitle>
              <ExtrasValue>{'$' + vehicle.dayprice + '/day X ' + reservationDays}</ExtrasValue>
              <ExtrasTitle>Insurance: ${activeInsuranceOption.price}</ExtrasTitle>
              <ExtrasValue>{activeInsuranceOption.optionName}</ExtrasValue>
              <ExtrasTitle>Trip distance: ${activeDistanceOption.price}</ExtrasTitle>
              <ExtrasValue>{activeDistanceOption.optionName}</ExtrasValue>
              <TotalPrice>Total: ${activeInsuranceOption.price + activeDistanceOption.price + safetyPayment + (vehicle.dayprice * reservationDays)}</TotalPrice>
              <RentButton onClick={rentNowHandler}>Rent Now</RentButton>
            </ExtrasContainer>



          </LeftDescriptionWrapper>
        </LeftCol>
        <RightCol>
          <ReservationWrapper>
            <ReservationHeading>Reservation options</ReservationHeading>
            <ReservationItemsWrapper>
              <ReservationColumn>
                <ReservationLabel>Pick-up Location</ReservationLabel>
                <LocationInput>
                  <option>Rīga, Pērnavas iela 7</option>
                </LocationInput>
                <ReservationLabel>Return Location</ReservationLabel>
                <LocationInput>
                  <option>Rīga, Pērnavas iela 7</option>
                  <option>Rīga, Pērnavas iela 7</option>
                  <option>Rīga, Pērnavas iela 7</option>
                  <option>Rīga, Pērnavas iela 7</option>
                  <option>Rīga, Pērnavas iela 7</option>
                </LocationInput>
              </ReservationColumn>
              <ReservationColumn>
                <ReservationLabel>Pick-up Date</ReservationLabel>
                <DateWrapperFlex>
                  <DatePickerWrapper
                    selected={startDate}
                    onChange={(date: Date) => { setStartDate(date) }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsStart
                    customInput={<ExampleCustomInput />} />
                </DateWrapperFlex>
                <ReservationLabel>Return Date</ReservationLabel>
                <DateWrapperFlex>
                  <DatePickerWrapper
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={setMinimumDays(startDate, 2)}
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    customInput={<ExampleCustomInput />} />
                </DateWrapperFlex>
              </ReservationColumn>
              <ReservationColumn>
                <ReservationLabel>Pick-up Time</ReservationLabel>
                <TimeField
                  value={startTime}                       // {String}   required, format '00:00' or '00:00:00'
                  onChange={(event, value) => { setStartTime(value) }}
                  input={<TimeInput />} // {Function} required
                />
                <ReservationLabel>Return Time</ReservationLabel>
                <TimeField
                  value={endTime}                       // {String}   required, format '00:00' or '00:00:00'
                  onChange={(event, value) => { setEndTime(value) }}
                  input={<TimeInput />} // {Function} required
                />
              </ReservationColumn>
            </ReservationItemsWrapper>
          </ReservationWrapper>
          <ReservationWrapper>
            <ReservationItemsWrapper>
              <ReservationHeading>Insurance options</ReservationHeading>
            </ReservationItemsWrapper>
            <InsuranceOptions>
              <InsuranceOption onClick={(e) => { changeActiveOption('insurance', 1) }} active={activeInsuranceOption.option === 1 ? true : false}>
                <InsuranceOptionText>Basic Package</InsuranceOptionText>
                <InsuranceOptionSmallText>Basically useless</InsuranceOptionSmallText>
                <p style={{ padding: 0, margin: 0, fontSize: '9px', lineHeight: '5px' }}></p>
              </InsuranceOption>
              <InsuranceOption onClick={(e) => { changeActiveOption('insurance', 2) }} active={activeInsuranceOption.option === 2 ? true : false}>
                <InsuranceOptionText>Extra safety</InsuranceOptionText>
                <InsuranceOptionSmallText>50% discount on your first crash</InsuranceOptionSmallText>
                <p style={{ padding: 0, margin: 0, fontSize: '9px', lineHeight: '5px' }}></p>
              </InsuranceOption>
              <InsuranceOption onClick={(e) => { changeActiveOption('insurance', 3) }} active={activeInsuranceOption.option === 3 ? true : false}>
                <InsuranceOptionText>Premium package</InsuranceOptionText>
                <InsuranceOptionSmallText>Probably costs more than the rent</InsuranceOptionSmallText>
                <p style={{ padding: 0, margin: 0, fontSize: '9px', lineHeight: '5px' }}></p>
              </InsuranceOption>
              <InsuranceOption onClick={(e) => { changeActiveOption('insurance', 4) }} active={activeInsuranceOption.option === 4 ? true : false}>
                <InsuranceOptionText>I NEVER crash</InsuranceOptionText>
                <InsuranceOptionSmallText>Trust me bro</InsuranceOptionSmallText>
                <p style={{ padding: 0, margin: 0, fontSize: '9px', lineHeight: '5px', transition: 'all 0.5s' }}></p>
              </InsuranceOption>
            </InsuranceOptions>
          </ReservationWrapper>
          <ReservationWrapper>
            <ReservationItemsWrapper>
              <ReservationHeading>Trip distance</ReservationHeading>
            </ReservationItemsWrapper>
            <InsuranceOptions>
              <InsuranceOption onClick={(e) => { changeActiveOption('trip', 1) }} active={activeDistanceOption.option === 1 ? true : false}>
                <InsuranceOptionText>100 km/day</InsuranceOptionText>
              </InsuranceOption>
              <InsuranceOption onClick={(e) => { changeActiveOption('trip', 2) }} active={activeDistanceOption.option === 2 ? true : false}>
                <InsuranceOptionText>200 km/day</InsuranceOptionText>
              </InsuranceOption>
              <InsuranceOption onClick={(e) => { changeActiveOption('trip', 3) }} active={activeDistanceOption.option === 3 ? true : false}>
                <InsuranceOptionText>500 km/day</InsuranceOptionText>
              </InsuranceOption>
              <InsuranceOption onClick={(e) => { changeActiveOption('trip', 4) }} active={activeDistanceOption.option === 4 ? true : false}>
                <InsuranceOptionText>Unlimited</InsuranceOptionText>
              </InsuranceOption>
            </InsuranceOptions>
          </ReservationWrapper>
        </RightCol>
      </ContentWrapper>
    </VehiclePageWrapper>
  )
}

export default SingleVehiclePage