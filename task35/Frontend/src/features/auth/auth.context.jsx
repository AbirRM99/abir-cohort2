import { createContext, useEffect, useState } from "react";
import { getMe, login, register } from "./services/auth.api";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const handleLogin = async (email, password) => {
        setLoading(true)
        try {
            const response = await login(email, password)
            setUser(response.user)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
        console.log("loged in")
    }

    const handleRegister = async (username, email, password) => {
        setLoading(true)
        try {
            const response = await register(username, email, password)
            setUser(response.user)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleRegister }}>
            {children}
        </AuthContext.Provider>
    )
}
