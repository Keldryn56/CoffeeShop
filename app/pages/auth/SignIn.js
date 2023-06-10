import { View, Text, TouchableOpacity } from 'react-native'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext'

export default SignIn = () => {

    const {signIn} = useAuthContext()
    
    return(
        <View className="flex-1 mt-40">
            <Text></Text>
            <TouchableOpacity>
                <Text>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signIn('John Doe', 'johndoe@gmail.com', '123456')}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </View>
    )
}
