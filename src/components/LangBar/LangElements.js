import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const LangContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #e3ddd8;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: #e3ddd8;
    mix-blend-mode: exclusion; 
`

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
`

export const LangWrapper = styled.div`
  letter-spacing: 8px;
  transition: 1s;
`

export const LangLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100vw;
    color: black;
    font-family: 'Cormorant', serif;
    font-size: 5vw;
    text-decoration: none;
    transition: 0.5s ease-in-out;
    list-style: none;

    &:hover {
        font-size: 5vw;
        letter-spacing: 12px;
        color: #e3ddd8;
        background-color: black;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`