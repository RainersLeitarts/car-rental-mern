import React from 'react'
import {HowToWrapper, HowToContent, Column1, Column2, Steps, StepsNumber, StepsNumberText, StepsText} from './HowToElements'

const HowTo = () => {
  return (
    <HowToWrapper>
      <HowToContent>
        <Column1>
          <Steps>
            <StepsNumber>
              <StepsNumberText>
                1
              </StepsNumberText>
            </StepsNumber>
            <StepsText>
              Pick a vehicle that suits you the best
            </StepsText>
          </Steps>
          <Steps>
            <StepsNumber>
              <StepsNumberText>
                2
              </StepsNumberText>
            </StepsNumber>
            <StepsText>
                Contact us and we will form the reservation
            </StepsText>
          </Steps>
          <Steps>
            <StepsNumber>
              <StepsNumberText>
                3
              </StepsNumberText>
            </StepsNumber>
            <StepsText>
              Pick up your vehicle of choice and enjoy the ride!
            </StepsText>
          </Steps>
        </Column1>
        <Column2></Column2>
      </HowToContent>
    </HowToWrapper>
  )
}

export default HowTo