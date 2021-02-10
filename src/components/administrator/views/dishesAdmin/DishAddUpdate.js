import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { dishStartAddNew, dishActive, startUploading, dishStartUpdate } from '../../../../actions/dishAction'
import { sectionStartLoading } from '../../../../actions/sectionAction'
import { SidebarAdministrator } from '../dashboard/SidebarAdministrator'


 const initDishForm = {
     id: '',
    dish_name: '',
    section: '',
    description: '',
    price: '',
    urlImage: ''
}  







export const DishAddUpdate = () => {

    const dispatch = useDispatch()


     /****** Cargar informacion de seccion en redux  ******/ 

     useEffect(() => {
        
        dispatch( sectionStartLoading())
        
    }, [dispatch])

    const {sections} = useSelector(state => state.section)

    /****** Cargar informacion de seccion en redux  ******/ 


    const { dishActiveValue } = useSelector(state => state.dish)
    
    const [formValues, setFormValues] = useState( dishActiveValue )

    
    
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }




     //Guardando Seccion
     const handleSubmitForm = ( e ) => {
        e.preventDefault();

        if(dishActiveValue.id === ''){
            dispatch( dishStartAddNew(formValues))
        } else{
            dispatch( dishStartUpdate(formValues) )
        }

        
        
        setFormValues( initDishForm )
        
      

        
        
    }



    //Seleccionar Imagen
    const handlePictureClick = () => {

        dispatch( dishActive( formValues ))
        
        document.querySelector('#fileSelector').click();
        
    }

    // Subir Imagen
    const handleFileChange = (e) => {
        let file = e.target.files[0];
        
        if( file ){
            
            dispatch( startUploading( file ));
        }
       
        setFormValues(dishActiveValue);
    }


    const handleReturn = () =>{
        dispatch( dishActive(initDishForm) )
    }



    
    return (
        <div className="d-flex">
            <div className="col-md-2">
                <SidebarAdministrator /> 
            </div>   
            <div className="col-md-10 ml-3">

        <div className="container mt-5">
        
            <h3 className="text-left " >
                <Link to="/administrador/platillos" onClick={handleReturn}  className="border border-secondary py-2 px-2"> Regresar a Menu </Link>
            </h3>

            {
                (dishActiveValue.id === '')  &&
                    <h1 className=" text-center text-danger mt-5 mb-0"  > 
                        Agregar Platillo
                    </h1>
            }
            {
                (dishActiveValue.id !== '')  &&
                    <h1 className=" text-center text-danger mt-5 mb-0"  > 
                        Actualizar Platillo
                    </h1>
            }
            <br />
            <div className="divider-custom text-dark">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

        

                <form className="text-dark" onSubmit={ handleSubmitForm } >

                    <hr />
                    <div className="form-group">
                        <h5 className="text-left">Titulo</h5>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre del platillo"
                            name="dish_name"
                            value={ formValues.dish_name }
                            onChange= { handleInputChange }
                            autoComplete="off"
                            />
                    </div>

                    <div className="form-group">
                        <h5 className="text-left">Seccion</h5>
                        <select 
                        class="form-control"
                        placeholder="seccion"
                        name="section"
                        value={ formValues.section }
                        onChange= { handleInputChange }
                        >
                            <option>- Opciones -</option>
                        {
                            sections.map( section => (
                                <option>{section.section_name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <h5 className="text-left">Price</h5>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Precio"
                            name="price"
                            value={ formValues.price }
                            onChange= { handleInputChange }
                            autoComplete="off"
                            />
                    </div>

                    <div className="form-group">
                        <h5 className="text-left">Descripcion</h5>
                        <textarea 
                            type="text" 
                            className="form-control"
                            placeholder="Descripcion"
                            rows="5"
                            name="description"
                            value={ formValues.description }
                            onChange= { handleInputChange }
                            ></textarea>
                    </div>


                    <input id="fileSelector" name="file" type="file" style= {{ display: 'none' }} onChange={ handleFileChange } />

                    <button className="btn btn-block" type="button" onClick={ handlePictureClick }>
                    <div className="form-group">
                        <h5 className="text-left">Imagen</h5>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="urlImagen"
                            name="Url de Imagen"
                            value={ formValues.urlImage }
                            onChange= { handleInputChange }
                            autoComplete="off"
                            />
                    </div>
                    </button>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        
                        
                        
                        >
                        <h4> Guardar</h4>
                    </button>

                    
                    

                </form>

                <Link to="/administrador/platillos" id="returnLinkDish"></Link>
                        </div>
        </div>
    </div>
    )
}
