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
  const timerRef = useRef(null);
  const [styleClassAbout, setStyleClassAbout] = useState("TabLink");
  const [styleClassTech, setStyleClassTech] = useState("TabLink");
  const [styleClassArt, setStyleClassArt] = useState("TabLink");
  const [styleClassContact, setStyleClassContact] = useState("TabLink");
  const [styleClassLang, setStyleClassLang] = useState("TabLink");
  const [styleClassRight, setStyleClassRight] = useState("");
  const [styleClassLeft, setStyleClassLeft] = useState("");
  const [showR, setShowR] = React.useState(false);
  const [showL, setShowL] = React.useState(false);
  const nextPageName = [t('l0'), t('l1'), t('l2'), t('l3'), t('l4')];
  const [nextPageNameR, setNextPageNameR] = useState(t('l1'));
  const [nextPageNameL, setNextPageNameL] = useState(t('l4'));

  const toggleTab = (index) => {
    changeStyle(index);
    timerRef.current = setTimeout(() => setToggleState(index), 1300);
    
    if(index===4) {
        timerRef.current = setTimeout(() => setNextPageNameR(nextPageName[0]), 1100);
        setNextPageNameL(nextPageName[index-1]);
    }
    else {
        timerRef.current = setTimeout(() => setNextPageNameR(nextPageName[index+1]), 1100);
        setNextPageNameL(nextPageName[index-1]);
    }
  };

  const toggleTabR = () => {

    setNextPageNameL(nextPageName[toggleState]);
    changeStyleRight();

    if(toggleState===3) {
        timerRef.current = setTimeout(() => setNextPageNameR(nextPageName[0]), 1100);
        timerRef.current = setTimeout(() => setToggleState(toggleState+1), 500);
        
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 500);
    }
    else if(toggleState===4) {
        timerRef.current = setTimeout(() => setNextPageNameR(nextPageName[1]), 1100);
        timerRef.current = setTimeout(() => setToggleState(0), 500);
        
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassLang("TabLink"), 500);
    }
    else {
        timerRef.current = setTimeout(() => setNextPageNameR(nextPageName[toggleState+2]), 1100);
        timerRef.current = setTimeout(() => setToggleState(toggleState+1), 500);
        
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 500);
    }
  };

  const toggleTabL = () => {

    setNextPageNameR(nextPageName[toggleState]);
    changeStyleLeft();

    if(toggleState===0) {
        timerRef.current = setTimeout(() => setNextPageNameL(nextPageName[3]), 1100);
        timerRef.current = setTimeout(() => setToggleState(4), 500);
        
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 500);
    }
    else if(toggleState===1) {
        timerRef.current = setTimeout(() => setNextPageNameL(nextPageName[4]), 1100);
        timerRef.current = setTimeout(() => setToggleState(0), 500);
        
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLink"), 500);
        timerRef.current = setTimeout(() => setStyleClassLang("TabLink"), 500);
    }
    else {
        timerRef.current = setTimeout(() => setNextPageNameL(nextPageName[toggleState-2]), 1100);
        timerRef.current = setTimeout(() => setToggleState(toggleState-1), 500);
        
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 500);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 500);
    }
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

  const changeStyleRight = () => {
    
        setStyleClassRight("travelRightOne");
        timerRef.current = setTimeout(() => setStyleClassRight("travelRightOne travelRightTwo"), 600);
        timerRef.current = setTimeout(() => setStyleClassRight("travelRightThree"), 1100);
        timerRef.current = setTimeout(() => setStyleClassRight(""), 1600);
  };

  const changeStyleLeft = () => {
    
        setStyleClassLeft("travelLeftOne");
        timerRef.current = setTimeout(() => setStyleClassLeft("travelLeftOne travelLeftTwo"), 600);
        timerRef.current = setTimeout(() => setStyleClassLeft("travelLeftThree"), 1100);
        timerRef.current = setTimeout(() => setStyleClassLeft(""), 1600);
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
        
        <TabLink1 className={styleClassAbout} onClick={() => toggleTab(1)} >{t('l1')}</TabLink1>
        <TabLink2 className={styleClassTech} onClick={() => toggleTab(2)} >{t('l2')}</TabLink2>
        <TabLink3 className={styleClassArt} onClick={() => toggleTab(3)} >{t('l3')}</TabLink3>
        <TabLink4 className={styleClassContact} onClick={() => toggleTab(4)} >{t('l4')}</TabLink4>

        <NextPageHoverR onMouseEnter={() => setShowR(true)} onMouseLeave={() => setShowR(false)} onClick={() => toggleTabR()}/>
        <NextPageLinkR className={showR ? "hovered " +styleClassRight : styleClassRight}> {nextPageNameR} </NextPageLinkR>
        
        <NextPageHoverL onMouseEnter={() => setShowL(true)} onMouseLeave={() => setShowL(false)} onClick={() => toggleTabL()}/>
        <NextPageLinkL  className={showL ? "hovered " +styleClassLeft : styleClassLeft}> {nextPageNameL} </NextPageLinkL>

        <div className={toggleState === 0 ? "content  active-content" : "content"} ><HomeSection /></div>
            
        <div className={toggleState === 1 ? "content  active-content" : "content"} ><AboutSection /></div>

        <div className={toggleState === 2 ? "content  active-content" : "content"} ><TechSection /></div>

        <div className={toggleState === 3 ? "content  active-content" : "content"} ><ArtSection /></div>

        <div className={toggleState === 4 ? "content  active-content" : "content"} ><ContactSection /></div>
    </Container>
  );
};

export default Tabs;