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

export const FormWrapper = styled.form`
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

export const FormInput = styled.input.attrs(props => ({placeholder: props.placeholder, type: props.type ? props.type : 'text'}))`
    height: 37px;
    max-width: 100%;
    min-width: 100%;
    margin: 10px;
    border-radius: 5px;

    &::placeholder{

    }
`

export const FormButton = styled.button`
    cursor: pointer;
    width: 100%;
    margin-top: 7px;
    padding: 7px 15px;
    font-weight: 600;
`

export const FormTitle = styled.h1`
    
`

export const RegisterLink = styled.p`
    color: gray;
    text-decoration: underline;
    cursor: pointer;
`