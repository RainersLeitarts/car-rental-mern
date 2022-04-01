import React from 'react'
import { CardWrapper, TopContainer, ImageContainer, Image, BottomContainer,
  BrandName, ModelName, SpecsContainer, SpecsItem, SpecsIcon, SpecsText } from './CarCardElements'
import seats from '../../images/CarCardIcons/seats.svg'
import doors from '../../images/CarCardIcons/doors.svg'
import transmission from '../../images/CarCardIcons/transmission.svg'
import fuel from '../../images/CarCardIcons/fuel.svg'
import consumption from '../../images/CarCardIcons/consumption.svg'
import ac from '../../images/CarCardIcons/ac.svg'

const CarCard = () => {
  return (
    <CardWrapper>
        <TopContainer>
            <ImageContainer>
                <Image></Image>
            </ImageContainer>
        </TopContainer>
        <BottomContainer>
            <BrandName>Volkswagen</BrandName>
            <ModelName>Jetta</ModelName>
            <SpecsContainer>
                <SpecsItem>
                  <SpecsIcon img={seats}/>
                  <SpecsText>4 seats</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={doors}/>
                  <SpecsText>Manual</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={transmission}/>
                  <SpecsText>Manual</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={fuel}/>
                  <SpecsText>Gasoline</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={consumption}/>
                  <SpecsText>6L / 100km</SpecsText>
                </SpecsItem>
                <SpecsItem>
                  <SpecsIcon img={ac}/>
                  <SpecsText>Yes</SpecsText>
                </SpecsItem>
            </SpecsContainer>
        </BottomContainer>
    </CardWrapper>
  )
}

export default CarCard