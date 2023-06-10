import { useController } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

export default Input = ({name, control, rules, errors = null, ...props}) => {
    const {field} = useController({
        control,
        defaultValue: '',
        name,
        rules,
        errors
    })
    
    return(
        <View>
            <View className="bg-gray-200 rounded">
                <TextInput className="text-black py-inpY px-inpX" {...props} value={field.value} onChangeText={field.onChange} /> 
            </View>
            {errors &&
                <Text className="ml-[15] mt-[5] text-red-600">{errors.message}</Text>
            }
        </View>
    )
}