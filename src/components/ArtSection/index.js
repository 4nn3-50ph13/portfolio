import React, { useState } from 'react';
import { ArtContainer, Heading, Subtitle, ArtImg, Description, DescriptionText, SideBar, hovered } from './ArtElements';
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
import cardigan from '../../images/art/cardigan.jpg';
import marbles from '../../images/art/marbles.jpg';
import forage from '../../images/art/forage2.jpg';
import tricot from '../../images/art/tricot.jpg';
import bat from '../../images/art/bat.jpg';
import queen from '../../images/art/queen.jpg';

const ArtSection = () => {
    const { t } = useTranslation();
    const [showIndex, setShowIndex] = React.useState(0);
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
            <ArtImg 
                onMouseEnter={() => setShowIndex(1)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${face})`, 
                    height: '200px', 
                    width: '350px', 
                    top: '100px', 
                    left: '100px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 1 ? "hovered" : ""} 
                style={{ 
                    height: '200px', 
                    width: '350px', 
                    top: '290px', 
                    left: '50px'}} >
                <DescriptionText className="title">{t('faceTitle')}</DescriptionText><DescriptionText className="date">{t('faceDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(2)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${lotr})`, 
                    height: '370px', 
                    width: '260px', 
                    top: '440px', 
                    left: '20px'}} 
                >
            </ArtImg>
            <Description 
                className={showIndex === 2 ? "hovered" : ""} 
                style={{ 
                    height: '220px', 
                    width: '205px', 
                    top: '495px', 
                    left: '250px' 
                }} >
                <DescriptionText>{t('lotrTitle')}</DescriptionText><DescriptionText>{t('lotrDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(3)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${styx})`, 
                    height: '250px', 
                    width: '350px', 
                    top: '10px', 
                    left: '560px'
                }}>
                </ArtImg>
            <Description 
                className={showIndex === 3 ? "hovered" : ""} 
                style={{ 
                    height: '100px', 
                    width: '370px', 
                    top: '240px', 
                    left: '465px' 
                }}>
                <DescriptionText>{t('styxTitle')}</DescriptionText><DescriptionText>{t('styxDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(4)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${threeGraces})`, 
                    height: '360px', 
                    width: '300px', 
                    top: '290px', 
                    left: '400px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 4 ? "hovered" : ""} 
                style={{ 
                    height: '270px', 
                    width: '180px', 
                    top: '345px', 
                    left: '665px' 
                }} >
                <DescriptionText>{t('gracesTitle')}</DescriptionText><DescriptionText>{t('gracesDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(5)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${portrait})`, 
                    height: '400px', 
                    width: '300px', 
                    top: '650px', 
                    left: '350px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 5 ? "hovered" : ""} 
                style={{ 
                    height: '280px', 
                    width: '300px', 
                    top: '770px', 
                    left: '70px' 
                }} >
                <DescriptionText>{t('portraitTitle')}</DescriptionText>
                <DescriptionText>{t('portraitDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(6)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${persephone})`, 
                    height: '350px', 
                    width: '300px', 
                    top: '950px', 
                    left: '790px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 6 ? "hovered" : ""} 
                style={{ 
                    height: '170px', 
                    width: '350px', 
                    top: '1020px', 
                    left: '470px' 
                }} >
                <DescriptionText>{t('persephoneTitle')}</DescriptionText><DescriptionText>{t('persephoneDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(8)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${marbles})`, 
                    height: '300px', 
                    width: '500px', 
                    top: '250px', 
                    left: '750px'
                }}>
             </ArtImg>
            <Description 
                className={showIndex === 8 ? "hovered" : ""} 
                style={{ 
                    height: '150px', 
                    width: '280px', 
                    top: '105px', 
                    left: '880px' 
                }} >
                <DescriptionText>{t('marblesTitle')}</DescriptionText><DescriptionText>{t('marblesDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(9)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${cardigan})`, 
                    height: '350px', 
                    width: '300px', 
                    top: '1020px', 
                    left: '100px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 9 ? "hovered" : ""} 
                style={{ 
                    height: '150px', 
                    width: '350px', 
                    top: '1330px', 
                    left: '88px' 
                }} >
                <DescriptionText>{t('cardiganTitle')}</DescriptionText><DescriptionText>{t('cardiganDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(10)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${bat})`, 
                    height: '300px', 
                    width: '400px', 
                    top: '580px', 
                    left: '700px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 10 ? "hovered" : ""} 
                style={{ 
                    height: '140px', 
                    width: '320px', 
                    top: '860px', 
                    left: '760px' 
                }} >
                <DescriptionText>{t('batTitle')}</DescriptionText><DescriptionText>{t('batDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(11)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${queen})`, 
                    height: '350px', 
                    width: '300px', 
                    top: '1150px', 
                    left: '460px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 11 ? "hovered" : ""} 
                style={{ 
                    height: '150px', 
                    width: '300px', 
                    top: '1300px', 
                    left: '750px' 
                }} >
                <DescriptionText>{t('queenTitle')}</DescriptionText><DescriptionText>{t('queenDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(12)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${forage})`, 
                    height: '250px', 
                    width: '420px', 
                    top: '1450px', 
                    left: '0'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 12 ? "hovered" : ""} 
                style={{ 
                    height: '140px', 
                    width: '350px', 
                    top: '1690px', 
                    left: '0'
                }} >
                <DescriptionText>{t('forageTitle')}</DescriptionText><DescriptionText>{t('forageDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(13)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${tricot})`, 
                    height: '350px', 
                    width: '265px', 
                    top: '1550px', 
                    left: '350px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 13 ? "hovered" : ""} 
                style={{ 
                    height: '80px', 
                    width: '300px', 
                    top: '1500px', 
                    left: '395px'
                }} >
                <DescriptionText>{t('tricotTitle')}</DescriptionText><DescriptionText>{t('tricotDate')}</DescriptionText>
            </Description>

            <ArtImg 
                onMouseEnter={() => setShowIndex(7)} 
                onMouseLeave={() => setShowIndex(0)} 
                style={{
                    backgroundImage: `url(${circa})`, 
                    height: '350px', 
                    width: '300px', 
                    top: '1500px', 
                    left: '730px'
                }} >
            </ArtImg>
            <Description 
                className={showIndex === 7 ? "hovered" : ""} 
                style={{ 
                    height: '280px', 
                    width: '180px', 
                    top: '1550px', 
                    left: '585px'
                }} >
                <DescriptionText>{t('circaTitle')}</DescriptionText><DescriptionText>{t('circaDate')}</DescriptionText>
            </Description>

          <SideBar style={{ top: (relativeOffsetY1)+'px'}}>Section: Art - Instructions: hover & scroll</SideBar>
          <SideBar style={{ top: (relativeOffsetY2)+'px'}}>Section: Art - Instructions: hover & scroll</SideBar>
      </ArtContainer>
  )
}

export default ArtSection