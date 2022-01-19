import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    height: 2400px;
    z-index: 1;
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

export const horloge = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    color: #444;
    text-align: center;

    &:after {
        background: #aaa;
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #fff;
    }
`

export const AiguilleHeures = styled.div`
    position: absolute;
    width: 6px;
    height: 60px;
    background: #222;
    top: 30%;
    left: 49%;
    transform-origin: bottom;
`

export const AiguilleMinutes = styled.div`
    position: absolute;
    width: 4px;
    height: 80px;
    background: #444;
    top: 22.5%;
    left: 49%;
    transform-origin: bottom;
`

export const AiguilleSecondes = styled.div`
    position: absolute;
    width: 2px;
    height: 118px;
    background: red;
    top: 10.5%;
    left: 50%;
    transform-origin: bottom;
`
