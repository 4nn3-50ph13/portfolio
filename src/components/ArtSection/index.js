import React, { useState } from 'react';
import { ArtContainer, BackgroundImage, Heading, Subtitle, ArtImg, Description, DescriptionText, SideBar, hovered } from './ArtElements';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import face from '../../images/art/face.jpg';
import lotr from '../../images/art/LotR.jpg';
import persephone from '../../images/art/persephone.jpg';
import threeGraces from '../../images/art/3graces.jpg';
import circa from '../../images/art/circa.jpg';
import styx from '../../images/art/styx.jpg';
import portrait from '../../images/art/portrait.jpg';

const ArtSection = () => {
    const { t } = useTranslation();
    const [showIndex, setShowIndex] = React.useState(0);
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [relativeOffsetY1, setRelativeOffsetY1] = useState(0);
    const [relativeOffsetY2, setRelativeOffsetY2] = useState(window.innerHeight);
    const handleScroll = () => handleOffset(window.pageYOffset);
    
    const handleOffset = (offset) => {
        setRelativeOffsetY1((offset/5) % (window.innerHeight));
        setRelativeOffsetY2((offset/5) % (window.innerHeight)+window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    


  return (
      <ArtContainer>
            <ArtImg onMouseEnter={() => setShowIndex(1)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${face})`, height: '200px', width: '350px', top: '100px', left: '100px'}} ></ArtImg>
            <Description className={showIndex === 1 ? "hovered" : ""} style={{ height: '100px', width: '350px', top: '280px', left: '50px'}} >
                <DescriptionText>{t('faceTitle')}</DescriptionText>
                <DescriptionText>{t('faceDate')}</DescriptionText>
            </Description>

            <ArtImg onMouseEnter={() => setShowIndex(2)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${lotr})`, height: '370px', width: '260px', top: '440px', left: '40px'}} ></ArtImg>
            <Description className={showIndex === 2 ? "hovered" : ""} style={{ height: '350px', width: '100px', top: '470px', left: '270px' }} >
                <DescriptionText>{t('lotrTitle')}</DescriptionText>
                <DescriptionText>{t('lotrDate')}</DescriptionText>
            </Description>

            <ArtImg onMouseEnter={() => setShowIndex(3)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${styx})`, height: '250px', width: '350px', top: '10px', left: '560px'}} ></ArtImg>
            <Description className={showIndex === 3 ? "hovered" : ""} style={{ height: '100px', width: '350px', top: '240px', left: '600px' }} >
                <DescriptionText>{t('styxTitle')}</DescriptionText>
                <DescriptionText>{t('styxDate')}</DescriptionText>
            </Description>

            <ArtImg onMouseEnter={() => setShowIndex(4)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${threeGraces})`, height: '300px', width: '230px', top: '350px', left: '400px'}} ></ArtImg>
            <Description className={showIndex === 4 ? "hovered" : ""} style={{ height: '100px', width: '350px', top: '630px', left: '400px' }} >
                <DescriptionText>{t('gracesTitle')}</DescriptionText>
                <DescriptionText>{t('gracesDate')}</DescriptionText>
            </Description>

            <ArtImg onMouseEnter={() => setShowIndex(5)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${portrait})`, height: '450px', width: '300px', top: '325px', left: '700px'}} ></ArtImg>
            <Description className={showIndex === 5 ? "hovered" : ""} style={{ height: '350px', width: '100px', top: '350px', left: '610px' }} >
                <DescriptionText>{t('portraitTitle')}</DescriptionText>
                <DescriptionText>{t('portraitDate')}</DescriptionText>
            </Description>

            <ArtImg onMouseEnter={() => setShowIndex(6)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${persephone})`, height: '350px', width: '300px', top: '100px', left: '990px'}} ></ArtImg>
            <Description className={showIndex === 6 ? "hovered" : ""} style={{ height: '100px', width: '350px', top: '40px', left: '870px' }} >
                <DescriptionText>{t('persephoneTitle')}</DescriptionText>
                <DescriptionText>{t('persephoneDate')}</DescriptionText>
            </Description>

            <ArtImg onMouseEnter={() => setShowIndex(7)} onMouseLeave={() => setShowIndex(0)} style={{backgroundImage: `url(${circa})`, height: '350px', width: '300px', top: '550px', left: '1050px'}} ></ArtImg>
            <Description className={showIndex === 7 ? "hovered" : ""} style={{ height: '350px', width: '100px', top: '350px', left: '1050px' }} >
                <DescriptionText>{t('circaTitle')}</DescriptionText>
                <DescriptionText>{t('circaDate')}</DescriptionText>
            </Description>

          <SideBar style={{ top: (relativeOffsetY1)+'px'}}>Section: Art - Instructions: hover & scroll</SideBar>
          <SideBar style={{ top: (relativeOffsetY2)+'px'}}>Section: Art - Instructions: hover & scroll</SideBar>
      </ArtContainer>
  )
}

export default ArtSection