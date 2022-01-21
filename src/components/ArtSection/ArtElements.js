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
    font-size: 3.8vh;
    line-height: 5vh;
    letter-spacing: 0.65vh;
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
    position: relative;
    overflow: hidden;
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    margin-top: -90px;
    width: 100vw;
    height: 100vh;
    transition: 1s ease-in-out;

`

export const ArtImg = styled.div`
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    transform: scale(0.6);
    opacity: 0.8;
    z-index: 300;
    transition: 1s ease-in-out;
    
    &:hover {
        opacity: 1;
        transition: 1s ease-in-out;
        transform: scale(0.7);
    }
`

export const Description = styled.div`
    position: fixed;
    opacity: 0;
    background-color: white;
    color: black;
    border: none;
    z-index: 999;
    transition: 0.3s ease-in-out;
    
    &.hovered {
        opacity: 100%;
        transition: 0.3s ease-in-out;
    }
`