import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider =  ({children}) => {
    const [isloggedIn, setIsloggedIn] = useState(false);

    const login = () => setIsloggedIn(true);
    const logout = () => setIsloggedIn(false);

    return(
        <AuthContext.Provider value={{isloggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

export {AuthContext, AuthProvider}