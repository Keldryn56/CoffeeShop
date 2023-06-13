import { SafeAreaView } from 'react-native'
import { useAuthContext } from './features/auth/hooks/useAuthContext'
import AuthNavigator from './navigation/AuthNavigator'
import AppTabNavigator from './navigation/AppTabNavigator'

export default MainApp = () => {
    const {user} = useAuthContext()
    return (
        <SafeAreaView className="flex-1 bg-prim">
            {
                user?.displayName ? <AppTabNavigator /> : <AuthNavigator />  
            }
        </SafeAreaView>
    )
}