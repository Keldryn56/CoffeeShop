import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [sending, setSending] = useState(false)
    const [user, setUser] = useState(null)

    const signIn = (email, password) => {
        setSending(true)
        try{
            setUser({
                username: 'lull',
                email,
                password
            })
        }catch(e){
            console.log('error occured') 
        }finally{
            setSending(false)
        } 
    }

    const signUp = (username, email, password) => {
        setSending(true)
        try{
            setUser({
                username,
                email,
                password
            })
        }catch(e){
            console.log('error occured') 
        }finally{
            setSending(false)
        } 
    }

    const logOut = () => setUser(null) 

    return (
        <AuthContext.Provider value={{user, signIn, sending, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}