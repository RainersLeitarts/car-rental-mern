import styled from "styled-components"

export const SliderContainer = styled.div`
    width: 100%;

    //add custom aspect ratios
    padding-top: 67%;
    background-color: aqua;
    background-image: url(${({images}) => images});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`