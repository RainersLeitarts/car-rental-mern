import styled from "styled-components"

export const RegisterWrapper = styled.div`
    padding-top: 80px;

    width: 100vw;
    height: 100vh;

    background-color: #333;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #bfbfbf;
    padding: 20px;
    width: 500px;
    height: 60%;
    border-radius: 5px;
`

export const FormInput = styled.input.attrs(props => ({placeholder: props.placeholder}))`
    height: 37px;
    max-width: 100%;
    min-width: 100%;
    margin: 10px;
    border-radius: 5px;

    &::placeholder{

    }
`

export const FormButton = styled.button`

`