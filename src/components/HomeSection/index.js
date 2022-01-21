import React from 'react';
import { HomeContainer,TextContainer, BackgroundImage, Title, Name, Job1, Job2 } from './HomeElements';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const HomeSection = () => {
    const { t } = useTranslation();

    return (
        <HomeContainer>
            <BackgroundImage className="backgroundImage"></BackgroundImage>
            <TextContainer></TextContainer>
            <Name > ANNE-SOPHIE CUSSON </Name>
            <Job1 > {t('subtitle1')} </Job1>
            <Job2 > {t('subtitle2')} </Job2>
        </HomeContainer>
    )
}

export default HomeSection
