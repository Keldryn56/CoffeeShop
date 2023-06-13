import { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [sending, setSending] = useState(false)
    const [user, setUser] = useState(null)

    const onAuthStateChanged = (user) => {
        setUser(user);
    }

    const signIn = async(email, password) => {
        setSending(true)
        try{
            await auth().signInWithEmailAndPassword(email, password)
        }catch(e){
            alert(e.message) 
        }
        setSending(false) 
    }

    const signUp = async(username, email, password) => {
        setSending(true) 
        try{
            await auth().createUserWithEmailAndPassword(email, password)
            await auth().currentUser.updateProfile({
                displayName: username
            })
            await auth().currentUser.getIdToken(true) 
        }catch(e){
            alert(e.message) 
        }
        setSending(false)
    }

    const logOut = () => auth().signOut()

    useEffect(() => { 
        const subscriber = auth().onIdTokenChanged(onAuthStateChanged)
        return subscriber
    }, [])

    return (
        <AuthContext.Provider value={{user, signIn, sending, logOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}