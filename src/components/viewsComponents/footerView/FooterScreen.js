import React from 'react'

export const FooterScreen = () => {
    return (
        <>

<section className=" acceso-contacto">
    <div className=" row align-items-center">

        <div className="col-md-6">
            <div className="col-sm-8">
                <h2 className="title">CONTACTO</h2>

                <article className="process-list">
                    <div className="process-description">
                        <p>Ciudad de Merida, Yucatan, MX <br /> Telefono: (99) 86 78 65 44.</p>
                        
                    </div>

                </article>
            </div>

            <div className="col-sm-8  imagen-bn">
                <img src="/images/Logo_BN-min.png" className="img-fluid " alt="Logo Restaurante" />
            </div>

        </div>

        <div className="col-md-6">
            <div className="textwidget">
                <h1 className="text-center font-weight-bold">Suscríbete</h1>
                <p className="text-center h5">Y recibe todas las promociones de manera inmediata.</p>
            </div>
            <form>
                <div className="form-group d-flex  justify-content-center">
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="nombre@ejemplo.com" />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
            <div className="redes_sociales inferior">
                <a className="linksInstaTwitter" target="_blank" href="http://www.instagram.com" rel="noreferrer">
                    <img src="/images/insta_icono-min.png" className="icono_insta" alt="Icono Instagram" />
                </a>
                <a className="linksInstaTwitter" target="_blank" href="http://www.twitter.com" rel="noreferrer">
                    <img src="/images/twitter_icono-min.png" className="icono_twitter" alt="Icono Twitter" />
                </a>
                <a target="_blank" href="http://www.facebook.com" rel="noreferrer">
                    <img src="/images/face_icono-min.png" className="icono_face inferior" alt="Icono Facebook" />
                </a>
            </div>
        </div>
    </div>
</section>  
        </>
    )
}
