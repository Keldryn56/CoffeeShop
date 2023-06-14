import { View, Text, TouchableOpacity } from 'react-native'
import { useAuthContext } from '../../features/auth/hooks/useAuthContext'
import Popular from '../../features/products/components/Popular'
import Categories from '../../features/categories/components/Categories'

export default Home = () => {

    const {user, logOut} = useAuthContext()

    return (
        <View className="flex-1 p-[20]" style={{rowGap: 20}}>
            <Popular title="Produits populaires"/>  
            <Categories title="Boissons" />
        </View>
    )
}