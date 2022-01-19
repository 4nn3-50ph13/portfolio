import styled from 'styled-components';
import bg1 from '../../images/art/tv2.png';

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
    font-size: 3.8vh;
    line-height: 5vh;
    letter-spacing: 0.10vh;
    height: 5vh;
    width: 100vh;
    border-top-style: solid;
    border-top-width: 2px;
    left: ${window.innerWidth - window.innerHeight*0.05}px;
    top: 100vh;
    color: black;
    z-index: 900;
`

export const ArtContainer = styled.div`
    position: absolute;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    top: 0;
`

export const ArtsContainer = styled.div`
    position: absolute;
    background-image: url(${bg1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 95%;
    height: 100%;
    width: 80%;
    margin: auto;
    z-index: 30;
`

export const ArtImg = styled.div`
    display: none;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 95%;
    height: 100%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const Description = styled.div`
    position: fixed;
    background-color: white;
    width: 100px;
    height: 100px;
    border: none;
    z-index: 999;
`