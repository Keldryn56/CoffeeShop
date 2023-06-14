import { Image, Text, View } from 'react-native';


export default ProductItem = ({item}) => {

    return (
        <View className="w-[130] mr-[20]">
            <Image className="rounded-full" resizeMode="contain" resizeMethod="scale" source={{
                uri: item.image,
                width: 130,
                height: 130
            }}/>
            <Text numberOfLines={1} className="text-center mt-[10] text-normal font-normal">{item.name}</Text> 
        </View>
    )
}