import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    background-color: wheat;
    border: 2px solid #0077FF;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    margin-bottom: 2px;
`

export const Image = styled.div`
    width: 160px;
    height: 126px;
    margin-right: 20px;
    background-color: red;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    align-self: center;
    border-radius: 5px;
`

export const DataWrapper = styled.div`

    display: flex;
    flex-direction: column;
`

export const Heading = styled.h1`
    font-size: 22px;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    line-height: 1;
`

export const DateWrapper = styled.div`
    display: flex;
    width: 50%;
`

export const DateCol = styled.div`
    margin-top: 7px;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-right: 10px;
`

export const DateTitle = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 700;
`

export const DateValue = styled.p`
    margin: 0;
`

export const PaymentStatus = styled.p`
    margin: 0;
    margin-top: auto;
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 700;
`