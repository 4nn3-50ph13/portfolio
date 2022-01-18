import React from 'react';
import { TechContainer, Heading, Subtitle, Legend, ProjectContainer, ProjectTextContainer, ProjectText, ImgContainer, Img} from './TechElements';
import { useTranslation } from 'react-i18next';

const TechSection = () => {
    const { t } = useTranslation();
    
    return (
        <TechContainer>
            <Heading>{t('techHeading')}</Heading>
            <ProjectContainer>
                <ProjectText id="techBG1">
                    <Subtitle>{t('techSubtitle1')}</Subtitle>
                    {t('projText_1')}
                </ProjectText>
                <ImgContainer><Img id="techImg1"><Legend>{t('proj1Legend')}</Legend></Img></ImgContainer>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectText id="techBG2" style={{ marginLeft: `auto`}}>
                    <Subtitle>{t('techSubtitle2')}</Subtitle>
                    {t('projText_2')}
                </ProjectText>
                <ImgContainer style={{ left: `0%`}}><Img id="techImg2"><Legend>{t('proj2Legend')}</Legend></Img></ImgContainer>
            </ProjectContainer>
            <ProjectContainer>
                <ProjectText id="techBG3">
                    <Subtitle>{t('techSubtitle3')}</Subtitle>
                    {t('projText_3')}
                </ProjectText>
                <ImgContainer><Img id="techImg3"><Legend>{t('proj3Legend')}</Legend></Img></ImgContainer>
            </ProjectContainer>
        </TechContainer>
    )
}

export default TechSection;