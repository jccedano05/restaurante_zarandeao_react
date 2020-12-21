import React from 'react'

export const CarrouselItem = (props) => {

    const {active,srcNameImage ,srcSectionImage} = props.props;




    

    return (
        <div className={`carousel-item ${active}`}>
                    <div className="card-media">
                        <figure>
                            <img src={`/assets/img_platillos_restaurantes/${srcSectionImage}/${srcNameImage}.png`} alt={`${srcNameImage}`} />
                        </figure>
                    </div>
        </div>
    ) 
}
