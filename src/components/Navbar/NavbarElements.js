import styled from 'styled-components'
import { NavLink as L } from 'react-router-dom'

export const NavWrapper = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: rgba(0,0,0,0.5) ;
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

`