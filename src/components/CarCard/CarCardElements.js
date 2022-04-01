import styled from 'styled-components'
import seats from '../../images/CarCardIcons/seats.svg'

export const CardWrapper = styled.div`
    //border: 1px solid black;
    border-radius: 5px;
    background-color: #bfbfbf;
    //padding: 20px;
    display: grid;
    grid-template-rows: 1.5fr 2fr;
    row-gap: 0.5rem;
    transition: all 0.5s;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: scale(1.03);
    }
`

export const TopContainer = styled.div`
    margin: 0;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: royalblue;
    border-radius: 5px;
    background-image: url('https://autoplatform.lv/wp-content/uploads/thememakers/cardealer/2183/car/f5d99fd8e76e401711ea2adff2626377/_VzmpTiUEGnd.jpg');
    background-position: center;
    background-size: cover;
`

export const BottomContainer = styled.div`
    //background-color: purple;
    padding: 0 15px;
`

export const Image = styled.img`

`

export const BrandName = styled.h1`
    margin: 0;
    padding: 0;
`

export const ModelName = styled.h3`
    margin: 0;
    padding: 0;
`

export const SpecsContainer = styled.div`
    margin-top: .5rem;
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.3rem 1.3rem 1.3rem;
    grid-gap: .9rem .5rem;
`

export const SpecsItem = styled.div`
    //background-color: orange;
    display: flex;
    align-items: center;
`

export const SpecsIcon = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${({img}) => img});
    background-repeat: no-repeat;
    background-size: auto;
`

export const SpecsText = styled.p`
    font-weight: 600;
    font-size: 14px;
`

