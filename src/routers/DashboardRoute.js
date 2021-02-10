import React, { useEffect } from 'react'
import { BrowserRouter as Router ,Redirect, Switch } from 'react-router-dom'
import { VentasSeccionScreen } from '../components/administrator/views/ventasSeccion/VentasSeccionScreen'
import { DashboardAdministratorScreen} from '../components/administrator/views/dashboard/DashboardAdministratorScreen'
import { DishesAdminScreen } from '../components/administrator/views/dishesAdmin/DishesAdminScreen'
import { VentasGeneralScreen } from '../components/administrator/views/ventasGeneral/VentasGeneralScreen'


import { ContactoScreen } from '../components/viewsComponents/contactoView/ContactoScreen'
//import { FooterScreen } from '../components/viewsComponents/footerView/FooterScreen'
import { IndexScreen } from '../components/viewsComponents/indexView/IndexScreen'
import { MenuScreen } from '../components/viewsComponents/menuView/MenuScreen'
//import { NavbarScreen } from '../components/viewsComponents/navbarView/NabvarScreen'
import { NosotrosScreen } from '../components/viewsComponents/nosotrosView/NosotrosScreen'
import { DishesScreen } from '../components/viewsComponents/ventaOnlineView/sectionDishes/DishesScreen'
import { VentaMenuScreen } from '../components/viewsComponents/ventaOnlineView/sectionMenu/VentaMenuScreen'

import { LoginScreen } from '../components/auth/LoginScreen'
import { useDispatch, useSelector } from 'react-redux'
import { startChecking } from '../actions/auth'
import { PublicRoute } from './PublicRoutes'
import { PrivateRoute } from './PrivateRoutes'
import { DishAddUpdate } from '../components/administrator/views/dishesAdmin/DishAddUpdate'

import { SectionAddUpdate } from '../components/administrator/views/dishesAdmin/SectionAddUpdate'
import { DishCRUDScreen } from '../components/administrator/views/dishesAdmin/DishCRUDScreen'



export const DashboardRoute = () => {



    const dispatch = useDispatch();

    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        
        dispatch( startChecking() )

    }, [dispatch])


    if( checking ) {
        return <h5> Espere porfavor... </h5>
    }




    

    return (
        
        
        <>

        <Router>

        {/* <NavbarScreen /> */}

            <Switch>
                <PublicRoute exact path="/" component={IndexScreen} />
                <PublicRoute exact path="/nosotros" component={ NosotrosScreen } />
                <PublicRoute exact path="/menu" component={ MenuScreen } />
                <PublicRoute exact path="/contacto" component={ ContactoScreen } />
                <PublicRoute exact path="/ventaOnline/menuGeneral" component={ VentaMenuScreen }  />
                <PublicRoute exact path="/ventaOnline/menuGeneral/:section" component={ DishesScreen }  />
                
                <PrivateRoute extact path="/administrador/ventasgeneral" component={ VentasGeneralScreen } isAuthenticated={ !!uid }  />
                <PrivateRoute extact path="/administrador/platillos/section/nuevo" component={ SectionAddUpdate } isAuthenticated={ !!uid }  />
                <PrivateRoute extact path="/administrador/platillos/dishes/nuevo" component={ DishAddUpdate } isAuthenticated={ !!uid }  />

                <PrivateRoute 
                    extact path="/administrador/platillos/:section" 
                    component={ DishCRUDScreen } 
                    isAuthenticated={ !!uid }  
                />  

                <PrivateRoute 
                    extact path="/administrador/platillos" 
                    component={ DishesAdminScreen } 
                    isAuthenticated={ !!uid }  
                />

                


                <PrivateRoute extact path="/administrador/ventasseccion" component={ VentasSeccionScreen } isAuthenticated={ !!uid }  />
                <PrivateRoute extact path="/administrador" component={ DashboardAdministratorScreen } isAuthenticated={ !!uid }  />
                
                <PublicRoute extact path="/login" component={ LoginScreen } isAuthenticated={ !!uid }  />


                <Redirect to="/" />
            </Switch>
        
        </Router> 

        {/* <FooterScreen /> */}
        </>
    )
}
