import React from 'react';
import { ContactContainer, ContactContent, Heading, Subtitle, Question, BtnQuestion, BtnGroup, BtnTitle, BtnIcon, Box1, Box2, Box3, Box4, ShowResults, Result, ResDiv, ContactH3 } from './ContactElements';
import { useTranslation } from 'react-i18next';
import { WiMoonAltWaningCrescent6, WiMoonAltWaningCrescent1, WiMoonAltWaningGibbous1 } from 'react-icons/wi';
import { GiMeat, GiFruitBowl, GiCaveEntrance, GiForest } from 'react-icons/gi';

const ArtSection = () => {
    const { t } = useTranslation();

    return (
        <ContactContainer id="Contact">
            <ContactContent>
                <Heading>{t("ContactH")}</Heading>
                <Subtitle>{t("ContactS")}</Subtitle>
            </ContactContent>
        </ContactContainer>
    )
}

export default ArtSection