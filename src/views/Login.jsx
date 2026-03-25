import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import { Register } from "./Register"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { handleUser } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        if (!email || !password) {
        setError("Completar todos los campos")
        return
    }

    handleUser({ email, password })
    navigate("/")
}

    handleUser({ email, password })
    navigate("/")
    }

    const handlePage = (e) => {
    navigate("/register")
    }

    return (
    <section className="login">
        <h2 className="title-login">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChangeEmail}
            required
        />
        <input
            type="password"
            placeholder="Contraseña"
            onChange={handleChangePassword}
            required
        />
        <button>Ingresar</button>
        {error && <p className="error-form">{error}</p>}
        <button type="button" onClick={handlePage}>Crear cuenta</button>
        </form>
    </section>
    )
}

export { Login }