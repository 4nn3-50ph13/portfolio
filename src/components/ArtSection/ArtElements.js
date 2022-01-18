import styled from 'styled-components';
import bg1 from '../../images/tv2.png';
import pg from '../../images/pg.png';
import face from '../../images/face.png';
import lotr from '../../images/LotR.png';
import persephone from '../../images/persephone.png';
import threeGraces from '../../images/3graces.png';
import circa from '../../images/circa.png';
import styx from '../../images/styx.png';
import portrait from '../../images/portrait.png';

export const ArtContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding-top: 100px;
`

export const ArtsContainer = styled.div`
    position: absolute;
    background-image: url(${bg1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 30;
`

export const ArtImgOne = styled.div`
    display: none;
    position: absolute;
    background-image: url(${face});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgTwo = styled.div`
    display: none;
    position: absolute;
    background-image: url(${portrait});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgThree = styled.div`
    display: none;
    position: absolute;
    background-image: url(${pg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgFour = styled.div`
    display: none;
    position: absolute;
    background-image: url(${persephone});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgFive = styled.div`
    display: none;
    position: absolute;
    background-image: url(${lotr});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgSix = styled.div`
    display: none;
    position: absolute;
    background-image: url(${circa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgSeven = styled.div`
    display: none;
    position: absolute;
    background-image: url(${threeGraces});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const ArtImgEight = styled.div`
    display: none;
    position: absolute;
    background-image: url(${styx});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 80%;
    width: 80%;
    margin: auto;
    z-index: 20;
`

export const Heading = styled.h1`
    text-align: center;
    width: 100%;
    font-size: 42px;
    font-weight: 600;
    color: #d3d3db;
`

export const Subtitle = styled.p`
    text-align: center;
    color: #d3d3db;
    width: 100%;
    font-size: 24px;
`