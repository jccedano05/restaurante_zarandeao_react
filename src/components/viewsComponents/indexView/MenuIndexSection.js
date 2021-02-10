import React from 'react'
import { Link } from 'react-router-dom'

export const MenuIndexSection = () => {
    return (
        <>



            <section className="container menu">
                <div className="info_menu">
                    <h2 className="title">LO MEJOR DEL MAR A TU PALADAR</h2>
                    <p className="description">
                        Los mariscos mas frescos, vive la experiencia.
                    </p>
                </div>   
                <div className="row ">
                    <div className="col-sm">
                        <div className="card">
                            <img src="images/platillo_2-min.jpg" className="card-img-top" alt="imagen tostada" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    ENTRADAS
                                </h5>
                                <p className="card-text">
                                    Nuestro tradicional menu te espera después de probar estas delicidas
                                    con el único toque sinaloense. Para iniciar nada mejor.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card">
                            <img src="images/pulpo para picar-min.png" className="card-img-top"
                                alt="Ecommerce Blogging: The 2020 Guide for Online Stores and DTC Brands" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    COCINA FRIA
                                </h5>
                                <p className="card-text">
                                                    Nuestro tradicional menu te espera después de probar estas delicidas
                                    con el único toque sinaloense. Para iniciar nada mejor.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card">
                            <img src="images/platillo pescado-min (1).png" className="card-img-top"
                                alt="What Is Licensed Content and How Does It Help Your Business Grow?" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    COCINA CALIENTE
                                </h5>
                                                <p className="card-text">
                                    Nuestro tradicional menu te espera después de probar estas delicidas
                                    con el único toque sinaloense. Para iniciar nada mejor.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </section>

                <div className="acceso-menu">
                    <Link to="/menu">Nuestro Menu</Link>
                </div>


                


</>
    )
}
