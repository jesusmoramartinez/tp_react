import { createContext, useState } from "react"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const handleUser = (user) => {
        setLoggedUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        localStorage.removeItem("user")
        setLoggedUser(null)
    }

    return (
        <ChatContext.Provider value={{ handleUser, loggedUser, logout }}>
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }