import { useAuthContext } from './features/auth/hooks/useAuthContext'
import AuthNavigator from './pages/auth/AuthNavigator'
import { SafeAreaView } from 'react-native'
import Home from './pages/home/Home'

export default MainApp = () => {
    const {user} = useAuthContext()
    return (
        <SafeAreaView className="flex-1">
            {
                user ? <Home /> : <AuthNavigator /> 
            }
        </SafeAreaView>
    )
}