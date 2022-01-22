import React, { useState, useRef } from 'react'
import { IoLanguageOutline } from 'react-icons/io5';
import { Container, TabLink1, TabLink2, TabLink3, TabLink4, LangBtn, NextPageHoverR, NextPageLinkR, NextPageHoverL, NextPageLinkL } from './TabBarElements';
import { useTranslation } from 'react-i18next';
import HomeSection from '../HomeSection';
import AboutSection from '../AboutSection';
import ArtSection from '../ArtSection';
import TechSection from '../TechSection';
import ContactSection from '../ContactSection';

const Tabs = ({toggle}) => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(0);
  const [tabIndex, setTabIndex] = useState(1);
  const timerRef = useRef(null);
  const [styleClassAbout, setStyleClassAbout] = useState("TabLink");
  const [styleClassTech, setStyleClassTech] = useState("TabLink");
  const [styleClassArt, setStyleClassArt] = useState("TabLink");
  const [styleClassContact, setStyleClassContact] = useState("TabLink");
  const [styleClassLang, setStyleClassLang] = useState("TabLink");
  const [showR, setShowR] = React.useState(false);
  const [showL, setShowL] = React.useState(false);

  const toggleTabR = (index) => {
    if(index==4) {
        setTabIndex(0);
    }
    else {
        setTabIndex(index+1);
    }
    
    changeStyle(index);
    timerRef.current = setTimeout(() => setToggleState(index), 1300);
  };

  const toggleTabL = (index) => {
    if(index==0) {
        setTabIndex(4);
    }
    else {
        setTabIndex(index-1);
    }
    
    changeStyle(index);
    timerRef.current = setTimeout(() => setToggleState(index), 1300);
  };

  const changeStyle = (index) => {
    if(index === 1){
        setStyleClassAbout("TabLink TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
    if(index === 2){
        setStyleClassTech("TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
    if(index === 3){
        setStyleClassArt("TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
    if(index === 4){
        setStyleClassContact("TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
  };

  return (
    <Container className="container">
        <LangBtn className={styleClassLang} onClick={toggle}>
            <IoLanguageOutline style={{
                width: '100%',
                height: '100%',
                color: 'floralwhite'
            }}/>
            Languages
        </LangBtn>
        
        <TabLink1 className={styleClassAbout} onClick={() => toggleTabR(1)} >{t('l1')}</TabLink1>
        <TabLink2 className={styleClassTech} onClick={() => toggleTabR(2)} >{t('l2')}</TabLink2>
        <TabLink3 className={styleClassArt} onClick={() => toggleTabR(3)} >{t('l3')}</TabLink3>
        <TabLink4 className={styleClassContact} onClick={() => toggleTabR(4)} >{t('l4')}</TabLink4>

        <NextPageHoverR onMouseEnter={() => setShowR(true)} onMouseLeave={() => setShowR(false)} onClick={() => toggleTabR(tabIndex)}/>
        <NextPageLinkR  className={showR ? "hovered" : ""}/>
        
        <NextPageHoverL onMouseEnter={() => setShowL(true)} onMouseLeave={() => setShowL(false)} onClick={() => toggleTabL(tabIndex)}/>
        <NextPageLinkL  className={showL ? "hovered" : ""}/>

        <div className={toggleState === 0 ? "content  active-content" : "content"} ><HomeSection /></div>
            
        <div className={toggleState === 1 ? "content  active-content" : "content"} ><AboutSection /></div>

        <div className={toggleState === 2 ? "content  active-content" : "content"} ><TechSection /></div>

        <div className={toggleState === 3 ? "content  active-content" : "content"} ><ArtSection /></div>

        <div className={toggleState === 4 ? "content  active-content" : "content"} ><ContactSection /></div>
    </Container>
  );
};

export default Tabs;