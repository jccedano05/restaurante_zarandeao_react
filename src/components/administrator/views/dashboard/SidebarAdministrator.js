import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../../../actions/auth'

export const SidebarAdministrator = () => {


    const { name } = useSelector(state => state.auth)

    const dispatch = useDispatch()


    const handleLogout = () => {
        dispatch( startLogout() )
    }




    return (
        <aside className="sidebarAdmin__main">
            <div className="sidebarAdmin__navbar my-5">
                <h3 className="">
                    <i className="far fa-moon"></i>
                    <span> { name } </span>
                </h3>
                <button className="sidebarAdmin__btnSignOut" onClick={ handleLogout }>
                    Logout
                </button>
            </div>     

<nav class="navbar navbar-expand-lg navbar-light ">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav flex-column">
    <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/administrador">Principal</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/administrador/ventasgeneral">Ventas General</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/administrador/ventasseccion">Ventas Seccion</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/administrador/platillos">platillos</NavLink>
            </li>
    </ul>
  </div>
</nav>              
        </aside>
    )
}
