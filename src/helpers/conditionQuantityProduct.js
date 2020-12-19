
export const conditionQuantityProduct = (idName , counter, productosAgregados) => {

    let aux=-1;
   
    
    for (let i = 0; i < productosAgregados.length; i++) {
       if(productosAgregados[i].idName === idName){
           aux=i;
       } 
    }

  
    return aux;
    
}
