import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";
import { Form } from "react-bootstrap";
import styleRef from "components/paginas/dashboard/Referencias.module.css";
import styles from './dashboard.module.css'



const Usuarios = () => {
    const router = useRouter();


    return (
        <>
            <SEO titulo="Usuarios" url={router.asPath} />
            <DashboardLayout titulo="Usuarios">
                <section className="mt-5">
                    <div className="container">
                        <div className={`${styles.filtros}`}>
                            <div className={`${styles.headR}`}>
                                Detalles del Usuario
                            </div>
                            <div className="row p-2">
                                <div className="col-2">
                                    <div className={styles.backprofile}>
                                        <img className={`${styles.imgProfile}`} src="/images/avatares/2.svg" alt="..." />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    id:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    620fd8479d32c9541a3bb214
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    nombre:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    Alvaro Salvador
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Correo:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    alsato.650cc@gmail.com
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    telefono oficina:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    6686151651651651
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    telefono personal:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    6686151651651651
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Rol:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    Administrador
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Ubicación:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    Cancún, Q.ROO, MX
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Plan contratado:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    Avanzado
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Perfil empresarial:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                    Reiciendis, nostrum? Est consectetur.
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Inmobiliaria:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    Real State 8
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Dueño de:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    6 usuarios
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Sitio web:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    www.real-state8.com
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Facebook:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    facebook.com/alvaro.343
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Twitter:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    twitter.com/alvaro.343
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Instagram:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    instagram.com/alvaro.343
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    LinkedIn:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    linkedin.com/alvaro.343
                                                </div>
                                            </div>
                                            <div className="content mb-2">
                                                <div className={`${styles.etiqueta}`}>
                                                    Publicaciones:
                                                </div>
                                                <div className={`${styles.dato}`}>
                                                    8
                                                </div>
                                                <button className={`${styles.btnProps}`}>
                                                    Ver propiedades <i className="bi bi-caret-down-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-2 mb-5">
                    <div className="container">
                        <div className={`${styles.filtros}`}>
                            <div className="row">
                                <div className="col-6 ">
                                    prop 1
                                </div>
                                <div className="col-6 ">
                                    prop 2
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 mb-3">
                                <label><b>Desde:</b></label> <br />
                                <input type="date" className="Dpicker" />
                            </div>
                            <div className="col-2 mb-3">
                                <label><b>Hasta:</b></label> <br />
                                <input type="date" className="Dpicker" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-sm-2 mb-md-1 mb-2">
                                <Form.Control type="text" placeholder="Buscar . . . " />
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-sm-2 mb-md-1 mb-2">
                                <Form.Select aria-label="Default select example">
                                    <option>Ubicación</option>
                                    <option value="1">Cancún, Q.Roo, MX</option>
                                    <option value="2">Merida, YUC, MX</option>
                                    <option value="3">CDMX, Mexico, MX</option>
                                    <option value="3">Tijuana, Baja California, MX</option>
                                    <option value="5">etc...</option>
                                </Form.Select>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2 mb-sm-2 mb-md-1 mb-2">
                                <Form.Select aria-label="Default select example">
                                    <option>Paquete adquirido</option>
                                    <option value="1">Individual</option>
                                    <option value="2">Basico</option>
                                    <option value="3">Intermedio</option>
                                    <option value="3">Avanzado</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 my-2">
                                <div className={`${styleRef.tablaRef} table-responsive`}>
                                    <div className={styleRef.headerRef}>
                                        Usuarios registrados
                                    </div>
                                    <table className="w-100">
                                        <tr className={styleRef.rowT}>
                                            {/* <td className={styleRef.headersT}>Id</td> */}
                                            <td className={styleRef.headersT}>Fecha</td>
                                            <td className={styleRef.headersT}>Usuario</td>
                                            <td className={styleRef.headersT}>Correo</td>
                                            <td className={styleRef.headersT}>Número</td>
                                            <td className={styleRef.headersT}>Paquete</td>
                                            <td className={styleRef.headersT}>Publ.</td>
                                            <td className={styleRef.headersT}>Ubicación</td>
                                            <td className={styleRef.headersT}></td>
                                        </tr>

                                        <tr className={styleRef.rowT}>
                                            {/* <td className={styleRef.contentT}>
                                                as65d6asd56asd1a65d
                                            </td> */}
                                            <td className={styleRef.contentT}>
                                                25/22/55
                                            </td>
                                            <td className={styleRef.contentT}>
                                                Alvaro Salvador Torruco
                                            </td>
                                            <td className={styleRef.contentT}>
                                                alvarosalvador.t@gmail.com
                                            </td>
                                            <td className={styleRef.contentT}>
                                                9984751570
                                            </td>
                                            <td className={styleRef.contentT}>
                                                Avanzado
                                            </td>
                                            <td className={styleRef.contentT}>
                                                25
                                            </td>
                                            <td className={styleRef.contentT}>
                                                Cancun, Q.Roo, MX
                                            </td>
                                            <td className={styleRef.contentT}>
                                                <button
                                                    className={`${styleRef.btnT1} px-2 mx-1`}
                                                >
                                                    <i className="bi bi-eye" />
                                                </button>
                                            </td>
                                        </tr>

                                        <tr className={styleRef.rowT}>
                                            {/* <td className={styleRef.contentT}>
                                                as65d6asd56asd1a65d
                                            </td> */}
                                            <td className={styleRef.contentT}>
                                                25/22/55
                                            </td>
                                            <td className={styleRef.contentT}>
                                                Alvaro Salvador Torruco
                                            </td>
                                            <td className={styleRef.contentT}>
                                                alvarosalvador.t@gmail.com
                                            </td>
                                            <td className={styleRef.contentT}>
                                                9984751570
                                            </td>
                                            <td className={styleRef.contentT}>
                                                Avanzado
                                            </td>
                                            <td className={styleRef.contentT}>
                                                25
                                            </td>
                                            <td className={styleRef.contentT}>
                                                Cancun, Q.Roo, MX
                                            </td>
                                            <td className={styleRef.contentT}>
                                                <button
                                                    className={`${styleRef.btnT1} px-2 mx-1`}
                                                >
                                                    <i className="bi bi-eye" />
                                                </button>
                                            </td>
                                        </tr>


                                    </table>
                                    {/* {referencias.length === 0 ? (
                                        <h2 className="text-center py-5">
                                            Aún no hay referencias
                                        </h2>
                                    ) : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DashboardLayout>
        </>
    )
}

export default AdminRoute(Usuarios)