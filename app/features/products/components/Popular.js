import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import useFetch from '../../../hooks/useFetch';
import ProductItem from './ProductItem';

export default Popular = (props) => {
    const {type, title} = props
    const url = 'http://paul-virtual-machine:3000/products'
    let filteredItems = [] 
    const {errors, loading, data} = useFetch(url) 
    
    if(type){
        filteredItems = data.filter(el => el.type.includes(type))
    }else{
        filteredItems = data
    }
        
    
    return (
        <View>
            <Text className="text-3xl font-bold tracking-wider mb-[20]">{title}:</Text>
            {loading ? (
                <ActivityIndicator className="flex-1 justify-center" />
            )
            : errors ?  
            (
                <Text>{errors}</Text>
            ) : (
                <FlatList 
                    keyExtractor={(item) => item.id} 
                    data={filteredItems} 
                    showsHorizontalScrollIndicator={false}
                    horizontal 
                    style={{marginHorizontal: -20, paddingHorizontal: 20}}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <ProductItem item={item} />
                        </TouchableOpacity>
                    )} 
                /> 
            )
            }
        </View>
    )
}