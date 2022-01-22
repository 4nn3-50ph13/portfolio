import styled from 'styled-components';
import yeux from '../../images/about/yeux.jpg';
import evol from '../../images/about/evolution.png';

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: black;
    background-color: floralwhite;
`

export const SideBar = styled.div`
    transform-origin: 0 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    
    position: fixed;
    background: floralwhite;
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

export const ImgContainer = styled.div`
    position: absolute;
    left: auto;
    top: 0%;
    right: 0%;
    bottom: auto;
    width: 100vw;
    height: 150vh;
    font-size: 24px;
`

export const Img = styled.div`
    background-image: url(${yeux});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 80%;
    position: fixed;
    justify-content: flex-end;
    display: flex;
    top: 35vh;
    height: 30vh;
    width: 100%;
    z-index: 300;
`

export const Legend = styled.div`
    width: 100%;
    height: auto;
    font-size: 12px;
    font-style: italic;
    text-align: center;
    color: black;
    margin-top: auto;
`

export const BioContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    width: 100%;
    height: 300vh;
    font-size: 24px;
    color: transparent;
    margin-top: 120vh;
    z-index: 300;
    transition: 0.8s ease-in-out;
`

export const Heading1 = styled.h1`
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Cormorant', serif;
    text-align: left;
    font-size: 30vh;
    font-weight: 400;
    letter-spacing: 8px;
    color: black;
    transition: 0.8s ease-in-out !important;
    
    top: -40px; 
    Left: 20px;
    height: 30vh;
    width: 100%;
`

export const Heading2 = styled.h1`
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Cormorant', serif;
    text-align: center;
    font-size: 20vh;
    font-weight: 200;
    letter-spacing: 8px;
    color: black;
    margin-top: 100vh;
    transition: 0.8s ease-in-out !important;

    top: 19vh;
    Left: 20px; 
    width: 100%;
`

export const TxtContainer = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 0px; 
`

export const Subtitle = styled.div`
    position: absolute;
    margin-top: 44vh;
    text-align: center;
    width: 100vw;
    font-size: 7vh;
    transition: 0.8s ease-in-out;
`

export const BioTxtContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 50vw;
    transition: 0.8s ease-in-out;
`

export const BioText = styled.div`
    font-size: 16px;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 1vw;
`

export const EvolContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 300vh;
    margin-top: -100vh;
    font-size: 24px;
    font-weight: 600;
    background-color: floralwhite;
    color: black;
    padding-top: 60px;
    z-index: 330;
`

export const EvolDrawing = styled.div`
    position: sticky;
    background-image: url(${evol});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% auto;
    height: 580px;
    width: 100%;
    top: -390px; 
`
export const EvolTitle = styled.div`
    transform-origin: top right;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);

    position: absolute;
    font-size: 7vh;
    text-align: right;
    width: 100vh;
    top: 0;
    right: 100vw;
    font-size: 10vh !important;
`

export const EvolText = styled.div`
    position: sticky;
    width: 1111px;
    font-size: 16px;
    padding: 42px;
    margin-bottom: 60px;
    top: 170px; 
`