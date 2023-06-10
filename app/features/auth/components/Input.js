import { useController } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

export default Input = ({name, control, rules, errors = {}, ...props}) => {
    const {field} = useController({
        control,
        defaultValue: '',
        name,
        rules,
        errors
    })
    return(
        <View className="bg-gray-200 rounded">
            <TextInput className="text-black py-3 px-5" {...props} value={field.value} onChangeText={field.onChange} /> 
            {errors&&
                <Text>{errors.message}</Text>
            }
        </View>
    )
}