import React from 'react'
import { Link } from 'react-router-dom'
import { PlatillosPrincipalesSecciones } from '../../../../data/PlatillosPrincipalesSecciones'
import { FooterScreen } from '../../footerView/FooterScreen'
import { NavbarScreen } from '../../navbarView/NabvarScreen'
import { BarraVenta } from '../BarraVenta'

export const VentaMenuScreen = () => {


    const sectionMap = (section) =>{
        const sectionId = section.replace(/ /gi,"_");
        return sectionId
    }


    return (
        <> 

<NavbarScreen />

        <header className="bg-dark py-1" id="navbar">
            <BarraVenta />
        </header> 
            

        <div className="container pl-0 pr-0">

        <div className="row">
            {
                PlatillosPrincipalesSecciones.map(dish => (
                    
                    <div key={dish.id} className="col-md-4 mx-auto mt-3">
                        <div className="card " style={{maxWidth: 340}}>
                            <Link  to={`/ventaOnline/menuGeneral/${sectionMap(dish.section)}`}>
                                <img className="card-img img-fluid" src={`../.././assets/img_platillos_restaurantes/${sectionMap(dish.section)}/${dish.idName}.png`} alt={dish.dish_name} />
                                <h3 className="text-light bg-dark py-2">{dish.section.toUpperCase()}</h3>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>

    <FooterScreen />
        </>    
    )
}
