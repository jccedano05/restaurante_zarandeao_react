
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types"

 

const initDishForm = {
    id: '',
    dish_name: '',
    section: '',
    description: '',
    price: '',
    urlImage: ''
}  





export const dishStartAddNew = (dish) => {
    return async (dispatch, getState) => {

        const  { uid, name } = getState().auth
        

        try {

            const resp = await fetchConToken('admin/dish', dish, 'POST');
            
            const body = await resp.json();

            dispatch( dishActive( initDishForm ))

            console.log(body)

            if( body.ok ){

                Swal.fire('Saved', body.dish.dish_name, 'success')
                
                dish.id = body.dish.id;

                dish.user= {
                    _id: uid,
                    name: name
                }
                dispatch( dishAddNew( dish ));
                
                
            }
            
        } catch (error) {
            console.log(error)
        }

    }
}




 const dishAddNew = ( dish ) => ({
    type: types.dishAddNew,
    payload: dish
})




//cargar el archivo

export const startUploading =( file ) => {

    return async ( dispatch, getState ) => {

        const activeValue = getState().dish.dishActiveValue;
        

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
        
        dispatch( dishActive(activeValue ))

        Swal.close();

    }
}


export const dishActive = ( dish ) => ({
    type: types.dishActive,
    payload: dish
}) 


/// ya obtenemos los datoos
export const dishStartLoading = () => {
    return async (dispatch) => {


        try {

            const resp = await fetchConToken('admin/dish');
            const body = await resp.json();

            const dishes = body.dishes;
            dispatch( dishLoaded( dishes ));
            
        } catch (error) {
            console.log(error)
        }
        
    }
}

const dishLoaded = ( dishes ) => ({

    type: types.dishLoaded,
    payload: dishes
})





export const dishStartUpdate = (dish) => {
    return async (dispatch, getState) => {

        const  { uid, name } = getState().auth
        

        try {

            const resp = await fetchConToken(`admin/dish/${dish.id}`, dish, 'PUT');
            
            const body = await resp.json();

            dispatch( dishActive( initDishForm ))

            console.log(body)

            if( body.ok ){

                Swal.fire('Updated', body.evento.dish_name, 'success')

                
                dish.id = body.evento.id;

                dish.user= {
                    _id: uid,
                    name: name
                }
                dispatch( dishAddNew( dish ));

                document.querySelector('#returnLinkDish').click()
                
            }
            
        } catch (error) {
            console.log(error)
        }

    }
}




export const dishStartDelete = (dish) => {
    return async (dispatch) => {

        

        try {

            const resp = await fetchConToken(`admin/dish/${dish.id}`, dish, 'DELETE');
            
            const body = await resp.json();

            dispatch( dishActive( initDishForm ))

            console.log(body)

            if( body.ok ){

                Swal.fire('Dish Deleted', '', 'success')

                

                document.querySelector('#returnLinkSection').click()
                
            }
            
        } catch (error) {
            console.log(error)
        }

    }
}