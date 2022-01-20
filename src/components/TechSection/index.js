import React, { useState } from 'react';
import { SideBar, TechContainer, Subtitle, ProjectContainer, ProjectText, ImgContainer, Number} from './TechElements';
import { useTranslation } from 'react-i18next';
import aeponyxLogo from '../../images/proj/AeponyxLogo.png';

const TechSection = () => {
    const { t } = useTranslation();
    const [relativeOffsetY1, setRelativeOffsetY1] = useState(0);
    const [relativeOffsetY2, setRelativeOffsetY2] = useState(window.innerHeight);
    const handleScroll = () => handleOffset(window.pageYOffset);
    const [p1Style, setp1Style] = useState(true);
    const [p2Style, setp2Style] = useState(false);
    const [p3Style, setp3Style] = useState(false);
    const [p4Style, setp4Style] = useState(false);
    
    const handleOffset = (offset) => {
        setRelativeOffsetY1((offset/5) % (window.innerHeight));
        setRelativeOffsetY2((offset/5) % (window.innerHeight)+window.innerHeight);
        
        if(offset < (window.innerHeight)) {
            setp1Style(true);
            setp2Style(false);
            setp3Style(false);
            setp4Style(false);
        }
        else if((offset >= window.innerHeight) && (offset < window.innerHeight*2)) {
            setp1Style(false);
            setp2Style(true);
            setp3Style(false);
            setp4Style(false);
        }
        else if((offset >= window.innerHeight*2) && (offset < window.innerHeight*3)) {
            setp1Style(false);
            setp2Style(false);
            setp3Style(true);
            setp4Style(false);
        }
        else if((offset >= window.innerHeight*3) && (offset < window.innerHeight*4 )) {
            setp1Style(false);
            setp2Style(false);
            setp3Style(false);
            setp4Style(true);
        }
    };
    
    window.addEventListener('scroll', handleScroll);

    return (
        <TechContainer>
            <SideBar style={{ top: (relativeOffsetY1)+'px'}}>Section: Tech - Instructions: Scroll - Section: Tech - Instructions: Scroll - </SideBar>
            <SideBar style={{ top: (relativeOffsetY2)+'px'}}>Section: Tech - Instructions: Scroll - Section: Tech - Instructions: Scroll - </SideBar>

            <svg  className={p1Style ? "svgTextPath rotating projBeforeOuter" : "svgTextPath rotating projAfter"} xmlns="http://www.w3.org/2000/svg">
                <circle id="MyPath" cx={window.innerHeight/2} cy={window.innerHeight/2} r={window.innerHeight*0.455} stroke-width="1" fill="none"/>
              <text>
                <textPath href="#MyPath">- First project: AEPONYX internships - First project: AEPONYX internships - First project: AEPONYX internships                 </textPath>
              </text>
            </svg>

            <ProjectContainer className={p1Style ? "projBeforeOuter" : "projAfter"}>
                <ImgContainer className={p1Style ? "projBeforeInner" : "projAfter"} ></ImgContainer>{/*style={{backgroundImage: `url(${aeponyxLogo})`}}*/}
                
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"}>{t('proj1Texta')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '10vh', fontSize: '8vh'}}>{t('proj1Textb')}</ProjectText>
                
                <Number style={{top: '30vh', right: '35vw'}}>1</Number>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '26vh', textAlign: 'left', paddingLeft: '5vh'}}>{t('proj1Textc')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '32vh', textAlign: 'left', paddingLeft: '3.5vh'}}>{t('proj1Textd')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '38vh'}}>{t('proj1Texte')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '45vh', fontSize: '3vh'}}>2021.01.07 - 2021.04.17</ProjectText>
                
                <Number style={{top: '65vh', right: '62vw'}}>2</Number>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '52vh', textAlign: 'right', paddingRight: '5vh'}}>{t('proj1Textf')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '58vh', textAlign: 'right', paddingRight: '5vh'}}>{t('proj1Textg')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '64vh'}}>{t('proj1Texth')}</ProjectText>
                <ProjectText className={p1Style ? "projBeforeInner" : "projAfter"} style={{marginTop: '71vh', fontSize: '3vh'}}>2021.07.07 - 2021.12.17</ProjectText>
            </ProjectContainer>
            

            <svg  className={p2Style ? "svgTextPath rotating projBeforeOuter" : "svgTextPath rotating projAfter"} xmlns="http://www.w3.org/2000/svg">
                <circle id="MyPath" cx={window.innerHeight/2} cy={window.innerHeight/2} r={window.innerHeight*0.455} stroke-width="1" fill="none"/>
              <text>
                <textPath href="#MyPath">- Second project: SolidWorks Cryptex - Second project: SolidWorks Cryptex - Second project: SolidWorks Cryptex 
                </textPath>
              </text>
            </svg>

            <ProjectContainer className={p2Style ? "projBeforeOuter" : "projAfter"}>
                <ImgContainer className={p2Style ? "projBeforeInner" : "projAfter"}></ImgContainer>
                <ProjectText className={p2Style ? "projBeforeInner" : "projAfter"}>{t('proj2Text')}</ProjectText>
            </ProjectContainer>
            

            <svg  className={p3Style ? "svgTextPath rotating projBeforeOuter" : "svgTextPath rotating projAfter"} xmlns="http://www.w3.org/2000/svg">
                <circle id="MyPath" cx={window.innerHeight/2} cy={window.innerHeight/2} r={window.innerHeight*0.455} stroke-width="1" fill="none"/>
              <text>
                <textPath href="#MyPath">- Third project: Tic-Tac-Toe & Machine Learning - Third project: Tic-Tac-Toe & Machine Learning 
                </textPath>
              </text>
            </svg>

            <ProjectContainer className={p3Style ? "projBeforeOuter" : "projAfter"}>
                <ImgContainer className={p3Style ? "projBeforeInner" : "projAfter"}></ImgContainer>
                <ProjectText className={p3Style ? "projBeforeInner" : "projAfter"}>{t('proj3Text')}</ProjectText>
            </ProjectContainer>
            

            <svg  className={p4Style ? "svgTextPath rotating projBeforeOuter" : "svgTextPath rotating projAfter"} xmlns="http://www.w3.org/2000/svg">
                <circle id="MyPath" cx={window.innerHeight/2} cy={window.innerHeight/2} r={window.innerHeight*0.455} stroke-width="1" fill="none"/>
              <text>
                <textPath href="#MyPath"> 
                    - Fourth project: This website! - Fourth project: This website! - Fourth project: This website! 
                </textPath>
              </text>
            </svg>

            <ProjectContainer className={p4Style ? "projBeforeOuter" : "projAfter"}>
                <ImgContainer className={p4Style ? "projBeforeInner" : "projAfter"}></ImgContainer>
                <ProjectText className={p4Style ? "projBeforeInner" : "projAfter"}>{t('proj4Text')}</ProjectText>
            </ProjectContainer>


                {/*<ProjectText>
                    <Heading>{t('techHeading')}</Heading>
                </ProjectText>*/}
        </TechContainer>
    )
}

export default TechSection;