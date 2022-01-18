import React, { useState } from 'react';
import { AboutContainer, AboutBody, SideBar, Heading1, Heading2, Subtitle, BioContainer, BioTxtContainer, TxtContainer, ImgContainer, Img, Legend, BioText, EvolTitle, EvolText, EvolDrawing, EvolContainer } from './AboutElements';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
    const { t } = useTranslation();
    const [relativeOffsetY1, setRelativeOffsetY1] = useState(0);
    const [relativeOffsetY2, setRelativeOffsetY2] = useState(window.innerHeight);
    const handleScroll = () => handleOffset(window.pageYOffset);
    const [H1Style, setH1Style] = useState("HBefore");
    const [H2Style, setH2Style] = useState("HBefore");
    const [bioContainer, setBioContainer] = useState("");
    const [subtitleAfter, setSubtitleAfter] = useState("");
    
    const handleOffset = (offset) => {
        setRelativeOffsetY1((offset/6) % (window.innerHeight));
        setRelativeOffsetY2((offset/6) % (window.innerHeight)+window.innerHeight);

        if(offset >= (window.innerHeight*1.2-40)) {
            setH1Style("HAfter");
        }
        else {
            setH1Style("HBefore");
        }
        if(offset >= (window.innerHeight*2.2-40)) {
            setH2Style("HAfter");
        }
        else {
            setH2Style("HBefore");
        }
        if(offset >= (window.innerHeight*4.2)) {
            setBioContainer("bioContainer");
            setSubtitleAfter("subtitleAfter");
        }
        else {
            setBioContainer("");
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <AboutContainer>
            <SideBar style={{ top: (relativeOffsetY1)+'px'}}>Section: About - Instructions: Scroll - Section: About - Instructions: Scroll - </SideBar>
            <SideBar style={{ top: (relativeOffsetY2)+'px'}}>Section: About - Instructions: Scroll - Section: About - Instructions: Scroll - </SideBar>
            <ImgContainer><Img><Legend>{t('aboutLegend')}</Legend></Img></ImgContainer>
            
            <BioContainer>
                <Heading1 className={H1Style}>{t('aboutHeading')}</Heading1>
                <Heading2 className={H2Style}>Anne-Sophie</Heading2>
            </BioContainer>

            <BioContainer className={bioContainer} style={{ backgroundColor: 'black', marginTop: '0' }}>
                <TxtContainer>
                    <Subtitle className={subtitleAfter} >{t('aboutSubtitle1')}</Subtitle>
                    <BioTxtContainer>
                        <BioText>{t('bioText1a')}</BioText>
                        <BioText>{t('bioText1b')}</BioText>
                    </BioTxtContainer>
                </TxtContainer>
            </BioContainer>

            <EvolContainer>
                <EvolTitle>{t('aboutSubtitle2')}</EvolTitle>
                <EvolDrawing></EvolDrawing>
                <EvolText>{t('bioText2a')}</EvolText>
                <EvolText style={{ top: '290px' }}>{t('bioText2b')}</EvolText>
                <EvolText style={{ top: '370px' }}>{t('bioText2c')}</EvolText>
                <EvolText style={{ top: '470px' }}>{t('bioText2d')}</EvolText>
            </EvolContainer>
        </AboutContainer>
    )
}

export default AboutSection
