import cx from 'classnames';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import colors from '../../../../tailwind-extend';

export default Btn = ({onSubmit, name, sending, ...props}) => {

    const containerClasses = cx('rounded py-inpY px-inpX bg-acc h-[45]', sending == true ? 'opacity-80' : null) 
    const textClasses = cx('text-center text-second font-medium text-base', props.uppercase == true ? 'uppercase' : null)

    return (
        <TouchableOpacity disabled={sending} className={containerClasses} onPress={onSubmit}>
            {!sending ? <Text className={textClasses}>{name}</Text> : <ActivityIndicator color={colors.prim} size="small" />}
        </TouchableOpacity>
    )
} 