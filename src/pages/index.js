import React, { useState } from 'react';
import TabBar from '../components/TabBar'
import LangBar from '../components/LangBar'
import { Construction } from './PagesElements';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY - window.pageYOffset)
    })

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <LangBar isOpen={isOpen} toggle={toggle}/>
            <TabBar toggle={toggle}/>
            <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}> </div>
            <Construction style={{opacity: '20%'}}>This site is still being built and is unfinished. ___________________ Ce site est encore en construction et n'est pas fini.</Construction>
        </>
    )
}

export default Home
