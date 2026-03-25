import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { handleUser } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChangeName = (e) => {
    setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
    setPassword(e.target.value)
    }

    const handleChangeConfPassword = (e) => {
    setConfirmpassword(e.target.value)
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (name.length < 3) return setError("Nombre inválido")
    if (!email.includes('@') || !email.includes('.')) return setError("Email inválido")
    if (password.length < 6) return setError("Contraseña muy corta")
    if (password !== confirmpassword) return setError("Las contraseñas no coinciden")

    handleUser({ name, email, password })
    navigate("/")
}

    const handlePage = (e) => {
    navigate("/login")
    }

    return (
    <section className="login">
        <h2 className="title-login">Crear una cuenta</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                minLength={3}
                onChange={handleChangeName}
                required
            />
            {name.length < 3 && <p className="error-form">Minimo 3 caracteres</p>}
            <input
                type="email"
                placeholder="Correo electrónico"
                onChange={handleChangeEmail}
                required
            />
            {(!email.includes('@') || !email.includes('.')) && (<p className="error-form">Mail no valido</p>)}
            <input
                type="password"
                minLength={6}
                placeholder="Contraseña"
                onChange={handleChangePassword}
                required
            />
            {password.length < 6 && <p className="error-form">Contraseña muy debil</p>}
            <input
                type="password"
                placeholder="Confirmar Contraseña"
                minLength={6}
                onChange={handleChangeConfPassword}
                required
            />
            {confirmpassword !== password && <p className="error-form">Las contraseñas deben coincidir</p>}
            <button>Registrar</button>
            {error && <p className="error-form">{error}</p>}
            <button type="button" onClick={handlePage}>Volver a inicio de sesión</button>
        </form>
    </section>
    )
}

export { Register }