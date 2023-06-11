import { useController } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import useVisible from '../hooks/useVisible'

export default Input = ({name, control, rules, errors = null, secure = false, ...props}) => {
    const {field} = useController({
        control,
        defaultValue: '',
        name,
        rules,
        errors
    })
    
    const {visible, Eye} = secure ? useVisible(secure)  : {visible: true, Eye: null}
    
    return(
        <View>
            <View className="bg-second rounded flex-row">
                <TextInput className="text-acc2 py-inpY px-inpX grow" secureTextEntry={!visible} {...props} value={field.value} onChangeText={field.onChange} /> 
                {secure &&
                    <Eye />
                }
            </View>
            {errors &&
                <Text className="ml-[15] mt-[8] text-red-300">{errors.message}</Text>
            }
        </View>
    )
}