import styled from 'styled-components'

export const DisplayCarsWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #dfdfdf;
    padding: 1rem 0;
    flex-direction: column;
`

export const TopButtons = styled.div`

`

export const CarsWrapper = styled.div`
    display: grid;
    padding: 0 minmax(0.5rem, 7rem);
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(4, 250px);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    grid-column-gap: minmax(1.7rem, auto);
    grid-auto-rows: 25rem;
    grid-auto-flow: row; //add minmax

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 250px);
        padding: 0 3rem;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 250px);
        padding: 0 3rem;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 250px);
        padding: 0 1rem;
    }
`

export const TopCarsTitle = styled.h1`
    margin: 50px 0 30px 0;
    padding: 0;
    font-size: 42px;
    text-decoration: underline;
    color: #0077FF;
    //width: 100fr;
    text-align: center;
    cursor: default;

    @media screen and (max-width: 700px) {
        font-size: 34px;
    }
`