import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sectionActive, sectionStartAddNew, sectionStartUpdate, startUploading } from '../../../../actions/sectionAction'
import { SidebarAdministrator } from '../dashboard/SidebarAdministrator'


const initSectionForm = {
    id: '',
    section_name: '',
    description: '',
    urlImage: ''
} 





export const SectionAddUpdate = () => {

    const dispatch = useDispatch()

    const { sectionActiveValue } = useSelector(state => state.section)
    

    const [formValues, setFormValues] = useState( sectionActiveValue )


    
    
    
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }




     //Guardando Seccion
     const handleSubmitForm = ( e ) => {
        e.preventDefault();

        if(sectionActiveValue.id === ''){
            dispatch( sectionStartAddNew(formValues))
        } else {
            dispatch( sectionStartUpdate(formValues) )
        }
        
        setFormValues( initSectionForm )
        
        
      

        
        
    }



    //Subir Imagen
    const handlePictureClick = () => {

        dispatch( sectionActive( formValues ))
        
        document.querySelector('#fileSelector').click();
        
    }


    const handleFileChange = (e) => {
        let file = e.target.files[0];
        if( file ){
            dispatch( startUploading( file ));
        }
       
        setFormValues(sectionActiveValue);
    }




    const handleReturn = () =>{
        dispatch( sectionActive(initSectionForm) )
    }

    
    return (
        <div className="d-flex">
            <div className="col-md-2">
                <SidebarAdministrator /> 
            </div>   
            <div className="col-md-10 ml-3">

        <div className="container mt-5">
        
            <h3 className="text-left " >
                <Link to="/administrador/platillos" onClick={ handleReturn }  className="border border-secondary py-2 px-2"> Regresar a Menu </Link>
            </h3>

            {
                (sectionActiveValue.id === '')  &&
                    <h1 className=" text-center text-danger mt-5 mb-0"  > 
                        Agregar Seccion
                    </h1>       
            }
            {
                (sectionActiveValue.id !== '')  &&
                    <h1 className=" text-center text-danger mt-5 mb-0"  > 
                        Actualizar Seccion
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
                            placeholder="Nombre de la seccion"
                            name="section_name"
                            value={ formValues.section_name }
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
                <Link to="/administrador/platillos" id="returnLink"></Link>
                        </div>
        </div>
    </div>
    )
}
