import React from 'react'
import { PlatillosPrincipalesSecciones } from '../../../data/PlatillosPrincipalesSecciones'
import { FooterScreen } from '../footerView/FooterScreen'
import { NavbarScreen } from '../navbarView/NabvarScreen'
import { ModalMenu } from './ModalMenu'

export const MenuScreen = () => {

    

    return (
        <>

<NavbarScreen />

<section className="menu">
    
    <section className="container menu">
        <div className="info_menu">
            <h1 className="title">NUESTRO MENU</h1>
            <p className="description">Los mariscos más frescos y el ambiente ideal.
                </ p>
        </div>



        {//<!-- Portafolio-->
        }
        <section className="  resume-section page-section portfolio" id="portafolio">
            <div className="resume-section-content">

                <div className="row">

                {
                    PlatillosPrincipalesSecciones.map( platillosSeccion => (
                        
                    <ModalMenu key={platillosSeccion.id+platillosSeccion.idName} modalNumber={platillosSeccion.id} section={platillosSeccion.section} idName={platillosSeccion.idName}  />
                    ))
                }
                    
                </div>
              </div>
        </section>


    </section>
</section>




<FooterScreen />


        </>
    )
}
