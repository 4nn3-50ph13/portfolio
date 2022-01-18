import styled from 'styled-components';
import img1 from '../../images/yeux.jpg';
import img2 from '../../images/evolution.png';
import img3 from '../../images/ehhhh.png';

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 200px;
    color: #d3d3db;
`

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

export const Heading1 = styled.h1`
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Staatliches', cursive;
    text-align: left;
    width: 100%;
    font-size: 30vh;
    font-weight: 400;
    letter-spacing: 8px;
    color: black;
    
    top: -50px; 
    Left: 20px; 
    height: 30vh;
`

export const Heading2 = styled.h1`
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Staatliches', cursive;
    text-align: center;
    width: 100%;
    font-size: 25vh;
    font-weight: 400;
    letter-spacing: 8px;
    color: black;
    margin-top: 100vh;

    top: 90px; 
    Left: 20px; 
    height: 25vh;
    z-index: 10;
`

export const Subtitle = styled.p`
    text-align: center;
    width: 100%;
    font-size: 24px;
    padding: 12px;
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
    background-image: url(${img1});
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

export const BioContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 300vh;
    font-size: 24px;
    z-index: 300;
`

export const BioText = styled.p`
    width: 1111px;
    font-size: 16px;
    padding: 42px;
    margin-bottom: 60px;
`

export const EvolContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 700px;
    font-size: 24px;
    font-weight: 600;
    background-color: #d3d3db;
    background-image: url(${img3});
    background-repeat: no-repeat;
    color: #19181C;
    padding-top: 60px;
    z-index:10;
`

export const EvolDrawing = styled.div`
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 97% auto;
    width: 1111px;
    height: 580px;
    font-size: 16px;
    margin-bottom: 40px;
    padding-bottom: 0;
    justify-content: space-between;
`

export const EvolText = styled.div`
    width: 1111px;
    font-size: 16px;
    padding: 42px;
    margin-bottom: 60px;
`