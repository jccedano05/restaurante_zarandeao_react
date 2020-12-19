import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom';
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext';
import { BarraVenta } from '../BarraVenta';
import { ArticulosList } from './ArticulosList';
//import { ArticulosAgregados } from './ArticulosAgregados';
import { DishesList } from './DishesList';

export const DishesScreen = () => {
    const { section } = useParams();

    const sectionId = section.replace(/_/gi," ");

    const {renderProductosVentas} = useContext(TotalVentaContext)

    return (
        <>
        <BarraVenta />

        <div className="py-2 ml-5 d-flex ">
            <div className="row ">
                {
                    renderProductosVentas === 1 &&
                        <div className="col-md-8 animate__animated animate__fadeInLeft">
                            <hr />
                            <DishesList section={sectionId} />
                        </div>     
                }
                 {
                    renderProductosVentas === 0 &&
                        <div className="col-md-12 px-5 animate__animated animate__fadeIn">
                            <hr />
                            <DishesList section={sectionId} />
                        </div>   
                }
                


                { renderProductosVentas &&
                    <div className="col-md-4 py-3 animate__animated animate__fadeInRight mt-5"   >
                        <ArticulosList />
                    </div>
                }
            </div>
            
        </div>
        </>
    )
}
