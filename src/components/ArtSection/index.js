import React, { useRef, useState } from 'react';
import { ArtContainer, Heading, Subtitle, ArtsContainer, ArtImg, Description, SideBar } from './ArtElements';
import { useTranslation } from 'react-i18next';
import face from '../../images/art/face.png';
import lotr from '../../images/art/LotR.png';
import pg from '../../images/art/pg.png';
import persephone from '../../images/art/persephone.png';
import threeGraces from '../../images/art/3graces.png';
import circa from '../../images/art/circa.png';
import styx from '../../images/art/styx.png';
import portrait from '../../images/art/portrait.png';

const ArtSection = () => {
    const { t } = useTranslation();
    const [showIndex, setShowIndex] = React.useState(1);
    const timerRef = useRef(null);
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    
    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY - window.pageYOffset)
    })

    const toggleIndex = (index) => {
        if(showIndex == 2){
            setShowIndex(index);
            timerRef.current = setTimeout(() => setShowIndex(index+1), 1500);
        }
        if(showIndex < 8){
            setShowIndex(index);
        }
        else {
            setShowIndex(1);
        }
    };


  return (
      <ArtContainer>
          <SideBar>Section: Art - Instructions: Click & hover</SideBar>
          <ArtsContainer onClick={() => toggleIndex(showIndex+1)} ></ArtsContainer>
          <ArtImg style={{backgroundImage: `url(${face})`}} className={showIndex === 1 ? "active-content" : ""}></ArtImg>            
          <ArtImg style={{backgroundImage: `url(${lotr})`}}  className={showIndex === 2 ? "active-content" : ""}></ArtImg>
          <ArtImg style={{backgroundImage: `url(${pg})`}}  className={showIndex === 3 ? "active-content" : ""}></ArtImg>
          <ArtImg style={{backgroundImage: `url(${persephone})`}}  className={showIndex === 4 ? "active-content" : ""}></ArtImg>
          <ArtImg style={{backgroundImage: `url(${threeGraces})`}}  className={showIndex === 5 ? "active-content" : ""}></ArtImg>
          <ArtImg style={{backgroundImage: `url(${circa})`}}  className={showIndex === 6 ? "active-content" : ""}></ArtImg>
          <ArtImg style={{backgroundImage: `url(${styx})`}}  className={showIndex === 7 ? "active-content" : ""}></ArtImg>
          <ArtImg style={{backgroundImage: `url(${portrait})`}}  className={showIndex === 8 ? "active-content" : ""}></ArtImg>
          <Description style={{ left: cursorX + 'px', top: cursorY + 'px' }}></Description>
      </ArtContainer>
  )
}

export default ArtSection