import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types"
 
 


const initSectionFrom = {
    id:'',
    section_name: '',
    description: '',
    urlImage: ''
}  




export const sectionStartAddNew = (section) => {
    return async (dispatch, getState) => {

        const  { uid, name } = getState().auth

        try {

            const resp = await fetchConToken('admin/section', section, 'POST');
            const body = await resp.json();

            dispatch( sectionActive( initSectionFrom ))


            if( body.ok ){

                Swal.fire('Saved', body.section.section_name, 'success')
                
                section.id = body.section.id;

                section.user= {
                    _id: uid,
                    name: name
                }
                dispatch( sectionAddNew( section ));

                 
            }

            
        } catch (error) {
            console.log(error)
        }

    }
}




 const sectionAddNew = ( section ) => ({
    type: types.sectionAddNew,
    payload: section
})



//cargar el archivo

export const startUploading =( file ) => {

    return async ( dispatch, getState ) => {

        const activeValue = getState().section.sectionActiveValue;
        

        Swal.fire({
            title: 'Uploading...',
            text: 'Please Wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });


        const fileUrl = await fileUpload( file );

        activeValue.urlImage = fileUrl
        
        dispatch( sectionActive(activeValue ))

        Swal.close();

    }
}


export const sectionActive = ( section ) => ({
    type: types.sectionActive,
    payload: section
}) 



/// ya obtenemos los datoos
export const sectionStartLoading = () => {
    return async (dispatch) => {


        try {

            const resp = await fetchConToken('admin/section');
            const body = await resp.json();

            const sections = body.sections;
            dispatch( sectionLoaded( sections ));
            
        } catch (error) {
            console.log(error)
        }
        
    }
}


const sectionLoaded = ( sections ) => ({

    type: types.sectionLoaded,
    payload: sections
})




export const sectionStartUpdate = (section) => {
    return async (dispatch, getState) => {

        const  { uid, name } = getState().auth

        try {

            const resp = await fetchConToken(`admin/section/${section.id}`, section, 'PUT');
            const body = await resp.json();

            dispatch( sectionActive( initSectionFrom ))


            if( body.ok ){

                Swal.fire('Updated', body.section.section_name, 'success')
                
                section.id = body.section.id;

                section.user= {
                    _id: uid,
                    name: name
                }
                dispatch( sectionAddNew( section ));
                document.querySelector('#returnLink').click();
                
            }

            
        } catch (error) {
            console.log(error)
        }

    }
}




/*------- Delete Section ------ */

export const sectionStartDelete = (section) => {
    return async (dispatch) => {

        

        try {

            const resp = await fetchConToken(`admin/section/${section.id}`, section, 'DELETE');
            
            const body = await resp.json();

            dispatch( sectionActive( initSectionFrom ))

            console.log(body)

            if( body.ok ){

                Swal.fire('Section Deleted', '', 'success')


                document.querySelector('#returnLinkSection').click()
                
            }
            
        } catch (error) {
            console.log(error)
        }

    }
}