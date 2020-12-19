import React from 'react'
import { Link } from 'react-router-dom'
import { CarrouselItem } from './CarrouselItem'


export const Carrousel = () => {
    return (
        <div className="stories-carousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-caption">
                    <h1>El sabor del mar en tu mesa</h1>
                    <div className="conocenos">
                        <Link to="/nosotros">Conoce nuestra historia</Link>
                    </div>
                </div>
             
                <div className="carousel-inner">
                    <CarrouselItem props = {{active:"active", srcSectionImage:"para_picar",   srcNameImage:"pulpo_para_picar"}} />

                    <CarrouselItem  props = {{active:"", srcSectionImage:"cocina_fria",     srcNameImage:"callo_hacha"}} />
               

                    <CarrouselItem props = {{active:"", srcSectionImage:"tostadas",     srcNameImage:"tostada_mixta"}} />
                </div>

                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>


                </div>            
        </div>
    )
}
