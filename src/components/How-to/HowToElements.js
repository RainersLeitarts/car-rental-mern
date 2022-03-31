import styled from 'styled-components'
import background from '../../images/how-to-bckg.jpg'

export const HowToWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const HowToContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    
`

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 80px;
    height: 100%;
    //padding-bottom: 40px;

    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
    overflow: hidden;

    //justify-content: space-between;
    align-content: space-between;
`

export const Column2 = styled.div`
    
    width: 30%;
    height: 100%;

`

export const Steps = styled.div`
    width: 100%;
    //abackground-color: rgba(0,0,0,0.5);
    height: 30%;
    display: flex;
    align-items: center;
    border-radius: 3px;
    transition: all 0.5s;
    padding-left: 9%;
    

    transition: all 0.5s;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        background-color: rgba(0,0,0,0.4.5);
        transform: perspective(20px) skewX(-3deg);
    }

    &:hover span{
        transition: all 0.5s;
        color: #0077FF
    }
`

export const StepsNumber = styled.h1`
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    vertical-align: middle; 
`

export const StepsNumberText = styled.span`
    color: #fff;
    font-size: 70px;
    transition: all 0.5s;
`

export const StepsText = styled.p`
    transition: all 0.5s;
    padding-left: 2%;
    color: #fff;
    font-size: 20px;
`