import React, {  useContext } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { uiOpenDualScreenVenta } from '../../../actions/uiAction';
import { TotalVentaContext } from '../../../variablesContext/TotalVentaContext'


export const BarraVenta = () => {

    const dispatch = useDispatch()

    const { section } = useParams();
    let sectionId = "";

    if(section){
         sectionId = section.replace(/_/gi," ");
    }
 
  
    //Variable Global
   const {precioTotalVenta, productosAgregados, setRenderProductosVentas, setRenderListClose} = useContext(TotalVentaContext);
  

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
        setRenderProductosVentas(1);
        
        dispatch( uiOpenDualScreenVenta() );

        setRenderListClose(0);
   }

 

    return (
            <div className=" d-flex justify-content-between  mx-5">
            <div className="d-flex justify-content-start py-3">
               { section && 
                    <Link to={`/ventaOnline/menuGeneral`}>
                        <i className ="fas fa-arrow-circle-left fa-5x text-warning"></i>
                    </Link>
                }
                
                <Link to={`/ventaOnline/menuGeneral`}  className="ml-4 my-auto text-warning">
                    <h1>Menu  </h1>
                </Link>
                { section && 
                    <Link to={`/ventaOnline/menuGeneral/${sectionId}`} className="ml-1 my-2 text-warning">
                        <h1 className="ml-2 my-1">/ {sectionId} </h1>
                    </Link>
                }   
            </div>
                
                
                    <button className="btn btn-outline-warning  justify-content-end px-4" onClick={ ()=> handleVentaCompleta(productosAgregados) }>
                        <h1 className=" ">${precioTotalVenta || 0}.00</h1>
                        <i className="fas fa-shopping-cart fa-2x  align-middle "></i>
                    </button>
                
            </div>  
    )
}
