import { View, Text, TouchableOpacity } from 'react-native'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext'

export default Home = () => {

    const {user, logOut} = useAuthContext()

    return (
        <View className="flex-1 p-[20]">
            <Text>You are logged in {user.displayName}</Text>
            <TouchableOpacity onPress={() => logOut()}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}