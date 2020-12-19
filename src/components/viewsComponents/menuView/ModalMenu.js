import React, { useMemo } from 'react'
import { getDishesBySection } from '../../../selectors/getDishesBySection';

export const ModalMenu = ({section, modalNumber, idName }) => {

    const sectionId = section.replace(/ /gi,"_");


    const dishes = useMemo(() => getDishesBySection( section ), [section])

   
    const sectionSize = (Object.keys(dishes)).length;

    let menuLeftSection = [], menuRightSection = [] ;


    for(var i=0; i<(sectionSize/2); i++){
    menuLeftSection.push(dishes[i])
    }

    for(var j=0; j<sectionSize; j++){
        if(j>=sectionSize/2){
            menuRightSection.push(dishes[j])
        }
        }
   
    
    return (
        <>
         <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#portfolioModal" + modalNumber}>
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <h1>Visualizar</h1>
                                </div>
                            </div>
                            <img className="img-fluid" src={`../.././assets/img_platillos_restaurantes/${sectionId}/${idName}.png`} alt={idName} />
                        </div>
                        <br />
                        <h5 className="titulos-menu text-center">{section.toUpperCase()}</h5>
                    </div>   

      

            
{//<!-- Portfolio Modals-->
}
<div className="portfolio-modal modal fade" id={"portfolioModal" + modalNumber} tabIndex="-1" role="dialog"
    aria-labelledby={"portfolioModal" + modalNumber +"Label"} aria-hidden="true">
    <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fas fa-times"></i></span>
            </button>
            <div className="modal-body text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {//<!-- Portfolio Modal - Title-->
                            }
                            <h1 className="title-portafolio mb-0" id={"portfolioModal" + modalNumber +"Label"}>{ section }</h1>
                            {//<!-- Icon Divider-->
                            }
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <br />
                           {// <!-- Portfolio Modal - Image-->
                           }
                            <img className="img-fluid rounded mb-3" src={`../.././assets/img_platillos_restaurantes/${sectionId}/${idName}.png`} alt={idName} />



                            {//<!--  texto de platillos-->
                            }

                            <div className="menuCategory">
                                <span className="menuCatArrow icon-chevron-up"></span>


                                <div className="menuItemsWrapper menuCategory2Cols clearfix">
                                    <div className="categoryTextsWrapper"></div>


                                    {// platillos de la seccion
                                    }

                                    <div className="dmRestaurantMenuCol">

                                        {
                                            menuLeftSection.map(menu => (
                                                
                                                <div key={menu.id} className="menuItemBox ">
                                                    <div className="menuItemLeft">
                                                        <div className="menuItemName">{menu.dish_name}</div>
                                                        <div className="menuItemDesc">{menu.description}</div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>


{
    //-----------------------------------------------------------------------
}

<div className="dmRestaurantMenuCol">

{
    menuRightSection.map(menu => (
        <div key={menu.id} className="menuItemBox ">
            <div className="menuItemLeft">
                <div className="menuItemName">{menu.dish_name}</div>
                <div className="menuItemDesc">{menu.description}</div>
            </div>
        </div>
    ))
}
</div>




                                    {
    //-----------------------------------------------------------------------
}






                                </div>
                            </div>


                            <button className="btn btn-primary" data-dismiss="modal">
                                <i className="fas fa-times fa-fw"></i>
                                 Cerrar Ventana
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



        </>
    )
}
