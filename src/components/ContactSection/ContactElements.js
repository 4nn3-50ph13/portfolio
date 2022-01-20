import styled from 'styled-components';
import horlogeFace from '../../images/cercle.png';

export const ContactContainer = styled.div`
    position: relative;
    background-color: white;
    margin-top: -90px;

    height: 200vh;
    width: 100vw;
`

export const Heading = styled.h1`
    width: 65%;
    text-align: center;
    font-size: 32px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #bfbfc7;

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const Clock = styled.div`
    position: relative;
    background-image: url(${horlogeFace});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100vh auto;
    background-color: white;

    height: 100vh;
    width: 100vw;

    top: 0;
    left: 0;

`

export const AiguilleHeures = styled.div`
    position: absolute;
    width: 1vh;
    height: 25vh;
    background: black;
    top: 25vh;
    left: 50vw;
    transform-origin: bottom;
`

export const AiguilleMinutes = styled.div`
    position: absolute;
    width: 0.5vh;
    height: 38vh;
    background: black;
    top: 12vh;
    left: 50vw;
    transform-origin: bottom;
`

export const AiguilleSecondes = styled.div`
    position: absolute;
    width: 1vh;
    height: 14vh;
    background: black;
    top: 56vh;
    left: 49.6vw;
    transform-origin: bottom;
`

export const Quote = styled.div`
    position: absolute;
    width: 25vw;
    height: 14vh;
    font-size: 3vh;
    font-style: italic;
    font-family: 'Cormorant Garamond', serif;
    top: 20vh;
    right: 74vw;
`
