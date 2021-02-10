import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext';
import { FooterScreen } from '../../footerView/FooterScreen';
import { NavbarScreen } from '../../navbarView/NabvarScreen';
import { BarraVenta } from '../BarraVenta';
import { ArticulosList } from './ArticulosList';
import { DishesList } from './DishesList';

export const DishesScreen = () => {
    const { section } = useParams();

    const sectionId = section.replace(/_/gi," ");

    const {renderProductosVentas} = useContext(TotalVentaContext) ;

    const {openDualScreenVenta} = useSelector(state => state.ui)

    console.log(openDualScreenVenta)




    // ---- Sticky Header Fixed ---

    useEffect(() => {

        const navbarSticky = document.getElementById("navbar") ;
        
        const sticky = navbarSticky.offsetTop ;
        
        const scrollCallback = window.addEventListener("scroll", () => {
            
            if(window.pageYOffset > sticky){
                navbarSticky.classList.add("sticky");
            }
            else{
                navbarSticky.classList.remove("sticky");
            }
        });

        return () => {
            window.removeEventListener("scroll", scrollCallback);
        };
        
    }, []);

    // --- End Sticky Header Fixed --- 


    return (
        <>

<NavbarScreen />

        <header className="bg-dark py-1" id="navbar">
            <BarraVenta />
        </header>

        <div className="py-2 mx-3 d-flex ">
            <div className="row ">
                {
                    /* renderProductosVentas === 1 */ (openDualScreenVenta) &&
                        <div className="col-md-8 animate__animated animate__fadeInLeft">
                            <hr />
                            <DishesList section={sectionId} />
                        </div>     
                }
                 {
                    /* renderProductosVentas === 0 */ (!openDualScreenVenta) &&
                        <div className="col-md-12 px-5 animate__animated animate__fadeIn ">
                            <hr />
                            <DishesList section={sectionId} />
                        </div>   
                }
                


                { /* renderProductosVentas === 1 */  (openDualScreenVenta) &&
                    <div className="col-md-4 py-3 animate__animated animate__fadeInRight " >
                        <ArticulosList />
                    </div>
                }
            </div>
            
        </div>

        <FooterScreen />
        </>
    )
}
