import React from 'react'
import { VehiclePageWrapper, ContentWrapper, LeftCol, RightCol,
  LeftDescriptionWrapper, Make, Model, Year, Title, Specifications,
  SpecsIcon, SpecsText, SpecsContainer, SpecsItem } from './SingleVehicleElements'
import { useParams } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';
import { useSelector } from 'react-redux'
import seatsIcon from '../../images/CarCardIcons/seats.svg'
import doorsIcon from '../../images/CarCardIcons/doors.svg'
import transmissionIcon from '../../images/CarCardIcons/transmission.svg'
import fuelIcon from '../../images/CarCardIcons/fuel.svg'
import consumptionIcon from '../../images/CarCardIcons/consumption.svg'
import acIcon from '../../images/CarCardIcons/ac.svg'

const SingleVehiclePage = () => {
  let { id } = useParams();
  const vehicle = useSelector(state => state.shownCars.shownCars).find(veh => veh._id == id)
  console.log(vehicle)
  console.log(id)

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
                  <SpecsIcon img={seatsIcon}/>
                  <SpecsText>{vehicle.seats} seats</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={doorsIcon}/>
                  <SpecsText>{vehicle.doors} doors</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={transmissionIcon}/>
                  <SpecsText>{vehicle.transmission}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={fuelIcon}/>
                  <SpecsText>{vehicle.fuel}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={consumptionIcon}/>
                  <SpecsText>{vehicle.consumption}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={acIcon}/>
                  <SpecsText>{vehicle.ac}</SpecsText>
                </SpecsItem>
            </SpecsContainer>
            </Specifications>
          </LeftDescriptionWrapper>
        </LeftCol>
        <RightCol>

        </RightCol>
      </ContentWrapper>
    </VehiclePageWrapper>
  )
}

export default SingleVehiclePage