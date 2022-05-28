import styled from 'styled-components'

export const MeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    transition: all 0.5s;
    background-color: #999;
`

export const MeContent = styled.div`
    max-width: 800px;
    margin-top: 100px;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 100%;
    background-color: wheat;
    transition: all 0.5s;
    display: flex;

    @media screen and (max-width: 600px){
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
        margin-top: 80px;
    }
`

export const MeNavigation = styled.div`
    background-color: aliceblue;
    padding: 20px 10px 20px 10px;
    height: calc(100vh - 120px);
    border-radius: 5px;
    width: 400px;
`

export const MeNavigationItem = styled.div`
    width: 100%;
    background-color: aliceblue;
    height: 40px;
    margin: 0; 
    display: flex;
    padding-left: 30px;
    align-items: center;
    border: 2px solid #0077FF;
    font-weight: 600;
    border-radius: 5px;
    margin-bottom: 2px;
    background-color: ${props => props.active ? '#0077FF' : 'transparent'};
    cursor: pointer;
    transition: all 0.5s;

    & *{
        color: ${props => props.active ? 'white' : 'black'};
    }
`

export const MeNavigationItemText = styled.p`
    margin: 0;
    transition: all 0.3s;
`

export const MeContentColumn = styled.div`
    display: flex;
    padding: 20px 10px 20px 10px;
    width: 100%;
    height: 100%;
    background-color: aqua;
`