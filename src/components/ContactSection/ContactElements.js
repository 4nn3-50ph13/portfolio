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

export const ContactContent = styled.div`
    z-index: 3; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 100%;
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

export const Subtitle = styled.p`
    font-weight: 200;
    color: #bfbfc7;
    width: 65%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 28px;
`

export const Question = styled.p`
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #bfbfc7;
    margin: 10px;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    transform: skewY(2deg);
`
export const BtnGroup = styled.div`
transform: skewY(-2deg);
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #d65a31;
`
export const BtnQuestion = styled.div`
    position: relative;
    cursor: url(./images/cursor-2-1.png), auto;
    /* border-radius: 20px; */
    transition: 0.3s;
    background-color: #19181C;
    width: 50%;
    height: 100%;
    margin: 0;
    &:hover {
        background-color: #d65a31;
        transition: 0.3s;
        width: 75%;
    }
`

export const BtnTitle = styled.div`
    position: absolute;
    top: 10px;
    font-weight: 200;
    color: #bfbfc7;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
    font-size: 28px;
`

export const BtnIcon = styled.div`
    position: absolute;
    top: 50px;
    width: 100%;
    height: 100%;
    text-align: center;
`


export const Box1 = styled.div`
    z-index: 4;
    transform: skewY(2deg);
    background-color: #19181C;
    width: 100%;
    height: fit-content;
    padding: 20px;
    margin-top: 60px;
    border: 2px dashed #d65a31;
`

export const Box2 = styled.div`
    z-index: 2;
    position: sticky;
    top: 0px;
    transform: skewY(-4deg);
    width: 100%;
    height: fit-content;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    background-color: #19181C;
`

export const Box3 = styled.div`
    margin-top: -3px;
    z-index: 4;
    transform: skewY(2deg);
    background-color: #d65a31;
    width: 100%;
    height: fit-content;
    padding: 20px;
`

export const Box4 = styled.div`
    z-index: 4;
    transform: skewY(2deg);
    background-color: #d65a31;
    width: 200px;
    height: fit-content;
    padding: 20px;
    margin-top: 20px;
    transition: 0.3s;
    &:hover {
        width: 300px;
    }
`

export const ContactH1 = styled.div`
    color: #19181C;
    margin: 10px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 600;
`

export const ContactH3 = styled.div`
    color: #bfbfc7;
    font-size: 26px;
    text-align: center;
    font-weight: 600;
`

export const ContactH4 = styled.div`
    transform: skewY(-4deg);
    color: #bfbfc7;
    margin: 2px;
    font-size: 18px;
    text-align: left;
    font-weight: 600;
`

export const ContactP = styled.div`
transform: skewY(-4deg);
    color: #bfbfc7; 
    margin: 3px;
    text-align: left;
`
export const ResDiv = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    height: fit-content;
    color: #bfbfc7;
    text-transform: uppercase;
    margin-top: 30px;
`

export const ShowResults = styled.button`
    width: 150px;
    transform: skewY(-2deg);
    font-weight: 600;
    padding: 10px;
    text-align: center;
    height: fit-content;
    text-transform: uppercase;
    background-color: #bfbfc7;
    border: none;
    color: #19181C;
    font-size: 24px;
    transition: 0.3s ease-in-out;

    &:hover{
        width: 70%;
        background-color: #d65a31;
    }
`

export const Result = styled.div`
    position: absolute;
    width: 100%;
    height: 400px;
    color: #bfbfc7;
    border: none;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ show }) => (show ? "100%" : "0%")};
    top: ${({ show }) => (show ? "70px" : "-400px")};
`