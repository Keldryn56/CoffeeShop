import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    const signIn = (username, email, password) => {
        setLoading(true)

        try{
            setUser({
                username,
                email,
                password
            })
        }catch(e){
            console.log('error occured')
        }
        setLoading(false)
    }

    const logOut = () => setUser(null) 

    return (
        <AuthContext.Provider value={{user, signIn, loading, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}