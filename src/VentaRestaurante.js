import React, { useMemo, useState } from 'react'
import { TotalVentaContext } from './variablesContext/TotalVentaContext'
import { DashboardRoute } from './routers/DashboardRoute'

export const VentaRestaurante = () => {

 
     const [precioTotalVenta, setPrecioTotalVenta] = useState(0);

     const [productosAgregados, setProductosAgregados] = useState(null);

    
     
     

     const [renderProductosVentas, setRenderProductosVentas] = useState(0)

    

    return (

        <TotalVentaContext.Provider value={{precioTotalVenta, setPrecioTotalVenta, productosAgregados, setProductosAgregados, setRenderProductosVentas, renderProductosVentas}}> 
        <div id="principal">

    

        <DashboardRoute />
        
        </div>

        </TotalVentaContext.Provider>

    )
}
