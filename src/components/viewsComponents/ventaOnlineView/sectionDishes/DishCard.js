
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiCloseDualScreenVenta, uiOpenDualScreenVenta } from '../../../../actions/uiAction';
import { conditionQuantityProduct } from '../../../../helpers/conditionQuantityProduct';
import { useCounter } from '../../../../hooks/useCounter';
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext';

export const DishCard = ({
    id,
    idName,
    dish_name,
    description,
    section,
    price
}) => {

    const {counter, increment, decrement}=  useCounter(parseInt(localStorage.getItem(id)) || 0); 


    const dispatch = useDispatch()



    const sectionId = section.replace(/ /gi,"_");

  

    const handleDecrement = (counter) => {
        if(counter> 0){
            decrement(1)
        }
    }


    //USE CONTEXT
    const {precioTotalVenta, setPrecioTotalVenta, productosAgregados, setProductosAgregados, renderProductosVentas, setRenderProductosVentas, renderListClose, setRenderListClose} = useContext(TotalVentaContext);


    useEffect(() => {
        
        //RENDER SECCIONES
    if(productosAgregados!==null){
        if(productosAgregados.length > 0  && renderListClose===0){

            //setRenderProductosVentas(1);
            dispatch( uiOpenDualScreenVenta() );


        }else {
            //setRenderProductosVentas(0);
            
            dispatch( uiCloseDualScreenVenta() );
            
        }
        localStorage.setItem("renderProductosVentas", renderProductosVentas);
    }
        
    }, [ productosAgregados, renderListClose ])


     
                



  
    
    //guardar en localstorage los valores de los productos
    const handleAddProduct = (counter, price) => {

        localStorage.setItem(id, counter);

        

        if(productosAgregados !== null){

            let controlCambio = conditionQuantityProduct(idName , counter, productosAgregados)
            

           
           if(controlCambio !== -1 ){
            
                setPrecioTotalVenta(   (precioTotalVenta - (price * productosAgregados[controlCambio].counter))+(price * counter)) 

                let aux = productosAgregados; 
            
                aux.splice(controlCambio, 1)

                if(counter!==0){
                    setProductosAgregados([...aux , {  idName , counter, price, dish_name, section, id }]) 
                }
           }
           else{
                  
           if(counter!==0){

                setProductosAgregados([...productosAgregados , {idName , counter, price, dish_name, section, id } ])
            
                setPrecioTotalVenta( (price * counter) + precioTotalVenta)
                }
           }
           setRenderListClose(0);
        }



        else if(productosAgregados === null){
            if(counter!== 0){
                setProductosAgregados([{idName , counter, price, dish_name, section, id }] )

                localStorage.setItem(id, counter);
        
                setPrecioTotalVenta( (price * counter) + precioTotalVenta)
                
                //setRenderProductosVentas(1);
                
                dispatch( uiOpenDualScreenVenta() );
                

                setRenderListClose(0);
                localStorage.setItem("renderProductosVentas", renderProductosVentas);
            }
        }
    }

     

    return (
        <div className="card" style={{maxWidth: 440}} >
            <div className="row no-gutters ">
                <img src={`../.././assets/img_platillos_restaurantes/${sectionId}/${idName}.png`} className="card-img img-fluid" alt={dish_name} />
            </div>
            <div className="card-body mx-auto">
                <h5 className="card-title text-center">{dish_name}</h5>
                <p className="card-text text-center">{description}.</p>
                <hr />
                <h5 className="card-title text-center">Precio: ${price}</h5>
                <div className="d-flex justify-content-center">
                    <button onClick={() => handleDecrement(counter)} className="btn-sm btn-info mr-3">-</button>
                    <h3>{  counter }</h3>
                    <button onClick={() => increment(1)} className="btn-sm btn-info ml-3">+</button>
                </div>
                <button onClick={() => handleAddProduct(counter, price)} className="btn-sm btn-info btn-block mt-2">Agregar producto</button>
                
            </div>
            
            
        </div>
    )
}
