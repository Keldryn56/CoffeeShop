import { Image, Text, View } from 'react-native';


export default ProductItem = ({item}) => {

    return (
        <View className="w-[100] mr-[20]">
            <Image className="rounded-full" resizeMode="contain" resizeMethod="scale" source={{
                uri: item.image,
                width: 100,
                height: 100
            }}/>
            <Text numberOfLines={1} className="text-center mt-[10] font-medium">{item.name}</Text> 
        </View>
    )
}