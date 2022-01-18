import React, { useState, useEffect } from 'react';
import { AboutContainer, AboutBody, SideBar, Heading1, Heading2, Subtitle, BioContainer, ImgContainer, Img, Legend, BioText, EvolText, EvolDrawing, EvolContainer } from './AboutElements';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    const { t } = useTranslation();
    const [relativeOffsetY1, setRelativeOffsetY1] = useState(0);
    const [relativeOffsetY2, setRelativeOffsetY2] = useState(window.innerHeight);
    const handleScroll = () => handleOffset(window.pageYOffset);
    
    const handleOffset = (offset) => {
        setRelativeOffsetY1(offset % (window.innerHeight));
        setRelativeOffsetY2(offset % (window.innerHeight)+window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        AOS.init({duration: 500});
    }, []);

    return (
        <AboutContainer>
            <SideBar style={{ top: (relativeOffsetY1)+'px'}}>Section: About - Instructions: Scroll - Section: About - Instructions: Scroll - </SideBar>
            <SideBar style={{ top: (relativeOffsetY2)+'px'}}>Section: About - Instructions: Scroll - Section: About - Instructions: Scroll - </SideBar>
            <ImgContainer><Img><Legend>{t('aboutLegend')}</Legend></Img></ImgContainer>
            <BioContainer 
                style={{ marginTop: '120vh' }}>
                <Heading1 data-aos="fade-up" data-aos-anchor-placement="center-center" >{t('aboutHeading')}</Heading1>
                <Heading2 data-aos="fade-up" data-aos-anchor-placement="center-center" >Anne-Sophie</Heading2>
            </BioContainer>
            <BioContainer style={{ backgroundColor: 'black' }}>
                <Subtitle>{t('aboutSubtitle1')}</Subtitle>
                <BioText>{t('bioText1')}</BioText>
            </BioContainer>
            <EvolContainer>
                <Subtitle>{t('aboutSubtitle2')}</Subtitle>
                <EvolDrawing></EvolDrawing>
                <EvolText>{t('bioText2')}</EvolText>
            </EvolContainer>
        </AboutContainer>
    )
}

export default AboutSection
