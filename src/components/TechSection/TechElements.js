import styled from 'styled-components';

export const SideBar = styled.div`
    transform-origin: 0 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    
    position: fixed;
    background: white;
    display: inline;
    font-size: 4vh;
    line-height: 5vh;
    letter-spacing: 0.10vh;
    height: 5vh;
    width: 100vh;
    border-top-style: solid;
    border-top-width: 2px;
    left: ${window.innerWidth - window.innerHeight*0.05}px;
    color: black;
    z-index: 900;
`

export const TechContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    height: 400vh;
    width: 100vw;
    top: -90px;
`

export const Subtitle = styled.p`
    text-align: left;
    width: 100%;
    font-size: 24px;
    padding-bottom: 12px;
    z-index: 800;
`

export const ProjectContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    
    transition: 0.5s ease-in-out;
`

export const ImgContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 60% auto;
    background-color: black;
    font-family: 'Cormorant', serif;
    text-align: center;
    font-size: 24px;
    color: black;
    border-radius: 50%;

    transition: 0.5s ease-in-out !important;
`

export const ProjectText = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Cormorant', serif;
    text-align: center;
    font-size: 7vh;
    border-radius: 50%;
    color: white;
    width: 100vh;
    height: 100vh;
    margin-top: 4vh;
    z-index: 800;

    transition: 0.5s ease-in-out !important;
`

export const Number = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    position: fixed;
    background-color: white;
    font-family: 'Cormorant', serif;
    font-size: 14vh;
    line-height: 14vh;
    color: black;
    z-index: 800;
    width: 14vh;
    height: 13vh;

    transition: 0.5s ease-in-out !important;
`