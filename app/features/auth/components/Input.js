import { useController } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import colors from 'tailwindcss/colors'

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
            <View className="bg-second rounded">
                <TextInput className="text-acc2 py-inpY px-inpX" {...props} value={field.value} onChangeText={field.onChange} /> 
            </View>
            {errors &&
                <Text className="ml-[15] mt-[8] text-red-300">{errors.message}</Text>
            }
        </View>
    )
}