import React from 'react';
import { LangContainer, Icon, CloseIcon, LangWrapper, LangLink } from './LangElements';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import translationEN from "../../assets/locales/en/translation.json";
import translationFR from "../../assets/locales/fr/translation.json";


const LangBar = ({isOpen, toggle}) => {
    function changeLang(code) {
        i18n.changeLanguage(code);
        toggle();
    }
    const resources = {
     en: {
       translation: translationEN,
     },
     fr: {
       translation: translationFR,
     },
    };
    
    i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        lng: "en",
        fallbackLng: "en",
        resources,
        react: {useSuspense: false}
    });
    return (
        <LangContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <LangWrapper id="langLinks">
                <LangLink onClick={() => changeLang("fr")}>Francais</LangLink>
                <LangLink onClick={() => changeLang("en")}>English</LangLink>
            </LangWrapper>
        </LangContainer>
    )
}

export default LangBar;
