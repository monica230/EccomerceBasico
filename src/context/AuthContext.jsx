
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false)   

    function login(username, password) {   
        const fakeUser = { username: username, nome: 'Yan', foto: 'https://'}
        setUser(fakeUser)
    }

    function logout() {
        setUser(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);