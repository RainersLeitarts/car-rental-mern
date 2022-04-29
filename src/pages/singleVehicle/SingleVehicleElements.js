import styled from "styled-components";

export const VehiclePageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #dfdfdf;

    display: flex;
    justify-content: center;
    transition: all 0.5s;
`

export const ContentWrapper = styled.div`
    max-width: 1200px;
    margin-top: 110px;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 100%;
    
    transition: all 0.5s;
    display: flex;

    @media screen and (max-width: 600px){
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
    }
`

export const LeftCol = styled.div`
    background-color: aliceblue;
    //height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px){
        width: 100%
    }
`

export const RightCol = styled.div`
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    padding: 20px;

    @media screen and (max-width: 800px){
        width: 100%
    }
`

export const LeftDescriptionWrapper = styled.div`
    background-color: cornflowerblue;
    height: 100%;
    padding: 1.5rem;
`

export const Make = styled.h1`
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1050px){
        font-size: 24px;
    }
`

export const Model = styled.h2`
    padding: 0;
    margin: 0;
`

export const Year = styled.h3`
    padding: 0;
    margin: 0;
`

export const Title = styled.div`
    padding: 0;
    margin: 0 20px;

    @media screen and (max-width: 1050px){
        margin: 0;
    }
`
export const Specifications = styled.div`
    width: 100%;
    height: 200px;
    //background-color: beige;
    display: flex;
    justify-content: center;
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
    font-size: 18px;

    @media screen and (max-width: 970px){
        font-size: 16px;
    }
`

export const SpecsContainer = styled.div`
    margin-top: 2rem;
    width: 90%;
    height: 45%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.3rem 1.3rem 1.3rem;
    grid-gap: 2rem .8rem;

    @media screen and (max-width: 1050px){
        width: 100%;
    }
`

export const SpecsItem = styled.div`
    display: flex;
    align-items: center;
`
