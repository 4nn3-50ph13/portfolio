import React, { useRef, useState } from 'react';
import { ArtContainer, Heading, Subtitle, ArtsContainer, ArtImgOne, ArtImgTwo, ArtImgThree, ArtImgFour, ArtImgFive, ArtImgSix, ArtImgSeven, ArtImgEight } from './ArtElements';
import { useTranslation } from 'react-i18next';

const ArtSection = () => {
  const { t } = useTranslation();
  const [showIndex, setShowIndex] = React.useState(1);
  const timerRef = useRef(null);

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
          <ArtsContainer onClick={() => toggleIndex(showIndex+1)} ></ArtsContainer>
          <ArtImgOne className={showIndex === 1 ? "active-content" : ""}></ArtImgOne>            
          <ArtImgTwo className={showIndex === 2 ? "active-content" : ""}></ArtImgTwo>
          <ArtImgThree className={showIndex === 3 ? "active-content" : ""}></ArtImgThree>
          <ArtImgFour className={showIndex === 4 ? "active-content" : ""}></ArtImgFour>
          <ArtImgFive className={showIndex === 5 ? "active-content" : ""}></ArtImgFive>
          <ArtImgSix className={showIndex === 6 ? "active-content" : ""}></ArtImgSix>
          <ArtImgSeven className={showIndex === 7 ? "active-content" : ""}></ArtImgSeven>
          <ArtImgEight className={showIndex === 8 ? "active-content" : ""}></ArtImgEight>
      </ArtContainer>
  )
}

export default ArtSection