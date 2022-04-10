import React from 'react'
import { VehiclePageWrapper, ContentWrapper, LeftCol, RightCol, LeftDescriptionWrapper, Make, Model, Year, Title } from './SingleVehicleElements'
import { useLocation, useParams } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider';

const SingleVehiclePage = () => {
  const location = useLocation();
  console.log(location.state.props.image)

  const images = [
    { url: location.state.props.image }
  ];

  return (
    <VehiclePageWrapper>
      <ContentWrapper>
        <LeftCol>
          <ImageSlider>

          </ImageSlider>

          <LeftDescriptionWrapper>
            <Title>
              <Make>Audi A6 2006</Make>
              {/* <Model>A6</Model>
            <Year>2006</Year> */}
            </Title>
          </LeftDescriptionWrapper>
        </LeftCol>
        <RightCol>

        </RightCol>
      </ContentWrapper>
    </VehiclePageWrapper>
  )
}

export default SingleVehiclePage