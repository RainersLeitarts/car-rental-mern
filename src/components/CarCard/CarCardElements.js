import styled from 'styled-components'
import seats from '../../images/CarCardIcons/seats.svg'

export const CardWrapper = styled.div`
    border-radius: 5px;
    background-color: #bfbfbf;
    display: grid;
    grid-template-rows: 1.5fr 2fr;
    row-gap: 0.5rem;
    transition: all 0.5s;

    position: relative;

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
    background-image: url(${({image}) => image});
    background-position: center;
    background-size: cover;
`

export const BottomContainer = styled.div`
    padding: 0 15px;
`

export const Image = styled.img`

`

export const BrandName = styled.h1`
    margin: 0;
    padding: 0;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const ModelName = styled.h3`
    margin: 0;
    padding: 0;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`

export const SpecsContainer = styled.div`
    margin-top: .5rem;
    width: 100%;
    height: 45%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.3rem 1.3rem 1.3rem;
    grid-gap: .9rem .5rem;
`

export const SpecsItem = styled.div`
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

export const PriceButton = styled.button`
    width: 95%;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    height: 2.3rem;
    border: none;
    border-radius: 5px;
    background-color: #0077FF;
    cursor: pointer;
    color: #fff;
    font-size: .9rem;
    font-weight: 500;
    transition: all 0.3s;

    &:hover{
        opacity: 80%;
    }
`

