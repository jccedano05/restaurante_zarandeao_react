import React from 'react'
import { FooterScreen } from '../footerView/FooterScreen'
import { NavbarScreen } from '../navbarView/NabvarScreen'

export const NosotrosScreen = () => {
    return (
<>

<NavbarScreen />


        <section className="row nosotros">
    <div className="col-sm texto-nosotros">
        <h1>NUESTRA COCINA</h1>
        <br />
        <p>
            Somos un restaurante especializados en pescados y mariscos.
            Ofrecemos la más alta calidad y frescura en cada platillo.
        </p>
        <p>
            Nuestra cocina está influenciada por la gastronomía del
            Pacifico y especialmente Mazatlan, Sinaloa. Creemos en la
            importancia y valor de la satisfacción de nuestros clientes.
            Más que un servicio, nos ocupamos por brindar verdaderas
            experiencias y momentos de calidad.
        </p>
    </div>

    <div className="col-sm">
        <figure>
            <img src="/images/monos bichis Mazatlan-min.jpg" className="img-fluid monosImg" alt="imagen monos bichis" />
        </figure>
    </div>
</section>

<FooterScreen />
</>
    )
}
