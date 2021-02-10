
const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = ( endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;
  
    

    if( method === 'GET'){
        return fetch( url )
    } else {
        return  fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'  //decimos que tipo de contenido mandaremos (en este caso solo recibiremos json en nuestro backend)
            },
            body: JSON.stringify( data )
        } )
    }

}



const fetchConToken = ( endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';
  
    console.log(url)
    if( method === 'GET'){
        return fetch( url, {
            method,
            headers: {
                'x-token' :  token
            }
        } )
    } else {
        return  fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',  //decimos que tipo de contenido mandaremos (en este caso solo recibiremos json en nuestro backend)
                'x-token' :  token
            },
            body: JSON.stringify( data )
        } )
    }

}


export {
    fetchSinToken,
    fetchConToken
}