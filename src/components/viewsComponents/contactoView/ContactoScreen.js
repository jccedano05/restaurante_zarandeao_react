import React from 'react'

export const ContactoScreen = () => {
    return (
        <section className="contacto">
    <section className="row">
        <div className="col-md-6 texto">
            <h2 className="title">ENCUENTRANOS</h2>

            <article className="process-list">
                <div className="process-description">
                    <p>
                        Calle 62 x 33 y 35, Ciudad Caucel <br />
                        Ciudad de Merida, Yucatan, MX <br />
                        Telefono: (99) 86 78 65 44.
                    </p>
                </div>
            </article>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7449.541863581925!2d-89.68820022081586!3d21.00181748229239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzA0LjgiTiA4OcKwNDEnMTcuNiJX!5e0!3m2!1ses!2smx!4v1598279194729!5m2!1ses!2smx"
                width="350" height="300" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                tabIndex="0" className="mapa-google" title="Direccion Zarandeado"></iframe>
        </div>
        <div className="col-md-6 formulario-contacto">
            <div className="textwidget">
                <h1 className="text-center font-weight-bold">
                    Contactanos!
                </h1>
                <p className="text-center h5">
                    Y recibe todas las promociones de manera inmediata.
                </p>
            </div>

            <form>
                <label className="labels-formato">Nombre: </label>
                <div className="form-group d-flex justify-content-center">
                    <input type="text" className="form-control-md" id="inputNombre" placeholder="Nombre" />
                </div>
                <label className="labels-formato">Correo Electronico:
                </label>
                <div className="form-group d-flex justify-content-center">
                    <input type="email" className="form-control-md" id="inputEmail" aria-describedby="emailHelp"
                        placeholder="Correo - Email" />
                </div>
                <label className="labels-formato">Telefono:</label>
                <div className="form-group d-flex justify-content-center">
                    <input type="text" className="form-control-md" id="inputTelefono" placeholder="Telefono" />
                </div>
                <label className="labels-formato">Comentarios:</label>
                <div className="form-group">
                    <textarea className="form-control-md" id="exampleFormControlTextarea1"
                        placeholder="Escriba aqui sus comentarios" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar Datos
                </button>
            </form>
        </div>
    </section>
</section>
    )
}
