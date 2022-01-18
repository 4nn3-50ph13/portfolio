import styled from 'styled-components';
import img1 from '../../images/face.jpg';
import bg1 from '../../images/ehhhhh.png';
import bg2 from '../../images/ehhhhhh.png';
import bg3 from '../../images/ehhhhhhh.png';

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 200px;
    color: #d3d3db;
`

export const Heading = styled.h1`
    top:200px;
    left:0;
    text-align: center;
    width: 100%;
    font-size: 42px;
    font-weight: 400;
`

export const Subtitle = styled.p`
    text-align: left;
    width: 100%;
    font-size: 24px;
    padding-bottom: 12px;
`

export const Legend = styled.div`
    margin-top: auto;
    width: 100%;
    height: auto;
    font-size: 12px;
    font-style: italic;
    text-align: center;
`

export const ProjectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 700px;
    font-size: 24px;
    padding-top: 45vh;
    margin-top: 45vh;
    margin-bottom: 45vh;
`

export const ImgContainer = styled.div`
    position: absolute;
    left: auto;
    top: 0%;
    right: 0%;
    bottom: auto;
    width: 75vw;
    height: 150vh;
    font-size: 24px;
`

export const Img = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 90%;
    top: 20vh; 
    height: 70vh;
    width: 100%;
`

export const ProjectText = styled.div`
    z-index: 10;
    position: relative;
    height: 240px;
    width: 60vw;
    font-size: 16px;
    padding: 24px;
`