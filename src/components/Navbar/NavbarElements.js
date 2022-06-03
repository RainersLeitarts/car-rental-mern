import styled from 'styled-components'
import { NavLink as L } from 'react-router-dom'
import { css } from 'styled-components'

export const NavWrapper = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: rgba(0,0,0,0.8) ;
    backdrop-filter: blur(5px);
    z-index: 1000;
`

export const NavBackground = styled.div`
position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.3) ;
    filter: blur(10px);
`

export const NavContents = styled.div`
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    z-index: 1000;
`

export const LogoWrapper = styled.div`
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    align-items: center;
    font-weight: bolder;
    font-size: 30px;
    user-select: none;
`

export const Logo = styled.img`
    margin-right: 10px;
    width: 40px;
`

export const LinksWrapper = styled.ul`
    display: flex;
    margin-right: 20px;
`

export const Link = styled(L)`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 10px 0px 10px 20px;
    text-transform: uppercase;
    transition: all 0.5s;

    &:hover{
        color: #0077FF;
    }

    @media screen and (max-width: 720px){
        display: none;
    }
`

export const HamburgerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    @media screen and (min-width: 720px){
        display: none;
    }
`

export const Hamburger = styled.div`
    width: 30px;
    height: 4px;
    background: #fff;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    transform: translateX(0);

    ${({open}) => open && css`
        transform: translateX(-30px); 
        background: transparent;
    `}


    &::before, &::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius: 3px;
        transition: all 0.5s ease-in-out;
    }

    &::before{
        transform: translateY(-11px);

        ${({open}) => open && css`
            transform: rotate(45deg) translate(21px, -21px); 
        `}
    }

    &::after{
        transform: translateY(11px);

        ${({open}) => open && css`
            transform: rotate(-45deg) translate(21px, 21px); 
        `}
    }
`