import styled from 'styled-components'

export const AddVehicleWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: minmax(10rem, 35rem);
    background-position: center center;
    //background-attachment: fixed;
    background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${({backgroundImage}) => backgroundImage});
`

export const AddVehicleForm = styled.form`
    display: grid;
    grid-row-gap: 1rem;
    margin: 3rem;
    grid-template-columns: minmax(10rem, 35rem);
`

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemLabel = styled.label`
    font-weight: 600;
    font-size: 1.05rem;
    color: #fff;
`

export const ItemInput = styled.input.attrs(({type}) => ({type: type}))`
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
    border: 1px solid #0077FF;
    height: 1.8rem;
    border-radius: 5px;
    color: #fff;
    background-color: transparent;
    font-weight: 500;
    font-size: 1.05rem;
`

export const SmallItemsWraper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.3rem;

    @media screen and (max-width: 430px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const SubmitButton = styled.button`
    height: 2rem;
    border: 3px solid #0077FF;
    font-weight: 550;
    font-size: 1.1rem;
    color: #fff;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background-color: #0077FF;
    }
`