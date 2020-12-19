import React, {  useContext } from 'react'
import { TotalVentaContext } from '../../../variablesContext/TotalVentaContext'


export const BarraVenta = () => {


  
    //Variable Global
   const {precioTotalVenta, productosAgregados} = useContext(TotalVentaContext);
  

   const handleVentaCompleta = (p = productosAgregados) => {
       
        if(p!==null ){
            if(Object.keys(p).length !== 0){
                for(let i=0; i<p.length; i++){
                    console.log(`Producto: ${p[i].idName}, Cantidad: ${p[i].counter}, Precio: ${p[i].price}, Total: ${p[i].price * p[i].counter}}`)
                }
            }else{
                console.log("No se han agregado productos aun")
            }
            
        } else{
            console.log("No se han agregado productos aun")
        }
   }

 

    return (
        <>
            <div className="bg-dark py-3 ">
            <div className="container d-flex justify-content-end  text-light">
                
                <button className="btn btn-outline-warning  justify-content-center px-4" onClick={ ()=> handleVentaCompleta(productosAgregados) }>
                    <h1 className=" ">${precioTotalVenta || 0}.00</h1>
                    <i className="fas fa-shopping-cart fa-2x  align-middle "></i>
                </button>
                
            </div>  
            </div> 
        </>
    )
}
