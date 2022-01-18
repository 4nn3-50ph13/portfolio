import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const LangContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: white;
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

`

export const LangLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: black;
    font-family: 'Staatliches', cursive;
    width: fit-content;
    margin: auto;
    padding: 30px;
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`