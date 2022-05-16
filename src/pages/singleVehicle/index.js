import React, { forwardRef, useState } from 'react'
import {
  VehiclePageWrapper, ContentWrapper, LeftCol, RightCol,
  LeftDescriptionWrapper, Make, Model, Year, Title, Specifications,
  SpecsIcon, SpecsText, SpecsContainer, SpecsItem, ReservationWrapper,
  ReservationItemsWrapper, ReservationColumn, LocationInput,
  CustomDateInputButton, TimeInput, DatePickerWrapper,
  DateWrapperFlex, ReservationLabel, ReservationHeading
} from './SingleVehicleElements'
import { useParams } from 'react-router-dom';
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
  const vehicle = useSelector(state => state.shownCars.shownCars).find(veh => veh._id == id)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('08:00');

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <CustomDateInputButton value={value} className="example-custom-input" onClick={onClick} ref={ref}>

    </CustomDateInputButton>
  ));

  //Make it so that you cant get negative date
  var difference = endDate.getTime() - startDate.getTime();
  var reservationDays = Math.ceil(difference / (1000 * 3600 * 24));


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
            {reservationDays * vehicle.dayprice + '$'}
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
                </LocationInput>
              </ReservationColumn>
              <ReservationColumn>
                <ReservationLabel>Pick-up Date</ReservationLabel>
                <DateWrapperFlex>
                  <DatePickerWrapper
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />} />
                </DateWrapperFlex>
                <ReservationLabel>Return Date</ReservationLabel>
                <DateWrapperFlex>
                  <DatePickerWrapper
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
        </RightCol>
      </ContentWrapper>
    </VehiclePageWrapper>
  )
}

export default SingleVehiclePage