import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getDishesBySection } from '../../../../selectors/getDishesBySection'

import { DishCard } from './DishCard'

export const DishesList = ({section}) => {


    const dishes = useMemo(() => getDishesBySection( section ), [section])


    const {openDualScreenVenta} = useSelector(state => state.ui)
    

    return (

        
            


            <div className="row">
                {
                     ( !openDualScreenVenta ) &&
                    dishes.map( dish => (
                        
                        
                        <div key={dish.id} className={ `col-md-3`}>
                            <DishCard {...dish} />
                        </div>
                    ))
                }
                {
                    ( openDualScreenVenta ) &&
                    dishes.map( dish => (
                        
                        
                        <div key={dish.id} className={ `col-md-4`}>
                            <DishCard {...dish} />
                        </div>
                    ))
                }
            </div>
        
    )
}
