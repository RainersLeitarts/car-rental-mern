import styled from 'styled-components'
import background from '../../images/home-bckg.jpg'
import { Link as LinkS} from 'react-scroll/modules'

export const HomeWrapper = styled.div`
    
`

export const Hero = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.h1`
    font-size: 70px;
    text-align: center;
    color: #fff;
    margin: 0 20px;
    padding: 0;
    margin-top: 38vh;
    cursor: default;

    @media screen and (max-width: 550px){
        margin-top: 35vh;
        line-height: 4rem;
        font-size: 12vw;
    }
`

export const Paragraph = styled.p`
    color: #fff;
    cursor: default;
    text-align: center;
    margin: 15px 20px;
    line-height: 1.5rem;
`   

export const Scroll = styled(LinkS)`
    position: relative;
    margin-top: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover p{
        transition: all 0.5s;
        display: block;
        transform: translateY(0px);
        opacity: 100%;
    }

    &:hover img {
        transform: scale(1.2);
    }
`

export const ScrollButton = styled.img`
    /* position: absolute; */
    width: 30px;
    transition: all 0.5s;
`

export const ScrollText = styled.p`
    transition: all 0.5s;
    transform: translateY(30px);
    color: #fff;
    opacity: 0;
`

export const Content = styled.div`

`

export const Text = styled.p`

`