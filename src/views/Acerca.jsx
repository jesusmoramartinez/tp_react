import { Link } from "react-router-dom"
const Acerca = () => {
    return (
    
    <div className="aboutpage">
        <h1 className="title-login">Chats WhatsApp</h1>
        <h3>Acerca del Proyecto</h3>
        <p>Este proyecto fue desarrollado utilizando React.</p>
        <h3> Decisiones y vistas sobre el proyecto</h3>
        <p>Incluye funcionalidades como registro de usuario, manejo de estado global con Context y persistencia de datos. Se utilizó HTML y CSS para la estructura y estilos.</p>
        <Link to="/">Volver a inicio de sesión</Link>
    </div>
    )
}

export { Acerca }
