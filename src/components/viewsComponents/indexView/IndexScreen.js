import React from 'react';
import { FooterScreen } from '../footerView/FooterScreen';
import { NavbarScreen } from '../navbarView/NabvarScreen';
import { Carrousel } from './Carrousel';
import {  MenuIndexSection } from './MenuIndexSection';


export const IndexScreen = () => {
    return (
        <>
    <NavbarScreen />

        <article className="sec_ban">
          
         <Carrousel />
        </article>

        <section className="menu">
            <MenuIndexSection />

        </section>
        
        <FooterScreen />

        </>
    )
}
