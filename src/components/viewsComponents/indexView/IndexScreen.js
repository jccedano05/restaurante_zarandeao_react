import React from 'react';
import { Carrousel } from './Carrousel';
import {  MenuIndexSection } from './MenuIndexSection';


export const IndexScreen = () => {
    return (
        <>

        <article className="sec_ban">
          
         <Carrousel />
        </article>

        <section className="menu">
            <MenuIndexSection />

        </section>
        
        

        </>
    )
}
