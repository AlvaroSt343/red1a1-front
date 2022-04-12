import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { AdminRoute } from "hooks/useAdminRoute";
import { Form } from "react-bootstrap";
import styles from './dashboard.module.css'

const Usuarios = () => {
    const router = useRouter();

    return (
        <>
            <SEO titulo="Usuarios" url={router.asPath} />
            <DashboardLayout titulo="Usuarios">
                <section className="my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={`${styles.filtros}`}>
                                    <div className="row">
                                        <div className="col-3">
                                            <Form.Control type="text" placeholder="Buscar por nombre..." />
                                        </div>
                                        <div className="col-3">
                                            <Form.Select aria-label="Default select example">
                                                <option>Lugar de Residencia</option>
                                                <option value="1">Cancún, Q.Roo, MX</option>
                                                <option value="2">Merida, YUC, MX</option>
                                                <option value="3">CDMX, Mexico, MX</option>
                                                <option value="3">Tijuana, Baja California, MX</option>
                                                <option value="5">etc...</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col-2">
                                            <Form.Select aria-label="Default select example">
                                                <option>Paquete adquirido</option>
                                                <option value="1">Cancún, Q.Roo, MX</option>
                                                <option value="2">Merida, YUC, MX</option>
                                                <option value="3">CDMX, Mexico, MX</option>
                                                <option value="3">Tijuana, Baja California, MX</option>
                                                <option value="5">etc...</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col-2 p-0 text-end">
                                            <label>Desde:</label>
                                            <input className="Customdatepicker ms-1 mt-1" type="date" />
                                        </div>
                                        <div className="col-2 text-end">
                                            <label>Hasta:</label>
                                            <input className="Customdatepicker ms-1 mt-1" type="date" />
                                        </div>
                                    </div>
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