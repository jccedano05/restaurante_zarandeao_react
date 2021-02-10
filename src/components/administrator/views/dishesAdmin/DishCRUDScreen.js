import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dishStartLoading } from '../../../../actions/dishAction';
import { SidebarAdministrator } from '../dashboard/SidebarAdministrator';
import { DishCardAdmin } from './DishCardAdmin';

export const DishCRUDScreen = () => {


    const { section } = useParams();

    const dispatch = useDispatch()



    /****** Cargar informacion de seccion en redux  ******/ 

    useEffect(() => {
        
        dispatch( dishStartLoading())
        
    }, [dispatch])

    const {dishes} = useSelector(state => state.dish)


   

    /****** Filtramos los platillos por seccion  ******/ 

    const dishesSection = dishes.filter ( dish => dish.section.toLowerCase() === section.toLowerCase())
    



    return (
        
            <div className="d-flex">
                <div className="col-md-2 mr-1 px-0">
                    <SidebarAdministrator /> 
                </div>   


            <div className="col-md-10 ml-5 ">

                <div className="container mt-5 ">

                    <h1 className="text-left"> Seccion {section}</h1>
                    <hr />

                    <div className="d-flex py-2 mx-3 justify-content-around">
                                    {
                                        dishesSection.map( dish => (
                                            
                                            <DishCardAdmin {...dish} />
                                            ))
                                        }
                    </div>    
                </div>
            </div>
        </ div>
    )
}
