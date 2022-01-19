import React from 'react';
import { ContactContainer, Heading } from './ContactElements';
import { useTranslation } from 'react-i18next';
import Horloge from "./Horloge";

const ArtSection = () => {
    const { t } = useTranslation();

    return (
        <ContactContainer>
            <Heading>{t("ContactH")}</Heading>
            <Heading>{t("ContactS")}</Heading>
            <Horloge />
        </ContactContainer>
    )
}

export default ArtSection