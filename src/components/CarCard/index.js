import React, { useState } from 'react'
import { CardWrapper, TopContainer, ImageContainer, Image, BottomContainer,
  BrandName, ModelName, SpecsContainer, SpecsItem, SpecsIcon, SpecsText } from './CarCardElements'
import seatsIcon from '../../images/CarCardIcons/seats.svg'
import doorsIcon from '../../images/CarCardIcons/doors.svg'
import transmissionIcon from '../../images/CarCardIcons/transmission.svg'
import fuelIcon from '../../images/CarCardIcons/fuel.svg'
import consumptionIcon from '../../images/CarCardIcons/consumption.svg'
import acIcon from '../../images/CarCardIcons/ac.svg'


const CarCard = ({make, model, seats, doors, transmission, fuel, consumption, ac, image}) => {
  return (
    <CardWrapper>
        <TopContainer>
            <ImageContainer image={image}>
                <Image></Image>
            </ImageContainer>
        </TopContainer>
        <BottomContainer>
            <BrandName>{make}</BrandName>
            <ModelName>{model}</ModelName>
            <SpecsContainer>
                <SpecsItem>
                  <SpecsIcon img={seatsIcon}/>
                  <SpecsText>{seats} seats</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={doorsIcon}/>
                  <SpecsText>{doors} doors</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={transmissionIcon}/>
                  <SpecsText>{transmission}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={fuelIcon}/>
                  <SpecsText>{fuel}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={consumptionIcon}/>
                  <SpecsText>{consumption}</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={acIcon}/>
                  <SpecsText>{ac}</SpecsText>
                </SpecsItem>
            </SpecsContainer>
        </BottomContainer>
    </CardWrapper>
  )
}

export default CarCard