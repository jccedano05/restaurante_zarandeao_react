import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getDishesBySection } from '../../../../selectors/getDishesBySection'
import { TotalVentaContext } from '../../../../variablesContext/TotalVentaContext'

import { DishCard } from './DishCard'

export const DishesList = ({section}) => {


    const dishes = useMemo(() => getDishesBySection( section ), [section])

    const {renderProductosVentas} = useContext(TotalVentaContext)
    

    return (

        <>
            <div className="d-flex justify-content-start py-3">
                <Link to={`/ventaOnline/menuGeneral`}>
                    <i className ="fas fa-arrow-circle-left fa-5x"></i>
                </Link>
                <Link to={`/ventaOnline/menuGeneral`}  className="ml-5 my-auto">
                    <h1>Menu  /</h1>
                </Link>
                <Link to={`/ventaOnline/menuGeneral/${section}`} className="ml-1 my-2">
                    <h1 className="ml-3 my-auto">{section} </h1>
                </Link>
                
            </div>

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
        </>
    )
}
