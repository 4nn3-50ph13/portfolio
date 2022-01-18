import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    height: 100%;
`

export const TabLink1 = styled.div`
    transform-origin: 0 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);

    background: black;
    font-size: 40px;
    line-height: 40px;
    height: 30px;
    width: 140px;
    left: ${window.innerWidth - 130}px;
    top: -50px;
    color: transparent;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    
    &:hover {
        top: 0;
        color: white;
        height: 35px;
    }
`

export const TabLink2 = styled.div`
    transform-origin: 0 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);

    background: black;
    font-size: 40px;
    line-height: 40px;
    height: 30px;
    width: 300px;
    left: ${window.innerWidth - 90}px;
    top: -50px;
    color: transparent;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    
    &:hover {
        top: 0;
        color: white;
        height: 35px;
    }
`

export const TabLink3 = styled.div`
    transform-origin: 0 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);

    background: black;
    font-size: 40px;
    line-height: 40px;
    height: 30px;
    width: 100px;
    left: ${window.innerWidth - 50}px;
    top: -50px;
    color: transparent;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    
    &:hover {
        top: 0;
        color: white;
        height: 35px;
    }
`

export const TabLink4 = styled.div`
    transform-origin: 0 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);

    background: black;
    font-size: 40px;
    line-height: 40px;
    height: 30px;
    width: 193px;
    left: ${window.innerWidth - 10}px;
    top: -50px;
    color: transparent;
    transition: 0.3s ease-in-out;
    text-transform: uppercase;
    
    &:hover {
        top: 0;
        color: white;
        height: 35px;
    }
`

export const LangBtn = styled.button`
    position: absolute;
    font-family: 'Cormorant', serif;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    background: black;
    color: transparent;
    border-radius: 25px;
    border: none;
    padding: 10px;
    right: 240px;
    top: 30px;
    transition: all 0.5s ease-in-out;
    z-index: 300;

    &:hover {
        color: white;
        transform: scale(2);
        width: 150px;
        border-radius: 5px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`