import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import useFetch from '../../../hooks/useFetch';
import CategoryItem from './CategoryItem.js';

export default Categories = (props) => {
    const {title} = props
    const url = 'http://paul-virtual-machine:3000/categories' 
    
    const {errors, loading, data} = useFetch(url) 

    
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
                    data={data} 
                    style={{marginHorizontal: -20, paddingHorizontal: 20}}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <CategoryItem item={item} />
                        </TouchableOpacity>
                    )} 
                /> 
            )
            }
        </View>
    )
}