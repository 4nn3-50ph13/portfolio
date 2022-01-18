import React, { useState } from 'react';
import TabBar from '../components/TabBar'
import LangBar from '../components/LangBar'
import { Construction } from './PagesElements';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const hovering = () => {
        setIsHovering(!isHovering);
    }

    return (
        <>
            <LangBar isOpen={isOpen} toggle={toggle}/>
            <TabBar toggle={toggle} isHovering={isHovering} hovering={hovering} />
            <Construction style={{opacity: '20%'}}>This site is still being built and is unfinished. ___________________ Ce site est encore en construction et n'est pas fini.</Construction>
        </>
    )
}

export default Home
