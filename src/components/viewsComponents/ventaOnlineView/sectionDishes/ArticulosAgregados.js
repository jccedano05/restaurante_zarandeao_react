import { useContext, useMemo } from "react";
import { conditionQuantityProduct } from "../../../../helpers/conditionQuantityProduct";
import { TotalVentaContext } from "../../../../variablesContext/TotalVentaContext";

export const ArticulosAgregados = ({dish_name, price, counter, section, idName, id }) => {


    const sectionId = section.replace(/ /gi,"_");
  
//USE CONTEXT
const {precioTotalVenta, setPrecioTotalVenta, productosAgregados, setProductosAgregados, setRenderProductosVentas} = useContext(TotalVentaContext);


    





    //
    const handleEliminar = () => {

        let controlCambio = conditionQuantityProduct(idName , counter, productosAgregados)
            
        counter=0;
           
           if(controlCambio !== -1 ){

                localStorage.setItem(id, 0);
            
                setPrecioTotalVenta(   (precioTotalVenta - (price * productosAgregados[controlCambio].counter))+(price * counter)) 

                let aux = productosAgregados; 
            
                aux.splice(controlCambio, 1)

                setProductosAgregados([...aux ]) 
            
                if(productosAgregados.length > 0){

                    setRenderProductosVentas(1);
                } 

               
                
                
           }
    }




    return (
        
        

//<li className="h5 my-4">{`${dish_name}  -  Cantidad: ${counter}  -  Precio:${price}  -  Total:${price*counter} `}</li>
    <div className="card my-3 ">
        <div className=" row">
            <div className="col-md">
                <img src={`../.././assets/img_platillos_restaurantes/${sectionId}/${idName}.png`} className="card-img img-fluid" alt={dish_name} />
            </div>
            
            <div className="col-md my-auto">
                <div className="card-title ">
                    <h3><strong>{ dish_name }</strong></h3>
                </div>
                <div className="card-body mt-0 py-0">
                   
                    <h5 className="text-secondary">{ `Pza: ${counter}   Total: $${price*counter}.00`}</h5>
                </div>
                <div className="mt-2 px-5 mx-auto"> 
                    <button className="btn btn-danger btn-block" onClick={handleEliminar}>Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    )
}
 