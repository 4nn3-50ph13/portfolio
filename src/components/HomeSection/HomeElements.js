import styled from 'styled-components';
import topo from '../../images/topo.PNG';

export const HomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    overflow: hidden;
`

export const TextContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 25vh;
    height: 100%;
    width: 100%;
    align-items: left;
    text-align: left;
    overflow: hidden;
`

export const Title = styled.p`
    margin: auto;
    width: 100%;
    letter-spacing: 64px;
    color: black;
    border: none;
    font-size: 12rem;
    font-family: 'UnifrakturMaguntia', cursive;
`

export const Name = styled.p`
    display: flex;
    flex-direction: column;
    algn-items: center;
    color: black;
    text-align: center;
    font-size: 13.53vw;
    height: 13.53vw;
    font-family: 'Staatliches', cursive;
    z-index: 3;
    @media screen and (min-width: 1800px) {
        font-size: 243.425px;
        height: 243.4px;
    }
`

export const Job1 = styled.p`
    display: flex;
    flex-direction: column;
    algn-items: center;
    color: black;
    text-align: center;
    font-size: 8.75vw;
    height: 10vw;
    font-family: 'Staatliches', cursive;
    z-index: 3;
    margin-top: -2.5vw;

    @media screen and (min-width: 1800px) {
        font-size: 157.4px;
        height: 179.9px;
        margin-top: -44.9667px;
    }
`

export const Job2 = styled.p`
    display: flex;
    flex-direction: column;
    algn-items: flex-start;
    color: black;
    text-align: center;
    font-size: 43vw;
    font-family: 'Staatliches', cursive;
    margin-top: -12.3vw;
    z-index: 3;

    @media screen and (min-width: 1800px) {
        font-size: 774px;
        height: 575.667px;
        margin-top: -221.267px;
    }
`

export const BackgroundImage = styled.div`
    position: absolute;
    opacity: 30%;
    top: -15vh;
    left: -15vw;
    background-image: url(${topo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    width: 130vw;
    height: 130vh;
    z-index: 2;
`


