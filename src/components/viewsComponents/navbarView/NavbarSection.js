import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavbarSection = () => {
    return (
      



<nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to="/">
        <img src="/images/logo_chico-min.png" alt="Logo Restaurante" />
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto ">
          
            <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
        </ul>
        <form className="my-2 my-lg-0 actions">
            
        <NavLink className="nav-link d-flex align-items-center" to="/ventaOnline/menuGeneral"><button > Ordena En <br />  Linea </button></NavLink>
                
                
        </form>

    </div>

</nav>
    )
}
