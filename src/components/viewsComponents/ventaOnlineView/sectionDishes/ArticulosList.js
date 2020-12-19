import React, { useContext } from 'react'
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext';
import { ArticulosAgregados } from './ArticulosAgregados'

export const ArticulosList = () => {


    const { precioTotalVenta,  productosAgregados} = useContext(TotalVentaContext);


    

    return (
        <>
            <div className="card d-block bg-dark">
                <h1 className="card-title h1 text-light "> Compra </h1>
            
            
                <div className=" card-body ">
                    
                    {
                         productosAgregados &&
                            productosAgregados.length >0 && 
                                productosAgregados.map( pA =>(
                                    <ArticulosAgregados {...pA} />
                                   
                            ))
                    }
                    
                    
                </div>
                <h1 className="card-title text-light "> {`TOTAL GENERAL: $${precioTotalVenta}.00`} </h1>
                 
           
        </div>

           
        </>
    )
}
