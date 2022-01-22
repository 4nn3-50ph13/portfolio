import styled from 'styled-components';
import horlogeFace from '../../images/cercle.png';
import minutes from '../../images/minute.png';
import heures from '../../images/heure.png';

export const ContactContainer = styled.div`
    position: relative;
    background-color: floralwhite;
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
    background-color: floralwhite;

    height: 100vh;
    width: 100vw;

    top: 0;
    left: 0;

`

export const AiguilleHeures = styled.div`
    background-image: url(${heures});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    position: absolute;
    width: 3vw;
    height: 25vh;
    top: 25vh;
    left: 48vw;
    transform-origin: bottom;
`

export const AiguilleMinutes = styled.div`
    background-image: url(${minutes});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;

    position: absolute;
    width: 2vw;
    height: 38vh;
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
