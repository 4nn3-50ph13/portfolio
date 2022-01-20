import React from 'react';
import { ContactContainer, Heading, Quote } from './ContactElements';
import { useTranslation } from 'react-i18next';
import Horloge from "./Horloge";

const ArtSection = () => {
    const { t } = useTranslation();

    return (
        <ContactContainer>
            <Horloge />
            <Quote>'I wish it need not have happened in my time,' said Frodo. </Quote>
            <Quote style={{paddingTop:'15vh'}}>'So do I,' said Gandalf,</Quote>
            <Quote style={{paddingTop:'25vh'}}>'and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.'</Quote>
            <Quote style={{paddingTop:'50vh'}}>- J.R.R. Tolkien, The Fellowship of The Ring</Quote>
        </ContactContainer>
    )
}

export default ArtSection