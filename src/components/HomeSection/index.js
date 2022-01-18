import React from 'react';
import { HomeContainer,TextContainer, BackgroundImage, Title, Name, Job1, Job2 } from './HomeElements';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
    const { t } = useTranslation();
  const bg = document.querySelectorAll('.backgroundImage');
  const halfX = window.innerWidth / 2;
  const halfY = window.innerHeight / 2;
    
  bg.forEach((el, i) => {
      gsap.to(el, {
      z: 1 * (i + 8) });
    
  });
    
  document.addEventListener('mousemove', e => {
  bg.forEach((el, i) => {
      gsap.to(el, {
      x: (e.clientX - halfX) * (i - 1) * 0.05,
      y: (e.clientY - halfY) * (i - 1) * 0.05 });
  });
  });

    
    return (
        <HomeContainer>
            <BackgroundImage className="backgroundImage"></BackgroundImage>
            <TextContainer></TextContainer>
            <Name > anne-sophie cusson </Name>
            <Job1 > {t('subtitle1')} </Job1>
            <Job2 > {t('subtitle2')} </Job2>
        </HomeContainer>
    )
}

export default HomeSection
