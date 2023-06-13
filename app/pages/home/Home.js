import { View, Text, TouchableOpacity } from 'react-native'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext'
import ProductList from '../../features/products/ProductList'

export default Home = () => {

    const {user, logOut} = useAuthContext()

    return (
        <View className="flex-1 p-[20]">
            <ProductList title="Populaires"/>  
            <ProductList type="Iced" title="Froids"/>  
        </View>
    )
}