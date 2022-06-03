import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    //background-color: antiquewhite;
`

export const Row1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media screen and (max-width: 710px){
        flex-direction: column;
        margin-bottom: 0px;
    }
`

export const Row2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const InfoTextfield = styled.input`
    height: 36px;
    border: 2px solid #0077FF;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 500;
    width: 100%;
`

export const InputLabel = styled.label`
    width: 20px;
    width: 100%;
    margin-right: 10px;

    @media screen and (max-width: 710px){
        margin-right: 0px;
    }
`

export const Role = styled.p`
    
`