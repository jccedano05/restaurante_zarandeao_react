import React, {  useState } from 'react'
import { TotalVentaContext } from './variablesContext/TotalVentaContext'
import { DashboardRoute } from './routers/DashboardRoute'
import { Provider } from 'react-redux';
import { store } from './store/store';

export const VentaRestaurante = () => {

 
     const [precioTotalVenta, setPrecioTotalVenta] = useState(0);

     const [productosAgregados, setProductosAgregados] = useState(null);

    
     const [renderListClose, setRenderListClose] = useState(0)
     

     const [renderProductosVentas, setRenderProductosVentas] = useState(0)

    

    return (

        <Provider store={ store }>


            <TotalVentaContext.Provider value={{precioTotalVenta, setPrecioTotalVenta, productosAgregados, setProductosAgregados, setRenderProductosVentas, renderProductosVentas, renderListClose, setRenderListClose}}> 

                <div id="principal">    

                    <DashboardRoute />
        
                </div>

            </TotalVentaContext.Provider>

        </Provider>
    )
}
