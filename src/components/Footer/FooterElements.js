import styled from "styled-components";
import logo from '../../images/logo.svg'


export const Wrapper = styled.div`
    background-color: rgba(0,0,0,0.9);
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContentWrapper = styled.div`
    max-width: 1050px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const LeftCol = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    width: 80px;
    height: 80px;
    
    @media screen and (max-width: 680px){
        width: 40px;
        height: 40px;
    }
`

export const LogoText = styled.p`
    color: white;
    font-weight: 800;
    margin-left: 10px;
    font-size: 48px;

    @media screen and (max-width: 680px){
        font-size: 30px
    }
`

export const RightCol = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterText = styled.p`
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 0 40px;
    cursor: default;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 680px){
        font-size: 12spx;
    }
` 

