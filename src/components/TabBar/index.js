import React, { useState, useEffect, useRef } from 'react'
import { IoLanguageOutline } from 'react-icons/io5';
import { Container, TabLogo, TabLink1, TabLink2, TabLink3, TabLink4, LangBtn, Cursor } from './TabBarElements';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import LangBar from '../LangBar'
import HomeSection from '../HomeSection';
import AboutSection from '../AboutSection';
import ArtSection from '../ArtSection';
import TechSection from '../TechSection';
import ContactSection from '../ContactSection';

const Tabs = ({toggle}) => {
  const [toggleState, setToggleState] = useState(0);
  const { t } = useTranslation();
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const timerRef = useRef(null);
  const [styleClassAbout, setStyleClassAbout] = useState("TabLink");
  const [styleClassTech, setStyleClassTech] = useState("TabLink");
  const [styleClassArt, setStyleClassArt] = useState("TabLink");
  const [styleClassContact, setStyleClassContact] = useState("TabLink");
  const [styleClassLang, setStyleClassLang] = useState("TabLink");

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY - window.pageYOffset)
    })

  const toggleTab = (index) => {
    changeStyle(index);
    timerRef.current = setTimeout(() => setToggleState(index), 1300);
  };

  const changeStyle = (index) => {
    if(index == 1){
        setStyleClassAbout("TabLink TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
    if(index == 2){
        setStyleClassTech("TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
    if(index == 3){
        setStyleClassArt("TabLinkClicked1");
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkClicked1 TabLinkClicked2"), 500);
        timerRef.current = setTimeout(() => setStyleClassArt("TabLinkClicked1 TabLinkClicked2 TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassAbout("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassTech("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassContact("TabLinkOver"), 1300);
        timerRef.current = setTimeout(() => setStyleClassLang("LangLinkAfter"), 1300);
    }
    if(index == 4){
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
                color: 'white ',
            }}/>
            Languages
        </LangBtn>
        <TabLink1 className={styleClassAbout} onClick={() => toggleTab(1)} >{t('l1')}</TabLink1>
        <Cursor style={{ left: cursorX + 'px', top: cursorY + 'px' }}> </Cursor>
        <TabLink2 className={styleClassTech} onClick={() => toggleTab(2)} >{t('l2')}</TabLink2>
        <TabLink3 className={styleClassArt} onClick={() => toggleTab(3)} >{t('l3')}</TabLink3>
        <TabLink4 className={styleClassContact} onClick={() => toggleTab(4)} >{t('l4')}</TabLink4>

        <div className={toggleState === 0 ? "content  active-content" : "content"} ><HomeSection /></div>
            
        <div className={toggleState === 1 ? "content  active-content" : "content"} ><AboutSection /></div>

        <div className={toggleState === 2 ? "content  active-content" : "content"} ><TechSection /></div>

        <div className={toggleState === 3 ? "content  active-content" : "content"} ><ArtSection /></div>

        <div className={toggleState === 4 ? "content  active-content" : "content"} ><ContactSection /></div>
    </Container>
  );
};

export default Tabs;