import React from 'react'
import { BrowserRouter as Router ,Redirect, Route, Switch } from 'react-router-dom'


import { ContactoScreen } from '../components/viewsComponents/contactoView/ContactoScreen'
import { FooterScreen } from '../components/viewsComponents/footerView/FooterScreen'
import { IndexScreen } from '../components/viewsComponents/indexView/IndexScreen'
import { MenuScreen } from '../components/viewsComponents/menuView/MenuScreen'
import { NavbarScreen } from '../components/viewsComponents/navbarView/NabvarScreen'
import { NosotrosScreen } from '../components/viewsComponents/nosotrosView/NosotrosScreen'
import { DishesScreen } from '../components/viewsComponents/ventaOnlineView/sectionDishes/DishesScreen'
import { VentaMenuScreen } from '../components/viewsComponents/ventaOnlineView/sectionMenu/VentaMenuScreen'



export const DashboardRoute = () => {

    

    return (
        
        
        <>

        <Router>

        <NavbarScreen />

       
            <Switch>
                <Route exact path="/" component={IndexScreen} />
                <Route exact path="/nosotros" component={ NosotrosScreen } />
                <Route exact path="/menu" component={ MenuScreen } />
                <Route exact path="/contacto" component={ ContactoScreen } />
                <Route exact path="/ventaOnline/menuGeneral" component={ VentaMenuScreen } />
                <Route exact path="/ventaOnline/menuGeneral/:section" component={ DishesScreen } />


                <Redirect to="/" />
            </Switch>
        
        </Router>

        <FooterScreen />
        </>
    )
}
