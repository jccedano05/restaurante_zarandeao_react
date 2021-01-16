import React, { useContext, useMemo } from 'react'
import { getDishesBySection } from '../../../../selectors/getDishesBySection'
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext'

import { DishCard } from './DishCard'

export const DishesList = ({section}) => {


    const dishes = useMemo(() => getDishesBySection( section ), [section])

    const {renderProductosVentas} = useContext(TotalVentaContext)
    

    return (

        
            


            <div className="row">
                {
                    renderProductosVentas === 0 &&
                    dishes.map( dish => (
                        
                        
                        <div key={dish.id} className={ `col-md-3`}>
                            <DishCard {...dish} />
                        </div>
                    ))
                }
                {
                    renderProductosVentas === 1 &&
                    dishes.map( dish => (
                        
                        
                        <div key={dish.id} className={ `col-md-4`}>
                            <DishCard {...dish} />
                        </div>
                    ))
                }
            </div>
        
    )
}
