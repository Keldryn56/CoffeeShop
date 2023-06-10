import { View, Text, TouchableOpacity } from 'react-native'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext'

export default Home = () => {

    const {user, logOut} = useAuthContext()

    return (
        <View className="flex-1 mt-80">
            <Text>You are logged in</Text>
            <TouchableOpacity onPress={() => logOut()}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}