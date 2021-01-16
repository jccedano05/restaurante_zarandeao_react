import React, { useContext } from 'react'
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext';
import { ArticulosAgregados } from './ArticulosAgregados'


export const ArticulosList = () => {


    const { precioTotalVenta,  productosAgregados, setRenderProductosVentas, setRenderListClose} = useContext(TotalVentaContext);


    const handleBtnClose = () => {
        setRenderProductosVentas(0);
        setRenderListClose(1);
    }

    
    

    return (
        <>
            <div className="card d-block bg-dark ">
                <div className="d-flex justify-content-between">
                    <h1 className="card-title h1 text-light "> Compra </h1>
                    <button className="btn btn-outline-light" onClick={handleBtnClose}>
                        <i class="fas fa-times-circle fa-3x"></i>
                    </button>
                </div>
            
            
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
