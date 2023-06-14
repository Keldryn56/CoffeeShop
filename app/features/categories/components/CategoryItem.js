import { Image, Text, View } from 'react-native';


export default CategoryItem = ({item}) => {

    return (
        <View className="my-[5] flex-row items-center" style={{columnGap: 20}}>
            <Image className="rounded-full" resizeMode="contain" resizeMethod="scale" source={{
                uri: item.image,
                width: 60,
                height: 60
            }}/>
            <Text numberOfLines={1} className="text-center mt-[10] text-lg font-medium tracking-wide">{item.name}</Text> 
        </View>
    ) 
}