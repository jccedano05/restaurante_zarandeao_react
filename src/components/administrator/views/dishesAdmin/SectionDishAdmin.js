import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dishActive } from '../../../../actions/dishAction';
import { sectionActive, sectionStartLoading, sectionStartDelete } from '../../../../actions/sectionAction';


    const emptySection = {
            id: '',
            section_name: '',
            description: '',
            urlImage: ''
    }

    const emptyDish = {
        id: '',
       dish_name: '',
       section: '',
       description: '',
       price: '',
       urlImage: ''
   }  


export const SectionDishAdmin = () => {

 

    const dispatch = useDispatch()


    /****** Cargar informacion de seccion en redux  ******/ 

    useEffect(() => {
        
        dispatch( sectionStartLoading())
        
    }, [dispatch])

    const {sections} = useSelector(state => state.section)


    /****** Cargar informacion de seccion en redux  ******/ 


    const handleNewSectionValues = () => {
        dispatch( sectionActive( emptySection ))
    }

    const handleNewDishValues = () => {
        dispatch( dishActive( emptyDish ))
    }




    const handleUpdate = (id, section_name, description, urlImage) => {
        const section = {
            id: id,
            section_name: section_name,
            description: description,
            urlImage: urlImage
        } 

        dispatch( sectionActive( section ))
    }

    const handleDelete = (id, section_name, description, urlImage) => {
        const section = {
            id: id,
            section_name: section_name,
            description: description,
            urlImage: urlImage
        } 
        

        dispatch( sectionStartDelete( section ))
    }
    
 

    return (
        <>
    <div className="container pl-0 pr-0">
        <hr />
        <h1>ADMINISTRACION DE PLATILLOS</h1>
        <hr />

    <div className="d-flex justify-content-around">
        
        

        <button className="btn btn-success" onClick={ handleNewSectionValues } >
            <Link  className="nav-link" to="/administrador/platillos/section/nuevo"><h3 className="text-dark">Agregar Seccion</h3></Link>
        </button>
        


 
        <button className="btn btn-warning" onClick={handleNewDishValues} >
            <Link  className="nav-link" to="/administrador/platillos/dishes/nuevo"><h3 className="text-dark">Agregar Platillo</h3></Link>
        </button>
    </div>

    <div className="row">
        {
            sections.map(section => (
            
                <div key={section.id} className="col-md-4 mx-auto mt-3">
                    <div className="card " style={{maxWidth: 340}}>
                        <Link  to={`/administrador/platillos/${section.section_name}`}>
                            <img className="card-img img-fluid" src={`${section.urlImage}`} alt={section.section_name} />
                             <h3 className="text-light bg-dark py-2">{section.section_name.toUpperCase()}</h3>
                        </Link>
                        

                        <div className="d-flex justify-content-center">

                            <button  className="btn-sm btn-primary mr-3" onClick ={ () =>  handleUpdate(section.id, section.section_name, section.description, section.urlImage ) }>
                                <Link className="nav-link text-light" to={`/administrador/platillos/section/nuevo/${section.id}`}>
                                    Actualizar
                                </Link>
                    
                            </button>

                            <button  className="btn-sm btn-danger ml-3" onClick={ () =>  handleDelete(section.id, section.section_name, section.description, section.urlImage ) }>Eliminar</button>

                            <Link to="/administrador/platillos" id="returnLinkSection"></Link>
                        </div>


                    </div>
                </div>
            ))
        }
    </div>
    </div>



        


        </>
    )
}
