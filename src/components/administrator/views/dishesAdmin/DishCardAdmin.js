import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { dishActive, dishStartDelete } from '../../../../actions/dishAction'

export const DishCardAdmin = ({
    id,
    dish_name,
    section,
    description,
    price,
    urlImage

}) => {

    const dispatch = useDispatch()

    const handleUpdate = () => {
        const dish = {
            id: id,
            dish_name: dish_name,
            section: section,
            description: description,
            price: price,
            urlImage: urlImage
        }

        dispatch( dishActive( dish ))
    }


    const handleDelete = () => {
        
        const dish = {
            id: id,
            dish_name: dish_name,
            section: section,
            description: description,
            price: price,
            urlImage: urlImage
        }

        dispatch( dishStartDelete( dish ))
    }



    return (
        
        <div className="card" style={{maxWidth: 340}} >

        <div className="row no-gutters ">
            <img src={urlImage} className="card-img img-fluid" alt={dish_name} />
        </div>

        <div className="card-body mx-auto">
            <h5 className="card-title text-center">{dish_name}</h5>
            <p className="card-text text-center">{description}.</p>
            <small class="text-muted">
                ID: {id}
            </small>
            <hr />
            <div className="d-flex justify-content-center">

                <button  className="btn-sm btn-primary mr-3" onClick={ handleUpdate }>
                    <Link className="nav-link text-light" to={`/administrador/platillos/dishes/nuevo/${id}`}>
                    Actualizar
                    </Link>
                    
                </button>

                <button  className="btn-sm btn-danger ml-3" onClick={ handleDelete }>Eliminar</button>
                

                <Link to="/administrador/platillos" id="returnLinkSection"></Link>
                

            </div>
        
        </div> 
    </div> 
        
    )
}
